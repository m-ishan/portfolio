'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeader() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.3 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-md z-50"
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-white">Ishan Mukherjee</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-red-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
