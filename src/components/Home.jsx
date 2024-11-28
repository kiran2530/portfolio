import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Briefcase,
  Phone
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Component () {
  const skills = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL']
  const stats = [
    { label: 'Projects', value: 20 },
    { label: 'Years Exp', value: 1 },
    { label: 'Clients', value: 2 }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-4'
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
            className='text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Programmer',
                2000,
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
          <div className='flex justify-center space-x-4 mb-8'>
            <a
              href='https://github.com/kiran2530'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors'
            >
              <Github size={24} />
              <span className='sr-only'>GitHub</span>
            </a>
            <a
              href='https://www.linkedin.com/in/kiran-nikam-493220238/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors'
            >
              <Linkedin size={24} />
              <span className='sr-only'>LinkedIn</span>
            </a>
            <a
              href='mailto:nikamkiran2530@gmail.com'
              className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors'
            >
              <Mail size={24} />
              <span className='sr-only'>Email</span>
            </a>
          </div>
          <motion.p
            className='text-lg mb-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-400'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Welcome to my portfolio! I'm passionate about creating efficient,
            scalable, and user-friendly web applications. With expertise in both
            front-end and back-end technologies, I bring ideas to life through
            code.
          </motion.p>
        </motion.div>
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6'
          >
            <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4'>
              Skills
            </h2>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className='bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6'
          >
            <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4'>
              Quick Stats
            </h2>
            <div className='grid grid-cols-3 gap-4'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl font-bold text-blue-500'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-300'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
