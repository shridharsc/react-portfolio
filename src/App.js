import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 sticky top-0">
        <h1 className="text-xl font-bold">Shridhar</h1>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Shridhar 👋
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Full stack Engineer | Angular | React | Node
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 px-6 py-2 rounded-lg">
              View Projects
            </button>
            <button className="border px-6 py-2 rounded-lg">
              Download Resume
            </button>
          </div>
        </div>

        <img
          src={`${process.env.REACT_APP_HOST_URL}myphoto.jpg`}
          alt=""
          className="rounded-full mt-10 md:mt-0 photoSize"
        />
      </section>

      {/* About */}
      <section id="about" className="px-10 py-16 bg-slate-800">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 max-w-2xl">
          I have 5+ years of experience in Angular, React and node. I build scalable,
          high-performance enterprise applications and focus on clean
          architecture and optimization.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-16">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Angular",
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Redux",
            "HTML",
            "CSS",
            "REST API",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-16 bg-slate-800">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Card */}
          <div className="bg-slate-900 p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              NGASA Automation Platform
            </h3>
            <p className="text-gray-400 mb-3">
              API testing platform that improved efficiency by 40%
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Angular | Node.js
            </p>
            <div className="space-x-3">
              <button className="bg-blue-500 px-4 py-1 rounded">
                Demo
              </button>
              <button className="border px-4 py-1 rounded">
                GitHub
              </button>
            </div>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              E-Commerce Dashboard
            </h3>
            <p className="text-gray-400 mb-3">
              Real-time analytics dashboard
            </p>
            <p className="text-sm text-gray-500 mb-4">
              React | Redux
            </p>
            <div className="space-x-3">
              <button className="bg-blue-500 px-4 py-1 rounded">
                Demo
              </button>
              <button className="border px-4 py-1 rounded">
                GitHub
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Sr Engineer S1</h3>
            <p className="text-gray-400">2023 - Present</p>
          </div>

          <div>
            <h3 className="font-bold">Software Engineer</h3>
            <p className="text-gray-400">2021 - 2023</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-10 py-16 bg-slate-800">
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
        <ul className="space-y-2 text-gray-300">
          <li>✔ Improved performance by 40%</li>
          <li>✔ Automated testing workflows</li>
          <li>✔ Trained clients & teams</li>
          <li>✔ Built internal tools</li>
        </ul>
      </section>

    </div>
  );
}