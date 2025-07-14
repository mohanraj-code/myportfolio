import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  // Show only featured projects (first 3)
  const featuredProjects: Project[] = [
    {
      title: "LMS - Line Management System",
      description:
        "Designed and developed RESTful APIs using Spring Boot for core LMS functionalities including login, mode selection, roster management, and production tracking with JWT-based authentication.",
      image: "Enterprise line management system dashboard",
      technologies: [
        "Spring Boot",
        "JWT",
        "REST APIs",
        "CSV Export",
        "Task Scheduler",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Question Answer Bot",
      description:
        "Trained a Large Language Model (LLM) for domain-specific question answering using Retrieval-Augmented Generation (RAG) and deployed on Azure AI Studio for scalability.",
      image: "AI chatbot interface with knowledge base",
      technologies: [
        "LLM",
        "RAG",
        "Azure AI Studio",
        "Python",
        "Machine Learning",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-slate-100 dark:bg-gray-800 section-transition relative"
    >
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-gray-900 to-transparent opacity-60 z-0"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs cursor-default select-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 relative z-10"
        >
          <Link to="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
