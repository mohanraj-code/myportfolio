import { useState, useEffect } from "react"

const TOAST_LIMIT = 1

export type ToastVariant = "default" | "destructive"

export interface ToastProps {
  id?: string
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
  dismiss?: () => void
}

interface ToastState {
  toasts: ToastProps[]
}

let count = 0
function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastStore = {
  state: {
    toasts: [],
  } as ToastState,
  listeners: [] as Array<(state: ToastState) => void>,
  
  getState: (): ToastState => toastStore.state,
  
  setState: (nextState: ToastState | ((state: ToastState) => ToastState)): void => {
    if (typeof nextState === 'function') {
      toastStore.state = nextState(toastStore.state)
    } else {
      toastStore.state = { ...toastStore.state, ...nextState }
    }
    
    toastStore.listeners.forEach(listener => listener(toastStore.state))
  },
  
  subscribe: (listener: (state: ToastState) => void): (() => void) => {
    toastStore.listeners.push(listener)
    return () => {
      toastStore.listeners = toastStore.listeners.filter(l => l !== listener)
    }
  }
}

export const toast = (props: Omit<ToastProps, 'id' | 'dismiss'>): ToastProps => {
  const id = generateId()

  const update = (props: Partial<ToastProps>): void =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === id ? { ...t, ...props } : t
      ),
    }))

  const dismiss = (): void => toastStore.setState((state) => ({
    ...state,
    toasts: state.toasts.filter((t) => t.id !== id),
  }))

  toastStore.setState((state) => ({
    ...state,
    toasts: [
      { ...props, id, dismiss },
      ...state.toasts,
    ].slice(0, TOAST_LIMIT),
  }))

  return {
    id,
    dismiss,
    update,
    ...props,
  }
}

export function useToast(): {
  toast: typeof toast
  toasts: ToastProps[]
} {
  const [state, setState] = useState<ToastState>(toastStore.getState())
  
  useEffect(() => {
    const unsubscribe = toastStore.subscribe((state) => {
      setState(state)
    })
    
    return unsubscribe
  }, [])
  
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    state.toasts.forEach((toast) => {
      if (toast.duration === Infinity) {
        return
      }

      const timeout = setTimeout(() => {
        toast.dismiss?.()
      }, toast.duration || 5000)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
    }
  }, [state.toasts])

  return {
    toast,
    toasts: state.toasts,
  }
}
