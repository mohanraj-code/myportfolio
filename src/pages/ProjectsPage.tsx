import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
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
      year: "2025",
    },
    {
      title: "DeskGee - Appointment Booking System",
      description:
        "Built a comprehensive appointment booking system using Spring Boot backend with real-time WebSocket communication and distributed services using Spring Cloud and RabbitMQ.",
      image: "Modern appointment booking interface",
      technologies: ["Spring Boot", "WebSocket", "Spring Cloud", "RabbitMQ"],
      year: "2024",
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
      year: "2023-2024",
    },
    {
      title: "Qbrother - Online Queue Management",
      description:
        "Solved WebSocket scaling issues across multiple VMs by implementing RabbitMQ as a shared message broker for real-time queue synchronization.",
      image: "Queue management system dashboard",
      technologies: [
        "WebSocket",
        "RabbitMQ",
        "Distributed Systems",
        "VM Scaling",
      ],
      year: "2023",
    },
    {
      title: "Robotic Palletizing System",
      description:
        "Developed an AI-powered system for manufacturing industries that uses computer vision and machine learning to identify bin positions and send picking coordinates to robots.",
      image: "Robotic automation system in manufacturing",
      technologies: [
        "Computer Vision",
        "Machine Learning",
        "Image Processing",
        "Robotics",
      ],
      year: "2021",
    },
    {
      title: "Multi QR Code Decoder",
      description:
        "Created an application that scans multiple QR codes simultaneously for manufacturing dock operations, optimizing forklift operator time through advanced image processing.",
      image: "QR code scanning interface for logistics",
      technologies: [
        "Image Processing",
        "QR Code Detection",
        "Computer Vision",
        "Manufacturing",
      ],
      year: "2019",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Mohanraj Parthasarathy</title>
        <meta
          name="description"
          content="Explore all projects by Mohanraj Parthasarathy, showcasing enterprise backend solutions, AI/ML applications, and innovative software development projects."
        />
        <meta
          name="keywords"
          content="projects, portfolio, backend development, Java, Spring Boot, AI, machine learning, enterprise solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header with back button */}
        <div className="bg-gray-50 dark:bg-gray-800 py-8 header-offset">
          <div className="container mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                All Projects
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore my complete portfolio of projects showcasing my skills
                and passion for development
              </p>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="text-xs cursor-default select-none"
                        >
                          {project.year}
                        </Badge>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
