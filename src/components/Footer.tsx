import React from 'react';
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socialLinks = [
    { href: "mailto:hello@itsmohanraj.com", label: "Email" },
    { href: "https://github.com", label: "GitHub" },
    {
      href: "https://linkedin.com/in/mohanraj-parthasarathy",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
              >
                {social.label}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            2025 © Mohanraj Parthasarathy. Built with React & TypeScript.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
