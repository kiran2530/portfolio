'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Award,
  Book,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Sant Gajanan Maharaj College of Engineering',
    location: 'Mahagaon, India',
    period: 'Expected Graduation: 2025',
    description:
      'Specialized in Full Stack Development with a focus on MERN Stack and software development principles. Actively engaged in web development and software engineering projects.',
    achievements: [
      'Technical Head of the CSE Department',
      'National-level table tennis player',
      'GPA: 8.0',
      'Secured 91.20% in 12th grade and 88.40% in 10th grade'
    ],
    courses: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Web Development (MERN Stack)',
      'Software Engineering'
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    degree: 'Higher Secondary School Certificate',
    institution: 'Navodaya Vidyalaya Padve Rajapur Ratnagiri MR',
    location: 'Rajapur,Ratnagiri, India',
    period: 'Completed: 2021',
    description:
      'Focused on Science with a strong foundation in Mathematics and Physics, scoring 91.20% overall. Developed analytical skills essential for computer science.',
    achievements: [
      'Secured 91.20% overall',
      'Active participant in science exhibitions and competitions'
    ],
    courses: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Hindi'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Navodaya Vidyalaya Padve Rajapur Ratnagiri MR',
    location: 'Rajapur,Ratnagiri, India',
    period: 'Completed: 2019',
    description:
      'Completed with an 88.40% score, showcasing strong performance across core subjects and co-curricular activities.',
    achievements: [
      'Secured 88.40% overall',
      'Participated in National-level table tennis competitions'
    ],
    courses: ['Mathematics', 'Science', 'Social Studies', 'English', 'Marathi'],
    color: 'from-indigo-500 to-blue-500'
  }
]

const EducationCard = ({ education, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border-l-4 border-gradient-to-r ${education.color}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
            {education.degree}
          </h3>
          <p className='text-xl text-blue-600 dark:text-blue-400'>
            {education.institution}
          </p>
        </div>
      </div>
      <div className='flex items-center text-gray-600 dark:text-gray-400 mb-2'>
        <MapPin className='w-4 h-4 mr-2' />
        <span>{education.location}</span>
      </div>
      <div className='flex items-center text-gray-600 dark:text-gray-400 mb-4'>
        <Calendar className='w-4 h-4 mr-2' />
        <span>{education.period}</span>
      </div>
      <p className='text-gray-700 dark:text-gray-300 mb-4'>
        {education.description}
      </p>
      <motion.button
        className={`text-gray-600 dark:text-gray-400 p-2 rounded-full ${
          isExpanded ? 'bg-gray-200 dark:bg-gray-700' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isExpanded ? (
          <ChevronUp className='w-6 h-6' />
        ) : (
          <ChevronDown className='w-6 h-6' />
        )}
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='mt-4'>
              <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center'>
                <Award className='w-5 h-5 mr-2 text-yellow-500' />
                Key Achievements
              </h4>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 pl-6'>
                {education.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
              <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center'>
                <Book className='w-5 h-5 mr-2 text-green-500' />
                Relevant Courses
              </h4>
              <div className='grid grid-cols-2 gap-2'>
                {education.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    className='flex items-center text-gray-700 dark:text-gray-300'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ExternalLink className='w-4 h-4 mr-2 text-blue-500' />
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Education () {
  return (
    <section className='p-5 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-gray-500 text-3xl mb-10 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Education Journey
        </motion.h2>
        <div className='max-w-5xl mx-auto'>
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
