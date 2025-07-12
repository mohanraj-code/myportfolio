import React from 'react';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden pt-20"
    >
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
          {/* Main Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-8">
              I'm a Backend Developer specializing in enterprise-level solutions
            </p>
          </motion.div>

          {/* Professional Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* About Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  About
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Backend developer with 7+ years of experience building
                  scalable enterprise applications. I focus on clean
                  architecture, efficient problem-solving, and delivering
                  reliable solutions that meet business objectives.
                </p>
              </motion.div>

              {/* Expertise Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Proficient in Java, Spring Boot, React, and cloud
                  technologies. Experience with AI/ML integration, microservices
                  architecture, and modern development practices including CI/CD
                  and DevOps.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                "Java & Spring Boot",
                "React & Angular",
                "Cloud & DevOps",
                "AI/ML Integration",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-center"
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
