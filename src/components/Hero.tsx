import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-300 dark:border-gray-700 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 border border-gray-200 dark:border-gray-800 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-gray-400 dark:border-gray-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Backend Developer
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
              Crafting enterprise solutions with modern technologies
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
              Specializing in AI/ML integration, scalable architectures, and
              innovative web experiences
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => {
                window.history.pushState(null, "", "#contact");
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 border-0 px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <Mail size={18} />
              </span>
            </Button>
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => {
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-xs text-gray-400 dark:text-gray-600 font-medium uppercase tracking-wider">
              Scroll
            </span>
            <ArrowDown
              className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
              size={20}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
