'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl font-bold mb-4"
        >
          Hi! I'm Ishan Mukherjee!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-xl"
        >
          Computer Science Major at Purdue University
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-200 mb-4">
          I am a Computer Science student at Purdue University focusing on Software Engineering and Machine Intelligence.
          I have hands-on experience with full-stack development, compiler design, and robotics.
        </p>
        <p className="text-gray-200">
          My projects include a Task Manager Website, an Assembly x86-64 Compiler, and a Rent-A-House Application.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Project Card 1 */}
          <div className="bg-black/50 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2 text-white">Task Manager Website</h3>
            <p className="text-gray-300 mb-2">
              A full-stack web application built with Angular, Node.js, Express, and MongoDB that improves productivity and user experience.
            </p>
            <p className="text-gray-400 text-sm">July 2024 - Present</p>
          </div>
          {/* Project Card 2 */}
          <div className="bg-black/50 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2 text-white">Assembly x86-64 Compiler</h3>
            <p className="text-gray-300 mb-2">
              Developed a compiler for a C-like language with optimized assembly code generation for faster performance.
            </p>
            <p className="text-gray-400 text-sm">Aug 2024 - Present</p>
          </div>
          {/* Project Card 3 */}
          <div className="bg-black/50 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2 text-white">Rent-A-House Application</h3>
            <p className="text-gray-300 mb-2">
              A Java and JSwing desktop application that streamlines property rentals and improves user onboarding.
            </p>
            <p className="text-gray-400 text-sm">Aug 2023 - Dec 2023</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <p className="text-gray-200 mb-4">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
        <ul className="text-gray-200">
          <li>
            Email:{' '}
            <a href="mailto:ishan.m1809@gmail.com" className="text-red-500">
              ishan.m1809@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/ishan-mukherjee-8277aa2aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              Ishan Mukherjee
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
