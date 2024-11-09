'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const technologies = [
  'React',
  'Node.js',
  'Express.js',
  'Java',
  'MongoDB',
  'C#',
  'Tailwind CSS',
  'Git/Github'
]

export default function Home () {
  return (
    <section className='p-10 min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 overflow-hidden'>
      <motion.div
        className='text-center relative z-10'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className='text-6xl md:text-8xl font-bold mb-4 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Kiran Nikam
        </motion.h1>
        <motion.h2
          className='text-2xl md:text-3xl text-gray-600 dark:text-gray-300 h-20'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'Software Developer',
              2000,
              'Problem Solver',
              2000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>
        <motion.p
          className='text-lg mb-14 max-w-2xl mx-auto text-gray-700 dark:text-gray-400'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate about crafting beautiful, intuitive interfaces and robust
          backend solutions. Turning complex ideas into elegant, user-friendly
          applications.
        </motion.p>

        <motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to='/work'
            className='px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105'
          >
            View Projects
          </Link>
          <Link
            to='/contact'
            className='px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105'
          >
            Get in Touch
          </Link>
          <a
            href='https://drive.google.com/file/d/1WL0YRJB2MCz1WL7fkuo-dighqLkNrdrm/view?usp=drivesdk'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300 transform hover:scale-105'
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className='flex justify-center space-x-6 mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/kiran2530',
              label: 'GitHub'
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/kiran-nikam-493220238/',
              label: 'LinkedIn'
            },
            {
              icon: Mail,
              href: 'mailto:nikamkiran2530@gmail.com',
              label: 'Email'
            }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300 transform hover:scale-110'
            >
              <Icon size={32} />
              <span className='sr-only'>{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className='text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h3 className='text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300'>
          Technologies I work with:
        </h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className='bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Background animation */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute bg-blue-300 dark:bg-blue-700 rounded-full opacity-10'
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              scale: [1, Math.random() + 0.5],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
    </section>
  )
}
