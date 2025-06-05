'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A React web app for real-time collaboration with advanced state management and offline support.',
    tech: ['React', 'TypeScript', 'Redux', 'Socket.io'],
    demoLink: 'https://demo.projectalpha.com',
    githubLink: 'https://github.com/yourusername/projectalpha',
    image: '/assets/projects/project-alpha.png', // update with your image path
  },
  {
    title: 'MobilePay',
    description:
      'A React Native app for seamless mobile payments with fingerprint authentication and QR scanning.',
    tech: ['React Native', 'Expo', 'Firebase', 'Stripe API'],
    demoLink: 'https://mobilepay.demo.com',
    githubLink: 'https://github.com/yourusername/mobilepay',
    image: '/assets/projects/mobilepay.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio showcasing my skills, projects, and blog, built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio',
    image: '/assets/projects/portfolio.png',
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 md:px-0 py-12"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map(({ title, description, tech, demoLink, githubLink, image }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Project image */}
            {image && (
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full px-3 py-1 select-none"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-auto flex gap-4">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    View Demo
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
