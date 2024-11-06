'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'GraphQL',
  'AWS'
]
const roles = [
  'UI/UX Designer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast'
]

export default function Home () {
  const [currentTechIndex, setCurrentTechIndex] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex(prevIndex => (prevIndex + 1) % technologies.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
    })
  }, [controls])

  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 overflow-hidden p-10'>
      <motion.div
        className='text-center relative z-10'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className='mb-8 relative'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
          <img
            src='/kiranProfile.png'
            alt='Kiran Nikam'
            className='w-72 h-72 rounded border-4 border-white dark:border-gray-800 shadow-lg mx-auto my-4'
          />
        </motion.div>
        <motion.h1
          className='text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Kiran Nikam
        </motion.h1>
        <motion.h2
          className='text-xl md:text-2xl mb-4 text-gray-600 dark:text-gray-300 h-20'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={roles.flatMap(role => [role, 1000])}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>
        <motion.p
          className='text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-400'
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
          <a
            href='/path-to-your-resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
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
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:jackson@example.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300'
            >
              <Icon size={24} />
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
        <h3 className='text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300'>
          Technologies I work with:
        </h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                index === currentTechIndex ? 'scale-110 shadow-lg' : ''
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
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
