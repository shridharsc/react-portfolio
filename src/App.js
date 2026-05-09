import React from "react";
import "./App.css";
// import myphoto from "./assets/myPhoto.jpg";

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

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-14">

        {/* Left */}
        <div className="max-w-2xl text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-blue-400">
              Shridhar 👋
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            Senior Software Engineer | Angular | React | Node.js
          </p>

          <p className="text-gray-400 leading-8 mb-8 text-sm md:text-lg">
            Results-driven Full Stack Developer with 5+ years of experience
            building scalable enterprise applications, REST APIs,
            AI-powered chatbot solutions, and cloud-based systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-xl font-semibold shadow-lg">
              View Projects
            </button>

            <button 
            href={`${process.env.PUBLIC_URL}/Shridhar_Chougule_updated_CV.pdf`}
            download="Shridhar_Chougule_updated_CV.pdf"
            className="border border-blue-400 hover:bg-blue-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold">
              Download Resume
            </button>

          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/myPhoto.jpg`}
            alt=""
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

        <p className="text-gray-300 leading-8 text-sm md:text-lg max-w-4xl">
          Results-driven Software Developer with 5+ years of experience
          in full-stack development specializing in Angular, React,
          Node.js, JavaScript, PostgreSQL, and cloud-based solutions.
          Experienced in building scalable enterprise applications,
          REST APIs, AI-powered chatbot integrations, and performance
          optimization.
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

          {[
            "Angular",
            "React",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Docker",
            "Redux",
            "REST API",
            "HTML5",
            "CSS",
            "Git",
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
      {/* Projects */}
<section
  id="projects"
  className="px-6 md:px-16 py-16 bg-slate-900"
>

  <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
    Projects
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Account Aggregator
      </h3>

      <p className="text-gray-300 mb-4 leading-7">
        Scalable financial aggregation platform with REST APIs
        and PostgreSQL integration.
      </p>

      <p className="text-blue-300 text-sm mb-5">
        Angular | Node.js | PostgreSQL
      </p>

      {/* <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
          Demo
        </button>

        <button className="border border-gray-500 hover:border-blue-400 px-4 py-2 rounded-lg">
          GitHub
        </button>
      </div> */}
    </div>

    {/* Card 2 */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Persona AI Chatbot
      </h3>

      <p className="text-gray-300 mb-4 leading-7">
        AI-powered chatbot integrated with project codebase for
        documentation and developer productivity.
      </p>

      <p className="text-blue-300 text-sm mb-5">
        React | Node.js | AI Integration
      </p>

      {/* <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
          Demo
        </button>

        <button className="border border-gray-500 hover:border-blue-400 px-4 py-2 rounded-lg">
          GitHub
        </button>
      </div> */}
    </div>

    {/* Card 3 */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Universal Reconciliation System
      </h3>

      <p className="text-gray-300 mb-4 leading-7">
        Enterprise reconciliation platform for automated data
        validation and transaction matching.
      </p>

      <p className="text-blue-300 text-sm mb-5">
        Angular | Node.js | PostgreSQL
      </p>

      {/* <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
          Demo
        </button>

        <button className="border border-gray-500 hover:border-blue-400 px-4 py-2 rounded-lg">
          GitHub
        </button>
      </div> */}
    </div>

    {/* Card 4 */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Codebase Chart Bot
      </h3>

      <p className="text-gray-300 mb-4 leading-7">
        Intelligent chatbot capable of understanding project
        structure and generating documentation insights.
      </p>

      <p className="text-blue-300 text-sm mb-5">
        React | Node.js | OpenAI API
      </p>

      {/* <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
          Demo
        </button>

        <button className="border border-gray-500 hover:border-blue-400 px-4 py-2 rounded-lg">
          GitHub
        </button>
      </div> */}
    </div>

    {/* Card 5 */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Dynamic Form Builder
      </h3>

      <p className="text-gray-300 mb-4 leading-7">
        Configurable form builder with validation, reusable
        components and dynamic rendering.
      </p>

      <p className="text-blue-300 text-sm mb-5">
        Angular | TypeScript | REST API
      </p>

      {/* <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
          Demo
        </button>

        <button className="border border-gray-500 hover:border-blue-400 px-4 py-2 rounded-lg">
          GitHub
        </button>
      </div> */}
    </div>

    {/* Card 6 */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Real-Time Analytics Dashboard
      </h3>

      <p className="text-gray-300 mb-4 leading-7">
        Dashboard for monitoring business metrics with
        real-time charts and performance insights.
      </p>

      <p className="text-blue-300 text-sm mb-5">
        React | Redux | Chart.js
      </p>

      {/* <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
          Demo
        </button>

        <button className="border border-gray-500 hover:border-blue-400 px-4 py-2 rounded-lg">
          GitHub
        </button>
      </div> */}
    </div>

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

            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Developed scalable enterprise applications.</li>
              <li>Built REST APIs improving efficiency by 30%.</li>
              <li>Worked on AI-powered chatbot solutions.</li>
              <li>Mentored junior developers.</li>
            </ul>

          </div>

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

            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Built Angular & Node.js applications.</li>
              <li>Created reusable dynamic forms.</li>
              <li>Maintained and optimized legacy systems.</li>
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
          <li>🚀 Improved performance by 40%</li>
          <li>👨‍🏫 Mentored junior developers</li>
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