import React from 'react';
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 relative overflow-hidden pt-20 section-transition"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-300 dark:border-gray-700 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 border border-gray-200 dark:border-gray-800 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-gray-400 dark:border-gray-600 rounded-full"></div>
      </div>

      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 dark:from-gray-800 to-transparent opacity-60 z-0"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-8">
              I'm a{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Backend Developer
              </span>{" "}
              with 6+ years of experience building scalable enterprise
              applications. I focus on clean architecture, efficient
              problem-solving, and delivering reliable solutions that meet
              business objectives.
            </p>
          </motion.div>

          {/* Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {["Java & Spring Boot", "React & Angular", "AI Integration"].map(
                (skill) => (
                  <Badge
                    variant="secondary"
                    className="text-sm cursor-default select-none px-4 py-2 font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
