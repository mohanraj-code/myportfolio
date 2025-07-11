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
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-2xl shadow-2xl w-full"
              alt="Developer workspace"
              src="https://images.unsplash.com/photo-1698919585695-546e4a31fc8f"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Backend Developer & Enterprise Solutions Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              With over 7 years of experience at Mothercode Software Systems, I
              specialize in analyzing project requirements and developing
              enterprise-level solutions. I excel in collaborating with
              cross-functional teams to ensure project goals are achieved
              efficiently.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              My expertise spans from backend development with Spring Boot to
              frontend technologies like React and Angular. I'm passionate about
              AI/ML technologies, having worked on LLM training, computer
              vision, and robotic automation systems.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
