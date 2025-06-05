'use client';

import { motion } from 'framer-motion';

const contacts = [
  {
    label: 'Email',
    href: 'mailto:amit@example.com',
    icon: (
      <svg
        className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    value: 'amit@example.com',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    hoverBgColor: 'hover:bg-blue-600 dark:hover:bg-blue-700',
  },
  {
    label: 'Phone',
    href: 'tel:+919876543210',
    icon: (
      <svg
        className="w-6 h-6 text-green-600 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.63-3.07 19.47 19.47 0 0 1-6-6 19.72 19.72 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.41 2.39.82 3.5a2 2 0 0 1-.45 2.11L9 10.83a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c1.11.41 2.29.69 3.5.82a2 2 0 0 1 1.72 2z" />
      </svg>
    ),
    value: '+91 98765 43210',
    bgColor: 'bg-green-100 dark:bg-green-900',
    hoverBgColor: 'hover:bg-green-600 dark:hover:bg-green-700',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/amit',
    icon: (
      <svg
        className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C3.34 3.5 2 4.83 2 6.45c0 1.56 1.27 2.84 2.8 2.84h.03c1.7 0 2.95-1.3 2.95-2.9 0-1.6-1.27-2.9-2.8-2.9zM2 21.5h5.96v-11H2v11zm7.52-11v11h6v-6c0-1.46 1.17-2.63 2.63-2.63S21.5 14.04 21.5 15.5v6H21v-6c0-1.33-.9-2.45-2.1-2.7-1.2-.26-2.4.42-2.8 1.6v7.1H9.5v-11h0z" />
      </svg>
    ),
    value: 'linkedin.com/in/amit',
    bgColor: 'bg-blue-200 dark:bg-blue-800',
    hoverBgColor: 'hover:bg-blue-800 dark:hover:bg-blue-600',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/amit',
    icon: (
      <svg
        className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6a3.18 3.18 0 0 0-1.34-1.75c-1.1-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.83 1.23 2.55 2.55 0 0 0 3.48 1 2.56 2.56 0 0 1 .76-1.6c-2.66-.3-5.47-1.33-5.47-5.93a4.65 4.65 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.27-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18 4.65 4.65 0 0 1 1.23 3.22c0 4.6-2.8 5.62-5.47 5.92a2.87 2.87 0 0 1 .82 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    value: 'github.com/amit',
    bgColor: 'bg-gray-200 dark:bg-gray-700',
    hoverBgColor: 'hover:bg-gray-700 dark:hover:bg-gray-900',
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto p-8 sm:p-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-black/50"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="mb-12 text-center text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
        Interested in working together or just want to say hi? Reach out to me via any of these channels.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {contacts.map(({ label, href, icon, value, bgColor, hoverBgColor }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`group flex items-center gap-6 p-5 rounded-lg ${bgColor} ${hoverBgColor} shadow-md dark:shadow-gray-800 transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-gray-700`}
          >
            <div className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{label}</p>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 break-words">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
