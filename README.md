# Portfolio - Mohanraj Parthasarathy

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and automatic deployment to GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Automatic Deployment**: GitHub Actions workflow for seamless deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **UI Components**: Radix UI, Lucide React
- **Deployment**: GitHub Pages with custom domain
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/myportfolio.git
cd myportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment to GitHub Pages:

1. **Push to main branch**: Any push to the `main` or `master` branch triggers automatic deployment
2. **Manual deployment**: Use the "Actions" tab in GitHub to manually trigger deployment

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

## ⚙️ Configuration

### Custom Domain

If you're using a custom domain (like `itsmohanraj.com`):

1. Add your domain to the `public/CNAME` file
2. Configure your domain's DNS to point to GitHub Pages
3. Enable GitHub Pages in your repository settings

### Repository Deployment

If deploying to `username.github.io/repository-name`:

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: "/repository-name/",
  // ... other config
});
```

2. Update the `pathSegmentsToKeep` value in `public/404.html` to `1`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Hero.tsx        # Hero/About section
│   ├── Projects.tsx    # Featured projects section
│   ├── Experience.tsx  # Experience section
│   └── ...
├── pages/              # Page components
│   ├── HomePage.tsx    # Main landing page
│   └── ProjectsPage.tsx # All projects page
├── contexts/           # React contexts (theme, etc.)
├── lib/               # Utility functions
└── styles/            # Global styles
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Content

Update the content in:
- `src/components/Hero.tsx` - Personal information and skills
- `src/components/Projects.tsx` - Featured projects
- `src/components/Experience.tsx` - Work experience
- `src/pages/ProjectsPage.tsx` - Complete projects list

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 🔧 Environment Setup

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on the next push

### Custom Domain Setup

1. Add your domain to `public/CNAME`
2. Configure DNS:
   - For apex domain: A records pointing to GitHub Pages IPs
   - For subdomain: CNAME record pointing to `username.github.io`
3. Enable HTTPS in repository settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: hello@itsmohanraj.com
- **LinkedIn**: [linkedin.com/in/mohanraj-parthasarathy](https://linkedin.com/in/mohanraj-parthasarathy)
- **Website**: [itsmohanraj.com](https://itsmohanraj.com)