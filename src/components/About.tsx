import React from 'react';
import { motion } from 'framer-motion';
import { Code, Calendar, Building, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { icon: Code, label: 'Years Experience', value: '7+' },
    { icon: Building, label: 'Enterprise Projects', value: '10+' },
    { icon: Calendar, label: 'Current Role', value: '2018-Present' },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-400 mb-6"
          >
            About Me
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-100">I'm</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mohanraj Parthasarathy
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Backend Developer
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in developing enterprise-level solutions that
                  scale. My approach combines technical excellence with
                  collaborative teamwork to deliver efficient, robust
                  applications.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Expertise in Spring Boot, React, Angular, and AI/ML
                  technologies. Passionate about creating innovative solutions
                  for complex business challenges.
                </p>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Core Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Spring Boot",
                  "React & Angular",
                  "AI/ML Integration",
                  "Cloud Architecture",
                  "Database Design",
                  "API Development",
                  "DevOps & CI/CD",
                  "System Design",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                      <stat.icon
                        className="text-gray-600 dark:text-gray-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Let's Work Together
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ready to bring your ideas to life with cutting-edge technology
                and innovative solutions.
              </p>
              <button
                onClick={() => {
                  window.history.pushState(null, "", "#contact");
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-900 dark:text-gray-100 font-medium hover:underline underline-offset-4 transition-all duration-300"
              >
                Get in touch →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
