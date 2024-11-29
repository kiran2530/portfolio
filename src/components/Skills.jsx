'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Server, Layout, Smartphone, Cloud } from 'lucide-react'

const skillCategories = [
  {
    name: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 50 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Java', level: 80 },
      { name: 'Express.js', level: 90 },
      { name: 'C#', level: 50 }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 50 },
      { name: 'MySQL', level: 90 }
    ]
  },
  {
    name: 'DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 60 },
      { name: 'CI/CD', level: 70 },
      { name: 'Google Cloud', level: 50 }
    ]
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 60 },
      { name: 'Android ', level: 75 }
    ]
  },
  {
    name: 'Other',
    icon: Code,
    skills: [
      { name: 'RESTful APIs', level: 90 },
      { name: 'WebSockets', level: 82 },
      { name: 'TypeScript', level: 60 },
      { name: 'Git', level: 92 }
    ]
  }
]

const SkillBar = ({ name, level }) => (
  <div className='mb-4'>
    <div className='flex justify-between mb-1'>
      <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
        {name}
      </span>
      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
        {level}%
      </span>
    </div>
    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
      <motion.div
        className='bg-blue-600 h-2.5 rounded-full'
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  </div>
)

export default function Skills () {
  const [selectedCategory, setSelectedCategory] = useState(
    skillCategories[0].name
  )

  return (
    <section className='p-5 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 '>
      <div className='container mx-auto'>
        <motion.h2
          className='text-gray-500 text-3xl mb-8 md:mb-20 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className='flex flex-wrap justify-center mb-10 gap-6'>
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
              } transition-colors duration-300`}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <category.icon className='inline-block w-4 h-4 mr-2' />
              {category.name}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-10 md:px-40 md:mt-14'
          >
            {skillCategories
              .find(category => category.name === selectedCategory)
              .skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
