import React from "react";

// Inline fallback styles ensuring content displays properly regardless of Tailwind setup
const fallbackStyles = `
  body { margin: 0; background-color: #0f172a; color: #ffffff; font-family: system-ui, -apple-system, sans-serif; }
  a { color: inherit; text-decoration: none; }
`;

// Reusable Project Card Component
const ProjectCard = ({ title, description, techStack }) => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between" style={{ backgroundColor: "#1e293b", padding: "1.5rem", borderRadius: "1rem", marginBottom: "1rem" }}>
    <div>
      <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.75rem" }}>{title}</h3>
      <p className="text-gray-300 mb-4 leading-7" style={{ color: "#cbd5e1", lineHeight: "1.75" }}>{description}</p>
    </div>
    <p className="text-blue-300 text-sm font-semibold mt-auto" style={{ color: "#93c5fd", fontSize: "0.875rem", fontWeight: "600" }}>{techStack}</p>
  </div>
);

// Reusable Experience Card Component
const ExperienceCard = ({ role, company, period, projects, bulletPoints }) => (
  <div className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#1e293b", padding: "1.5rem", borderRadius: "1rem", marginBottom: "1.5rem" }}>
    <h3 className="text-2xl font-bold mb-1 text-white" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{role}</h3>
    <p className="text-blue-300 text-lg mb-1" style={{ color: "#93c5fd", fontSize: "1.125rem" }}>{company}</p>
    <p className="text-gray-400 text-sm mb-4" style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "1rem" }}>{period}</p>
    {projects && (
      <p className="text-gray-300 mb-4" style={{ color: "#cbd5e1", marginBottom: "1rem" }}>
        <strong>Projects:</strong> {projects}
      </p>
    )}
    <ul className="list-disc pl-5 text-gray-300 space-y-2" style={{ color: "#cbd5e1", paddingLeft: "1.25rem" }}>
      {bulletPoints.map((point, index) => (
        <li key={index} style={{ marginBottom: "0.5rem" }}>{point}</li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const skillsList = [
    "Angular", "React", "JavaScript", "TypeScript", "HTML5", "CSS", "SCSS",
    "Tailwind CSS", "Redux", "Node.js", "REST API", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "LLM", "RAG", "AI Agents", "Flowise", "Generative AI",
    "AI Chatbot", "Jasmine", "Karma", "Git", "GitHub"
  ];

  const projectsData = [
    { title: "Account Aggregator", description: "Scalable financial aggregation platform with REST APIs, PostgreSQL integration, secure data processing, and enterprise workflows.", techStack: "Angular | Node.js | PostgreSQL | REST API" },
    { title: "Global Smart", description: "Responsive enterprise web application designed with reusable components, API integration, and scalable application architecture.", techStack: "Angular | React | Node.js | PostgreSQL" },
    { title: "Universal Reconciliation System", description: "Enterprise reconciliation platform for automated data validation, transaction matching, exception handling, and reporting.", techStack: "Angular | Node.js | PostgreSQL | REST API" },
    { title: "Codebase Chart Bot", description: "AI-powered chatbot integrated with the project codebase, allowing users to query documentation, application logic, and project-related information using natural language.", techStack: "React | Node.js | LLM | RAG | AI Agent | Flowise" },
    { title: "Persona AI Chatbot", description: "AI-powered chatbot solution providing intelligent responses using LLM-based processing and project-specific knowledge.", techStack: "React | Node.js | LLM | RAG | Flowise" },
    { title: "Role-Based Chatbot", description: "Intelligent chatbot with role-based access capabilities, enabling users to interact with relevant information according to their application permissions.", techStack: "React | Node.js | LLM | RAG | AI Agent | Flowise" },
    { title: "KJMC Finserv", description: "Financial services web application with responsive UI, dynamic forms, validation, and backend API integration.", techStack: "Angular | Node.js | HTML5 | CSS" },
    { title: "SINE IIT Bombay", description: "Web application supporting business workflows with responsive interfaces and reusable Angular components.", techStack: "Angular | Node.js | JavaScript" },
    { title: "PB Custody", description: "Enterprise application supporting custody-related workflows with dynamic forms and API integrations.", techStack: "Angular | Node.js | REST API" },
    { title: "BetterQ Web", description: "User-friendly web application with reusable UI components, dynamic forms, and responsive layouts.", techStack: "Angular | HTML5 | CSS | Node.js" },
    { title: "PWM", description: "Enterprise web application with dynamic forms, validation, reusable components, and backend integration.", techStack: "Angular | Node.js | REST API" },
    { title: "FreshR", description: "Web application focused on responsive UI development, reusable components, and efficient business workflows.", techStack: "Angular | Node.js | JavaScript" },
    { title: "TATA Motors", description: "Enterprise-scale web application developed using modern Angular versions with reusable components, secure authentication, and role-based access control.", techStack: "Angular 14/17/19/21 | TypeScript | SCSS | Tailwind CSS" },
    { title: "Havells", description: "Enterprise web application with reusable Angular components, directives, pipes, form validation, authentication, and authorization.", techStack: "Angular | TypeScript | HTML5 | SCSS | Tailwind CSS" },
    { title: "Whirlpool", description: "Enterprise application development with modular components, unit testing, secure application access, and Git-based development workflows.", techStack: "Angular | TypeScript | Jasmine | Karma | Git" }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: "#020617", color: "#ffffff", minHeight: "100vh" }}>
      <style>{fallbackStyles}</style>

      {/* Navigation Header */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-5 bg-slate-900 sticky top-0 z-50 shadow-lg" style={{ backgroundColor: "#0f172a", padding: "1.25rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="text-3xl font-bold text-blue-400 mb-4 md:mb-0" style={{ color: "#60a5fa", fontSize: "1.875rem", fontWeight: "bold", margin: 0 }}>
          Shridhar
        </h1>
        <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base" style={{ display: "flex", gap: "1.25rem" }}>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      <main style={{ padding: "0 1.5rem" }}>
        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-14 max-w-7xl mx-auto" style={{ maxWidth: "80rem", margin: "0 auto", padding: "4rem 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "3.5rem" }}>
          <div className="max-w-2xl text-center lg:text-left" style={{ maxWidth: "42rem" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.1" }}>
              Hi, I'm <span className="text-blue-400" style={{ color: "#60a5fa" }}>Shridhar</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-6" style={{ fontSize: "1.5rem", color: "#cbd5e1" }}>
              Software Engineer | Angular | React | Node.js | AI
            </p>
            <p className="text-gray-400 leading-8 mb-8 text-sm md:text-lg" style={{ color: "#94a3b8", lineHeight: "2rem" }}>
              Results-driven Software Engineer with 5+ years of experience building scalable enterprise applications, REST APIs, AI-powered chatbot solutions, LLMs, RAG systems, and AI Agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-xl font-semibold shadow-lg text-center"
                style={{ backgroundColor: "#3b82f6", padding: "0.75rem 2rem", borderRadius: "0.75rem", fontWeight: "600" }}
              >
                View Projects
              </a>
              <a
                href="/Shridhar_Chougule_updated_CV.pdf"
                download
                className="border border-blue-400 hover:bg-blue-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold text-center"
                style={{ border: "1px solid #60a5fa", padding: "0.75rem 2rem", borderRadius: "0.75rem", fontWeight: "600" }}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/myPhoto.jpg"
              alt="Shridhar Chougule"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300?text=Shridhar";
              }}
              className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
              style={{ width: "18rem", height: "18rem", borderRadius: "50%", objectFit: "cover", border: "4px solid #3b82f6" }}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 md:px-16 py-16 bg-slate-900" style={{ backgroundColor: "#0f172a", padding: "4rem 1.5rem", borderRadius: "1rem", marginBottom: "2rem" }}>
          <div className="max-w-7xl mx-auto" style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8" style={{ color: "#60a5fa", fontSize: "2.25rem", fontWeight: "bold", marginBottom: "2rem" }}>About Me</h2>
            <p className="text-gray-300 leading-8 text-sm md:text-lg max-w-5xl" style={{ color: "#cbd5e1", lineHeight: "2rem" }}>
              Results-driven Software Engineer with 5+ years of experience in full-stack development specializing in Angular, React, Node.js, TypeScript, JavaScript, PostgreSQL, REST APIs, AWS, and Docker. Experienced in building scalable enterprise applications, reusable Angular components, dynamic forms, authentication, and authorization systems. Also experienced in AI-powered solutions using LLM, RAG, AI Agents, and Flowise.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-6 md:px-16 py-16" style={{ padding: "4rem 0" }}>
          <div className="max-w-7xl mx-auto" style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10" style={{ color: "#60a5fa", fontSize: "2.25rem", fontWeight: "bold", marginBottom: "2.5rem" }}>Skills</h2>
            <div className="flex flex-wrap gap-4" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {skillsList.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 hover:bg-blue-500 transition px-5 py-3 rounded-xl shadow-md text-sm md:text-base font-medium"
                  style={{ backgroundColor: "#1e293b", padding: "0.75rem 1.25rem", borderRadius: "0.75rem" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-6 md:px-16 py-16 bg-slate-900" style={{ backgroundColor: "#0f172a", padding: "4rem 1.5rem", borderRadius: "1rem", marginBottom: "2rem" }}>
          <div className="max-w-7xl mx-auto" style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10" style={{ color: "#60a5fa", fontSize: "2.25rem", fontWeight: "bold", marginBottom: "2.5rem" }}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {projectsData.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 md:px-16 py-16" style={{ padding: "4rem 0" }}>
          <div className="max-w-7xl mx-auto" style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10" style={{ color: "#60a5fa", fontSize: "2.25rem", fontWeight: "bold", marginBottom: "2.5rem" }}>Experience</h2>
            <div>
              <ExperienceCard
                role="Software Engineer"
                company="Vishleshan Software Solutions"
                period="Dec 2025 - Present"
                projects="TATA Motors, Havells, Whirlpool"
                bulletPoints={[
                  "Developed and maintained enterprise-scale web applications using Angular (14/17/19/21), TypeScript, HTML5, SCSS, and Tailwind CSS.",
                  "Built reusable and modular Angular components, directives, pipes, and shared libraries to improve code maintainability.",
                  "Implemented form validation, authentication, authorization, route guards, and role-based access control to ensure secure application access.",
                  "Developed comprehensive unit tests using Jasmine and Karma, achieving high code coverage and improving application reliability.",
                  "Used Git for version control and managed code through feature branching and pull request workflows.",
                  "Collaborated with cross-functional teams, including backend developers, QA engineers, and product owners to deliver features on schedule."
                ]}
              />

              <ExperienceCard
                role="Senior Software Engineer"
                company="Cateina Technology Solutions"
                period="June 2023 - Sep 2025"
                projects="Account Aggregator, Global Smart, Universal Reconciliation, Codebase Chart Bot, Persona AI Chatbot, Role-Based Chatbot"
                bulletPoints={[
                  "Developed and maintained responsive web applications using HTML5, CSS, Angular (12/14), React, Node.js, and PostgreSQL.",
                  "Designed and implemented RESTful APIs, improving data processing efficiency by 30%.",
                  "Played a key role in achieving the 'Best Team Award' and receiving 'Special Recognition' for outstanding contributions.",
                  "Collaborated with cross-functional teams to design and deploy scalable, cloud-based solutions on AWS.",
                  "Mentored junior developers, resulting in a 15% increase in team productivity and knowledge sharing.",
                  "Developed an AI-powered chatbot integrated with the project's codebase, enabling natural language queries over application logic and docs.",
                  "Worked with LLM, RAG, AI Agents, and Flowise for AI-powered chatbot and knowledge-based solutions."
                ]}
              />

              <ExperienceCard
                role="Software Engineer"
                company="Cloudesign Technology Solutions"
                period="Nov 2019 - Mar 2023"
                projects="KJMC Finserv, SINE IIT Bombay, PB Custody, BetterQ Web, PWM, FreshR"
                bulletPoints={[
                  "Built dynamic, user-friendly web applications using Angular, HTML5, CSS, and JavaScript.",
                  "Designed reusable components and dynamic forms with custom validation logic.",
                  "Maintained, optimized, and upgraded legacy systems to enhance overall application performance."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 md:px-16 py-16" style={{ padding: "4rem 0" }}>
          <div className="max-w-7xl mx-auto" style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8" style={{ color: "#60a5fa", fontSize: "2.25rem", fontWeight: "bold", marginBottom: "2rem" }}>Contact</h2>
            <div className="space-y-4 text-gray-300 text-sm md:text-lg" style={{ color: "#cbd5e1", fontSize: "1.125rem" }}>
              <p>📧 shridharschougule23@gmail.com</p>
              <p>📞 +91 8108546138</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-slate-900 text-gray-400 text-sm border-t border-slate-800" style={{ textAlign: "center", padding: "1.5rem 0", backgroundColor: "#0f172a", color: "#94a3b8" }}>
        © 2026 Shridhar Chougule. All rights reserved.
      </footer>
    </div>
  );
}