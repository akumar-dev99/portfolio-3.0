'use client';
import { useState } from 'react';

const educationData = [
  {
    degree: 'B.Tech',
    institution: 'National Institute of Technology - Kurukshetra, India',
    duration: '08/2017 - 05/2022',
    cgpa: '7.36 CGPA',
    details: [
      'Algorithms, Data Structures, MySQL, C++, Python, Java',
      'Software Engineering / Project Management',
      'Web Development, Android Studio',
    ],
  },
];

const experienceData = [
  {
    role: 'Software Engineer',
    company: 'BharatPe (Resilient Pvt. Ltd.)',
    duration: '05/2022 - Present',
    location: 'Gurgaon, India',
    details: [
      'Led UI/UX strategy collaborating with PMs, Designers, Backend teams.',
      'Enhanced Postpe-2.0 & 3.0 UI, improving performance and reducing render time by 30%.',
      'Optimized FCP (7s to 3.6s), LCP (9s to 4s), CLS (2.4 to 1.5) using service workers, asset optimization, code splitting.',
      'Integrated Sentry & Jest, reducing production issues by 40%.',
      'Co-created Storybook-driven theme library & NPM package increasing dev efficiency by 30%.',
      'Led monthly campaigns & bill payment revamps, boosting engagement by 5%.',
      'Developed consumer & DSA loan segments driving 15% revenue growth.',
      'Contributed to UPI TPAP onboarding & payments, increasing user base by 25%.',
      'Led UPI Secure & Rewards features, tripling user onboarding.',
      'Set up Cypress tests reaching 70% test coverage.',
    ],
  },
  {
    role: 'FullStack Developer Intern',
    company: 'MorningCars Pvt. Ltd.',
    duration: '01/2021 - 07/2021',
    location: 'New Delhi, India',
    details: [
      'Developed React Native app from scratch with 10+ production-ready screens.',
      'Implemented secure authentication using Firebase.',
      'Onboarded 20+ early users for MVP testing.',
    ],
  },
];

const projectsData = [
  {
    title: 'RupeeFlo - NRI Banking & Wealth Platform',
    duration: '05/2024 - 12/2024',
    description:
      'Sole frontend dev for mobile app built with React Native Expo (Ejected) and Redux. Delivered MVP in 6 weeks with OTP & MPIN authentication. Managed native dependencies via Expo config plugins. Achieved 100+ downloads within 48 hours.',
  },
  {
    title: 'Sync Capital App',
    duration: '08/2023 - 09/2023',
    description:
      'Built fintech banking frontend for UK client with React Native and TypeScript. Delivered MVP in 6 weeks and integrated Firebase authentication across platforms.',
  },
  {
    title: 'Foodini App',
    duration: '01/2020 - 08/2023',
    description:
      'Cultural food delivery app built with React Native & JS. Featured posting, commenting, reviewing, following. Published on US Play Store. Integrated Firestore & cloud functions. Earned $15,000 in startup program funding & awards.',
  },
];

function TimelineItem({
  side,
  title,
  subtitle,
  duration,
  location,
  details,
  colorClass,
}: {
  side: 'left' | 'right';
  title: string;
  subtitle?: string;
  duration: string;
  location?: string;
  details: string[];
  colorClass: string;
}) {
  return (
    <div
      className={`w-full md:w-1/2 px-4 mb-8 flex flex-col items-${side === 'left' ? 'end' : 'start'} text-${side === 'left' ? 'right' : 'left'}`}
    >
      <div className="max-w-md">
        <span className={`text-sm font-semibold ${colorClass}`}>{duration}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
        {subtitle && <p className="text-gray-700 dark:text-gray-300 font-medium">{subtitle}</p>}
        {location && <p className="italic text-gray-500 dark:text-gray-400 text-sm">{location}</p>}
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TimelineTabs() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'projects'>('education');

  const dataMap = {
    education: {
      data: educationData,
      color: 'text-blue-600',
      dotColor: 'bg-blue-600',
    },
    experience: {
      data: experienceData,
      color: 'text-green-600',
      dotColor: 'bg-green-600',
    },
    projects: {
      data: projectsData,
      color: 'text-purple-600',
      dotColor: 'bg-purple-600',
    },
  };

  const currentData = dataMap[activeTab];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-12 border-b border-gray-300 dark:border-gray-700">
        {(['education', 'experience', 'projects'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition-colors duration-200 ${
              activeTab === tab
                ? `border-b-4 ${dataMap[tab].color}`
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gray-300 dark:before:bg-gray-700">
        {currentData.data.map((item, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right';
          return (
            <div
              key={idx}
              className="mb-16 relative w-full flex justify-between items-center"
              style={{ minHeight: '120px' }}
            >
              {side === 'left' && (
                <>
                  <TimelineItem
                    side="left"
                    title={item.degree || item.role || item.title}
                    subtitle={item.institution || item.company}
                    duration={item.duration}
                    location={item.location}
                    details={item.details || [item.description]}
                    colorClass={currentData.color}
                  />
                  <div className="absolute left-1/2 top-5 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900"
                    style={{ backgroundColor: currentData.dotColor.replace('bg-', '') ? undefined : undefined }}
                    >
                    <div className={`${currentData.dotColor} w-5 h-5 rounded-full absolute top-0 left-0`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              )}
              {side === 'right' && (
                <>
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-5 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900">
                    <div className={`${currentData.dotColor} w-5 h-5 rounded-full absolute top-0 left-0`}></div>
                  </div>
                  <TimelineItem
                    side="right"
                    title={item.degree || item.role || item.title}
                    subtitle={item.institution || item.company}
                    duration={item.duration}
                    location={item.location}
                    details={item.details || [item.description]}
                    colorClass={currentData.color}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
