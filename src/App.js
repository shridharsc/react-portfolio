import React from 'react';
import "./App.css";

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-5 bg-slate-900 sticky top-0 z-50 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 mb-4 md:mb-0">
          Shridhar
        </h1>

        <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-14">

        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-400">Shridhar</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            Software Engineer | Angular | React | Node.js | AI
          </p>

          <p className="text-gray-400 leading-8 mb-8 text-sm md:text-lg">
            Results-driven Software Engineer with 5+ years of experience
            building scalable enterprise applications, REST APIs,
            AI-powered chatbot solutions, LLM, RAG systems, and AI Agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-xl font-semibold shadow-lg inline-block"
            >
              View Projects
            </a>

            <a
              href={`${process.env.PUBLIC_URL}/Shridhar_Chougule_CV.pdf`}
              download
              className="border border-blue-400 hover:bg-blue-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/myPhoto.jpg`}
            alt="Shridhar"
            className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-16 py-16 bg-slate-900">
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
      <section id="skills" className="px-6 md:px-16 py-16">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
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

            // AI Skills
            "LLM",
            "RAG",
            "AI Agents",
            "Flowise",
            "Generative AI",
            "AI Chatbot",

            // Testing & Tools
            "Jasmine",
            "Karma",
            "Git",
            "GitHub",
          ].map((skill) => (
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
      <section id="projects" className="px-6 md:px-16 py-16 bg-slate-900">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Account Aggregator */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Account Aggregator
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Scalable financial aggregation platform with REST APIs,
              PostgreSQL integration, secure data processing and
              enterprise workflows.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | PostgreSQL | REST API
            </p>
          </div>

          {/* Global Smart */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Global Smart
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Responsive enterprise web application designed with
              reusable components, API integration and scalable
              application architecture.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | React | Node.js | PostgreSQL
            </p>
          </div>

          {/* Universal Reconciliation */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Universal Reconciliation System
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Enterprise reconciliation platform for automated data
              validation, transaction matching, exception handling
              and reporting.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | PostgreSQL | REST API
            </p>
          </div>

          {/* Codebase Chart Bot */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Codebase Chart Bot
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              AI-powered chatbot integrated with the project codebase,
              allowing users to query documentation, application logic
              and project-related information using natural language.
            </p>

            <p className="text-blue-300 text-sm">
              React | Node.js | LLM | RAG | AI Agent | Flowise
            </p>
          </div>

          {/* Persona AI Chatbot */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Persona AI Chatbot
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              AI-powered chatbot solution providing intelligent responses
              using LLM-based processing and project-specific knowledge.
            </p>

            <p className="text-blue-300 text-sm">
              React | Node.js | LLM | RAG | Flowise
            </p>
          </div>

          {/* Role Based Chatbot */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Role-Based Chatbot
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Intelligent chatbot with role-based access capabilities,
              enabling users to interact with relevant information
              according to their application permissions.
            </p>

            <p className="text-blue-300 text-sm">
              React | Node.js | LLM | RAG | AI Agent | Flowise
            </p>
          </div>

          {/* KJMC Finserv */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              KJMC Finserv
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Financial services web application with responsive UI,
              dynamic forms, validation and backend API integration.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | HTML5 | CSS
            </p>
          </div>

          {/* SINE IIT Bombay */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              SINE IIT Bombay
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Web application supporting business workflows with
              responsive interfaces and reusable Angular components.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | JavaScript
            </p>
          </div>

          {/* PB Custody */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              PB Custody
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Enterprise application supporting custody-related
              workflows with dynamic forms and API integrations.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | REST API
            </p>
          </div>

          {/* BetterQ Web */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              BetterQ Web
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              User-friendly web application with reusable UI components,
              dynamic forms and responsive layouts.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | HTML5 | CSS | Node.js
            </p>
          </div>

          {/* PWM */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              PWM
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Enterprise web application with dynamic forms,
              validation, reusable components and backend integration.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | REST API
            </p>
          </div>

          {/* FreshR */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              FreshR
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Web application focused on responsive UI development,
              reusable components and efficient business workflows.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | Node.js | JavaScript
            </p>
          </div>

          {/* TATA Motors */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              TATA Motors
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Enterprise-scale web application developed using modern
              Angular versions with reusable components, secure
              authentication and role-based access control.
            </p>

            <p className="text-blue-300 text-sm">
              Angular 14/17/19/21 | TypeScript | SCSS | Tailwind CSS
            </p>
          </div>

          {/* Havells */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Havells
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Enterprise web application with reusable Angular
              components, directives, pipes, form validation,
              authentication and authorization.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | TypeScript | HTML5 | SCSS | Tailwind CSS
            </p>
          </div>

          {/* Whirlpool */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Whirlpool
            </h3>

            <p className="text-gray-300 mb-4 leading-7">
              Enterprise application development with modular
              components, unit testing, secure application access
              and Git-based development workflows.
            </p>

            <p className="text-blue-300 text-sm">
              Angular | TypeScript | Jasmine | Karma | Git
            </p>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 md:px-16 py-16">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
          Experience
        </h2>

        <div className="space-y-8">

          {/* Vishleshan */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-2">
              Software Engineer
            </h3>

            <p className="text-blue-300 mb-2">
              Vishleshan Software Solutions
            </p>

            <p className="text-gray-400 mb-4">
              Dec 2025 - Present
            </p>

            <p className="text-gray-300 mb-4">
              <strong>Projects:</strong> TATA Motors, Havells, Whirlpool
            </p>

            <ul className="list-disc pl-5 text-gray-300 space-y-2">

              <li>
                Developed and maintained enterprise-scale web applications
                using Angular (14/17/19/21), TypeScript, HTML5, SCSS,
                and Tailwind CSS.
              </li>

              <li>
                Built reusable and modular Angular components, directives,
                pipes, and shared libraries to improve code maintainability.
              </li>

              <li>
                Implemented form validation, authentication, authorization,
                route guards, and role-based access control to ensure secure
                application access.
              </li>

              <li>
                Developed comprehensive unit tests using Jasmine and Karma,
                achieving high code coverage and improving application
                reliability and stability.
              </li>

              <li>
                Used Git for version control and managed code through
                feature branching and pull request workflows.
              </li>

              <li>
                Collaborated with cross-functional teams, including backend
                developers, QA engineers, and product owners, to deliver
                high-quality features within project timelines.
              </li>

            </ul>
          </div>

          {/* Cateina */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-2">
              Senior Software Engineer
            </h3>

            <p className="text-blue-300 mb-2">
              Cateina Technology Solutions
            </p>

            <p className="text-gray-400 mb-4">
              June 2023 - Sep 2025
            </p>

            <p className="text-gray-300 mb-4">
              <strong>Projects:</strong> Account Aggregator, Global Smart,
              Universal Reconciliation, Codebase Chart Bot, Persona AI
              Chatbot, Role-Based Chatbot
            </p>

            <ul className="list-disc pl-5 text-gray-300 space-y-2">

              <li>
                Developed and maintained responsive web applications using
                HTML5, CSS, Angular (12/14), React, Node.js and PostgreSQL.
              </li>

              <li>
                Designed and implemented RESTful APIs, improving data
                processing efficiency by 30%.
              </li>

              <li>
                Played a key role in achieving the "Best Team Award" and
                receiving "Special Recognition" for outstanding contributions.
              </li>

              <li>
                Collaborated with cross-functional teams to design and
                deploy scalable, cloud-based solutions on AWS.
              </li>

              <li>
                Mentored junior developers, resulting in a 15% increase in
                team productivity and knowledge sharing.
              </li>

              <li>
                Developed an AI-powered chatbot integrated with the project's
                codebase, enabling users to query documentation and
                application logic through natural language, enhancing
                developer productivity and reducing onboarding time.
              </li>

              <li>
                Worked with LLM, RAG, AI Agents and Flowise for
                AI-powered chatbot and knowledge-based solutions.
              </li>

            </ul>
          </div>

          {/* Cloudesign */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-2">
              Software Engineer
            </h3>

            <p className="text-blue-300 mb-2">
              Cloudesign Technology Solutions
            </p>

            <p className="text-gray-400 mb-4">
              Nov 2019 - Mar 2023
            </p>

            <p className="text-gray-300 mb-4">
              <strong>Projects:</strong> KJMC Finserv, SINE IIT Bombay,
              PB Custody, BetterQ Web, PWM, FreshR
            </p>

            <ul className="list-disc pl-5 text-gray-300 space-y-2">

              <li>
                Built dynamic, user-friendly web applications using HTML5,
                CSS, Angular (8/10/12) and Node.js.
              </li>

              <li>
                Streamlined form creation processes by developing dynamic
                forms, enhancing flexibility and efficiency.
              </li>

              <li>
                Participated in code reviews and debugging sessions to ensure
                high-quality, maintainable code.
              </li>

              <li>
                Maintained and updated legacy systems to ensure seamless
                functionality and alignment with evolving business needs.
              </li>

            </ul>
          </div>

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
      <section id="contact" className="px-6 md:px-16 py-16">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          Contact
        </h2>

        <div className="space-y-4 text-gray-300 text-sm md:text-lg">
          <p>📧 shridharschougule23@gmail.com</p>
          <p>📞 +91 8108546138</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-slate-900 text-gray-400 text-sm">
        © 2026 Shridhar Chougule. All rights reserved.
      </footer>

    </div>
  );
}