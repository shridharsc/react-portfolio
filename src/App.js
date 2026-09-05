import React from "react";
import "./App.css";

const skills = [
  "Angular",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS",
  "SCSS",
  "Tailwind CSS",
  "Redux",
  "Node.js",
  "REST API",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "LLM",
  "RAG",
  "AI Agents",
  "Flowise",
  "Generative AI",
  "AI Chatbot",
  "Jasmine",
  "Karma",
  "Git",
  "GitHub",
];

const projects = [
  {
    title: "Account Aggregator",
    description:
      "Scalable financial aggregation platform with REST APIs, PostgreSQL integration, secure data processing and enterprise workflows.",
    technologies: "Angular | Node.js | PostgreSQL | REST API",
  },
  {
    title: "Global Smart",
    description:
      "Responsive enterprise web application designed with reusable components, API integration and scalable application architecture.",
    technologies: "Angular | React | Node.js | PostgreSQL",
  },
  {
    title: "Universal Reconciliation System",
    description:
      "Enterprise reconciliation platform for automated data validation, transaction matching, exception handling and reporting.",
    technologies: "Angular | Node.js | PostgreSQL | REST API",
  },
  {
    title: "Codebase Chat Bot",
    description:
      "AI-powered chatbot integrated with a project codebase, allowing users to query documentation, application logic and project-related information using natural language.",
    technologies: "React | Node.js | LLM | RAG | AI Agent | Flowise",
  },
  {
    title: "Persona AI Chatbot",
    description:
      "AI-powered chatbot solution providing intelligent responses using LLM-based processing and project-specific knowledge.",
    technologies: "React | Node.js | LLM | RAG | Flowise",
  },
  {
    title: "Role-Based Chatbot",
    description:
      "Intelligent chatbot with role-based access capabilities, enabling users to interact with relevant information according to their application permissions.",
    technologies: "React | Node.js | LLM | RAG | AI Agent | Flowise",
  },
  {
    title: "KJMC Finserv",
    description:
      "Financial services web application with responsive UI, dynamic forms, validation and backend API integration.",
    technologies: "Angular | Node.js | HTML5 | CSS",
  },
  {
    title: "SINE IIT Bombay",
    description:
      "Web application supporting business workflows with responsive interfaces and reusable Angular components.",
    technologies: "Angular | Node.js | JavaScript",
  },
  {
    title: "PB Custody",
    description:
      "Enterprise application supporting custody-related workflows with dynamic forms and API integrations.",
    technologies: "Angular | Node.js | REST API",
  },
  {
    title: "BetterQ Web",
    description:
      "User-friendly web application with reusable UI components, dynamic forms and responsive layouts.",
    technologies: "Angular | HTML5 | CSS | Node.js",
  },
  {
    title: "PWM",
    description:
      "Enterprise web application with dynamic forms, validation, reusable components and backend integration.",
    technologies: "Angular | Node.js | REST API",
  },
  {
    title: "FreshR",
    description:
      "Web application focused on responsive UI development, reusable components and efficient business workflows.",
    technologies: "Angular | Node.js | JavaScript",
  },
  {
    title: "TATA Motors",
    description:
      "Enterprise-scale web application developed using modern Angular versions with reusable components, secure authentication and role-based access control.",
    technologies: "Angular 14/17/19/21 | TypeScript | SCSS | Tailwind CSS",
  },
  {
    title: "Havells",
    description:
      "Enterprise web application with reusable Angular components, directives, pipes, form validation, authentication and authorization.",
    technologies: "Angular | TypeScript | HTML5 | SCSS | Tailwind CSS",
  },
  {
    title: "Whirlpool",
    description:
      "Enterprise application development with modular components, unit testing, secure application access and Git-based development workflows.",
    technologies: "Angular | TypeScript | Jasmine | Karma | Git",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Vishleshan Software Solutions",
    duration: "Dec 2025 - Present",
    projects: "TATA Motors, Havells, Whirlpool",
    points: [
      "Developed and maintained enterprise-scale web applications using Angular (14/17/19/21), TypeScript, HTML5, SCSS and Tailwind CSS.",
      "Built reusable and modular Angular components, directives, pipes and shared libraries to improve code maintainability.",
      "Implemented form validation, authentication, authorization, route guards and role-based access control.",
      "Developed unit tests using Jasmine and Karma to improve application reliability and stability.",
      "Used Git for version control and managed code through feature branching and pull request workflows.",
      "Collaborated with backend developers, QA engineers and product owners to deliver features within project timelines.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cateina Technology Solutions",
    duration: "June 2023 - Sep 2025",
    projects:
      "Account Aggregator, Global Smart, Universal Reconciliation, Codebase Chat Bot, Persona AI Chatbot, Role-Based Chatbot",
    points: [
      "Developed and maintained responsive web applications using HTML5, CSS, Angular (12/14), React, Node.js and PostgreSQL.",
      "Designed and implemented RESTful APIs, improving data processing efficiency by 30%.",
      'Played a key role in achieving the "Best Team Award" and receiving "Special Recognition" for outstanding contributions.',
      "Collaborated with cross-functional teams to design and deploy scalable cloud-based solutions on AWS.",
      "Mentored junior developers, resulting in improved team productivity and knowledge sharing.",
      "Developed an AI-powered chatbot integrated with project codebase, enabling users to query documentation and application logic through natural language.",
      "Worked with LLM, RAG, AI Agents and Flowise for AI-powered chatbot and knowledge-based solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Cloudesign Technology Solutions",
    duration: "Nov 2019 - Mar 2023",
    projects:
      "KJMC Finserv, SINE IIT Bombay, PB Custody, BetterQ Web, PWM, FreshR",
    points: [
      "Built dynamic and user-friendly web applications using HTML5, CSS, Angular (8/10/12) and Node.js.",
      "Developed dynamic forms to improve flexibility and efficiency of business workflows.",
      "Participated in code reviews and debugging sessions to ensure high-quality and maintainable code.",
      "Maintained and updated legacy systems to ensure seamless functionality and alignment with evolving business requirements.",
    ],
  },
];

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-5 bg-slate-900 sticky top-0 z-50 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 mb-4 md:mb-0">
          Shridhar
        </h1>

        <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-14">

        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-blue-400">
              Shridhar
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            Software Engineer | Angular | React | Node.js | AI
          </p>

          <p className="text-gray-400 leading-8 mb-8 text-sm md:text-lg">
            Results-driven Software Engineer with 5+ years of experience
            building scalable enterprise applications, REST APIs and
            AI-powered chatbot solutions. Experienced with LLM, RAG,
            AI Agents and Flowise-based solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-xl font-semibold shadow-lg inline-block"
            >
              View Projects
            </a>

            <a
              href="/Shridhar_Chougule_updated_CV.pdf"
              download
              className="border border-blue-400 hover:bg-blue-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold inline-block"
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/myPhoto.jpg"
            alt="Shridhar"
            className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-16 py-16 bg-slate-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-sm md:text-lg max-w-5xl">
          Results-driven Software Engineer with 5+ years of experience in
          full-stack development specializing in Angular, React, Node.js,
          TypeScript, JavaScript, PostgreSQL, REST APIs, AWS and Docker.
          Experienced in building scalable enterprise applications,
          reusable Angular components, dynamic forms, authentication and
          authorization systems. Also experienced in AI-powered solutions
          using LLM, RAG, AI Agents and Flowise.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 md:px-16 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-800 hover:bg-blue-500 transition px-5 py-3 rounded-xl shadow-md text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-16 py-16 bg-slate-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-7">
                {project.description}
              </p>

              <p className="text-blue-300 text-sm">
                {project.technologies}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 md:px-16 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">
                {experience.role}
              </h3>

              <p className="text-blue-300 mb-2">
                {experience.company}
              </p>

              <p className="text-gray-400 mb-4">
                {experience.duration}
              </p>

              <p className="text-gray-300 mb-4">
                <strong>Projects:</strong> {experience.projects}
              </p>

              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* Achievements */}
      <section className="px-6 md:px-16 py-16 bg-slate-900">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          Achievements
        </h2>

        <ul className="space-y-4 text-gray-300 text-sm md:text-lg">
          <li>🏆 Best Team of the Year 2023</li>
          <li>🏆 Special Recognition Award</li>
          <li>🚀 Improved application performance by 40%</li>
          <li>👨‍🏫 Mentored junior developers</li>
          <li>🤖 AI Chatbot using LLM, RAG, AI Agents and Flowise</li>
        </ul>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-16 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          Contact
        </h2>

        <div className="space-y-4 text-gray-300 text-sm md:text-lg">

          <p>
            📧{" "}
            <a
              href="mailto:shridharschougule23@gmail.com"
              className="hover:text-blue-400 transition"
            >
              shridharschougule23@gmail.com
            </a>
          </p>

          <p>
            📞{" "}
            <a
              href="tel:+918108546138"
              className="hover:text-blue-400 transition"
            >
              +91 8108546138
            </a>
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-slate-900 text-gray-400 text-sm">
        © 2026 Shridhar Chougule. All rights reserved.
      </footer>

    </div>
  );
}