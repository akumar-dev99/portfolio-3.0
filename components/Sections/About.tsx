'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiJest, SiCypress } from 'react-icons/si';

const skills = {
  Languages: [
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'C++', icon: <FaJsSquare className="text-gray-600" /> }, // No official icon, used JS icon as placeholder
  ],
  Frameworks: [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'React Native', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  ],
  Testing: [
    { name: 'Jest', icon: <SiJest className="text-pink-600" /> },
    { name: 'Cypress', icon: <SiCypress className="text-green-500" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  ],
};

export default function About() {
  return (

    <motion.section
    id="about" className="max-w-5xl mx-auto px-4 md:px-0 py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      
    >
      <h2 className="text-4xl font-bold mb-8 text-center relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-blue-600 after:rounded-md">
        About Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
        I'm Amit, a passionate Frontend Engineer with over 5 years of experience building scalable and maintainable web and mobile applications.
        My expertise lies in React, React Native, and modern frontend ecosystems including Tailwind CSS and TypeScript.
        <br /><br />
        I love crafting intuitive user experiences and writing clean, reusable code that delivers great performance.
        Outside coding, I enjoy reading tech blogs and contributing to open source projects.
      </p>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {skillList.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full cursor-default select-none shadow-sm"
                    title={name}
                  >
                    {icon}
                    <span className="font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>

  );
}
