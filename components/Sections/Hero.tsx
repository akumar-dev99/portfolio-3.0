'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Lottie from 'lottie-react';
import DevAnimation from "../../app/public/lottie/dev.json";

const typingWords = ["Frontend Engineer", "React Developer", "React Native Specialist", "UI/UX Enthusiast"];

export default function Hero() {
  const controls = useAnimation();

  // Typing animation states
  useEffect(() => {
    async function sequence() {
      for (const word of typingWords) {
        await controls.start({ opacity: 0, y: 20 });
        await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        await new Promise(r => setTimeout(r, 2000));
      }
    }
    sequence();
  }, [controls]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors"
    >
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white"
        >
          Hey, I'm Amit 👋
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 h-12"
          animate={controls}
          key="animated-text"
        >
          <TypewriterLoop words={typingWords} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 max-w-md"
        >
          Passionate about building clean, performant UI and seamless UX with React and React Native.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          See My Work
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex space-x-6 mt-8 justify-center md:justify-start text-gray-600 dark:text-gray-300"
        >
          <SocialIcon href="https://linkedin.com/in/yourprofile" icon={<FaLinkedin />} label="LinkedIn" />
          <SocialIcon href="https://github.com/yourusername" icon={<FaGithub />} label="GitHub" />
          <SocialIcon href="https://twitter.com/yourhandle" icon={<FaTwitter />} label="Twitter" />
          <SocialIcon href="mailto:your.email@example.com" icon={<FaEnvelope />} label="Email" />
        </motion.div>
      </div>

      {/* Lottie Animation */}
      <div className="w-80 h-80 md:w-96 md:h-96">
        <Lottie animationData={DevAnimation} loop={true} />
      </div>
    </section>
  );
}

// Social icon component
function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-3xl hover:text-blue-600 dark:hover:text-blue-400 transition"
    >
      {icon}
    </a>
  );
}

// Typewriter effect component
function TypewriterLoop({ words }: { words: string[] }) {
  const [index, setIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);
  const speed = 100;
  const pause = 1500;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = words[index];
      if (!deleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, deleting, index, words]);

  return <span>{displayedText}<span className="blinking-cursor">|</span></span>;
}


