'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  Settings,
  ExternalLink
} from 'lucide-react'

const experienceData = [
  {
    title: 'Software Developer',
    company: 'Freelance',
    logo: 'https://via.placeholder.com/80x80.png?text=Freelance',
    location: 'Remote',
    period: 'Jan 2024 - Mar 2024',
    description:
      'Developed a billing management system desktop app for a client, using Java Swing and SQL.',
    achievements: [
      'Built an intuitive user interface with Java Swing, allowing efficient data entry and invoice management',
      'Optimized SQL queries, reducing data retrieval time by 25%',
      'Provided full documentation and training for end-users, resulting in high client satisfaction'
    ],
    technologies: ['Java', 'Swing', 'SQL'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Full Stack Developer (Major Project)',
    company: 'Sant Gajanan Maharaj College of Engineering',
    logo: 'https://via.placeholder.com/80x80.png?text=Project+Logo',
    location: 'Mahagaon, Kolhapur, Maharashtra',
    period: 'Sep 2024 - Present',
    description:
      'Designing and developing an E-Commerce platform for vendors to conveniently market their products to buyers, focusing on separate interfaces for buyers and vendors.',
    achievements: [
      'Integrated a Cloudinary image management system for efficient media handling',
      'Implemented secure authentication for separate buyer and vendor accounts',
      'Optimized database structure, improving product search performance by 35%'
    ],
    technologies: [
      'React.js',
      'Express.js',
      'Node.js',
      'MongoDB',
      'Cloudinary'
    ],
    color: 'from-blue-500 to-cyan-500'
  }
]

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={`h-2 bg-gradient-to-r ${experience.color}`} />
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className='w-16 h-16 rounded-full mr-4'
          />
          <div>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-white'>
              {experience.title}
            </h3>
            <p className='text-xl text-blue-600 dark:text-blue-400'>
              {experience.company}
            </p>
          </div>
        </div>
        <div className='flex items-center text-gray-600 dark:text-gray-400 mb-2'>
          <MapPin className='w-4 h-4 mr-2' />
          <span>{experience.location}</span>
        </div>
        <div className='flex items-center text-gray-600 dark:text-gray-400 mb-4'>
          <Calendar className='w-4 h-4 mr-2' />
          <span>{experience.period}</span>
        </div>
        <p className='text-gray-700 dark:text-gray-300 mb-4'>
          {experience.description}
        </p>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='px-6 pb-6'
        >
          <div className='mt-4'>
            <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center'>
              <Award className='w-5 h-5 mr-2 text-yellow-500' />
              Key Achievements
            </h4>
            <ul className='space-y-2'>
              {experience.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className='flex items-start'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ExternalLink className='w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0' />
                  <span className='text-gray-700 dark:text-gray-300'>
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
            <h4 className='text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-2 flex items-center'>
              <Settings className='w-5 h-5 mr-2 text-blue-500' />
              Technologies Used
            </h4>
            <div className='flex flex-wrap gap-2'>
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${experience.color}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience () {
  return (
    <section className='p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-gray-500 text-3xl mb-5 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>
        <div className='max-w-5xl mx-auto'>
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
