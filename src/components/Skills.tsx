import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C#', 'JavaScript', 'Python']
    },
    {
      title: 'Backend Technologies',
      skills: ['Spring Boot', 'RabbitMQ', 'WebSocket', 'REST APIs', 'JWT Authentication']
    },
    {
      title: 'Frontend Technologies',
      skills: ['ReactJS', 'Angular', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Cloud & Tools',
      skills: ['Azure VM', 'Azure AI Studio', 'GitLab', 'Mech-Vision', 'WinForms', 'WPF']
    },
    {
      title: 'AI/ML & Computer Vision',
      skills: ['Large Language Models', 'RAG', 'Object Detection', 'Image Processing', 'Machine Learning']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and staying up-to-date
              with the latest trends in enterprise development. Currently
              focusing on advanced AI/ML integration, cloud technologies, and
              scalable system architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
