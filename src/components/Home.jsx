'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const technologies = [
  'React',
  'Node.js',
  'JavaScript',
  'Tailwind CSS',
  'Java',
  'MongoDB'
]

export default function Home () {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 p-10'>
      <motion.div
        className='text-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className='text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Kiran Nikam
        </motion.h1>
        <motion.h2
          className='text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          className='text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-400'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Crafting beautiful, intuitive interfaces and robust backend solutions.
          Turning ideas into reality through code and creativity.
        </motion.p>

        <motion.div
          className='flex justify-center space-x-4 mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to='/projects'
            className='px-6 py-2 bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition duration-300'
          >
            View Projects
          </Link>
          <Link
            to='/contact'
            className='px-6 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition duration-300'
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          className='flex justify-center space-x-6 mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300'
          >
            <span className='sr-only'>GitHub</span>
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300'
          >
            <Linkedin size={24} />
            <span className='sr-only'>LinkedIn</span>
          </a>
          <a
            href='mailto:jackson@example.com'
            className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300'
          >
            <Mail size={24} />
            <span className='sr-only'>Email</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className='text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h3 className='text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300'>
          Technologies I work with:
        </h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className='bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
