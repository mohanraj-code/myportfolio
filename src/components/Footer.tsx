import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mohanraj-parthasarathy', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@itsmohanraj.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <span className="text-3xl font-bold gradient-text">
              Mohanraj Parthasarathy
            </span>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">
              Backend Developer specializing in enterprise solutions and AI/ML
              technologies
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="text-red-500 mx-2" size={16} /> by
              Mohanraj Parthasarathy
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
