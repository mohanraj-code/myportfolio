import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
  isRoute?: boolean;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "/projects", isRoute: true },
  ];

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);

    if (item.isRoute) {
      // This will be handled by React Router
      return;
    }

    // For hash links, always navigate to home page first if not already there
    if (item.href.startsWith("#")) {
      e.preventDefault();

      if (location.pathname === "/") {
        // Already on home page, update URL with hash and scroll to section
        window.history.pushState(null, "", item.href);
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with hash for BrowserRouter
        navigate(`/${item.href}`);
      }
    }
  };

  return (
    <>
      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-slate-50/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/"
                className="text-1xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
                onClick={() => {
                  // Always scroll to top when clicking the logo
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Mohanraj
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 bg-slate-50/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 font-medium py-3 px-3 block rounded-lg text-center"
                        onClick={(e) => handleNavClick(item, e)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 font-medium py-3 px-3 block rounded-lg cursor-pointer text-center"
                        onClick={(e) => handleNavClick(item, e)}
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
