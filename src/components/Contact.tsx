import React from "react";
import { motion } from "framer-motion";
import { Mail, LucideIcon, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@itsmohanraj.com",
      link: "mailto:hello@itsmohanraj.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com",
      link: "https://github.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/mohanraj-parthasarathy",
      link: "https://linkedin.com/in/mohanraj-parthasarathy",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Contact Information
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center">
                          <info.icon
                            className="text-gray-600 dark:text-gray-400"
                            size={24}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {info.title}
                          </h4>
                          <a
                            href={info.link}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center"
            >
              <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Let's Work Together
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, enterprise
                solutions, and innovative AI/ML projects. Let's create something
                impactful together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
