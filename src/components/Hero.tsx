import React from 'react';
import { motion } from "framer-motion";

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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 dark:from-gray-800 to-transparent opacity-60 z-5"></div>

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
              with 7+ years of experience building scalable enterprise
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[
                "Java & Spring Boot",
                "React & Angular",
                "AI Integration",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-slate-200 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 text-center cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
