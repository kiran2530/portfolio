'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Layout, Server, Smartphone, Database, Cloud } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.',
    technologies: ['Figma', 'Adobe XD', 'Sketch']
  },
  {
    icon: Code,
    title: 'Front-end Development',
    description:
      'Building responsive and interactive web applications using modern JavaScript frameworks and libraries.',
    technologies: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    icon: Server,
    title: 'Back-end Development',
    description:
      'Developing robust server-side applications and APIs to power your web and mobile applications.',
    technologies: ['Node.js', 'Express', 'JavaScript', 'C#']
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Designing and optimizing database structures for efficient data storage and retrieval.',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Creating cross-platform mobile applications that provide a native-like experience on both iOS and Android.',
    technologies: ['React Native', 'Flutter']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Implementing and managing cloud-based infrastructures for scalable and reliable applications.',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker']
  }
]

export default function Services () {
  return (
    <section className='p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-gray-500 text-3xl mb-5 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className='w-12 h-12 text-blue-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>
                {service.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                {service.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {service.technologies.map(tech => (
                  <span
                    key={tech}
                    className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
