import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const experience: Experience[] = [
    {
      title: "Backend Developer",
      company: "Mothercode Software Systems Private Limited",
      period: "2018 - Present",
      description:
        "Develop enterprise backend solutions using Java, Spring Boot, and AI/ML technologies. Collaborate with cross-functional teams to analyze requirements and ensure project goals are achieved.",
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  dark:text-gray-100 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto ">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-blue-600 font-semibold">
                          {job.company}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {job.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{job.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
