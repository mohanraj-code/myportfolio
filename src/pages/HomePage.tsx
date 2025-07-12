import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      // Small delay to ensure the page is fully rendered and animations are complete
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Mohanraj Parthasarathy - Backend Developer</title>
        <meta
          name="description"
          content="Professional portfolio of Mohanraj Parthasarathy, a Backend Developer with expertise in Java, Spring Boot, React, Azure, and AI/ML technologies. Experienced in developing enterprise solutions and innovative projects."
        />
        <meta
          name="keywords"
          content="backend developer, Java, Spring Boot, React, Azure, AI, machine learning, portfolio"
        />
        <meta name="author" content="Mohanraj Parthasarathy" />
        <meta
          property="og:title"
          content="Mohanraj Parthasarathy - Backend Developer"
        />
        <meta
          property="og:description"
          content="Professional portfolio showcasing enterprise development projects and AI/ML solutions"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
    </>
  );
};

export default HomePage;
