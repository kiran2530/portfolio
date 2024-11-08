'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Tag } from 'lucide-react'

const projectsData = [
  {
    title: 'E-Market',
    description:
      'Backend for an e-commerce platform built with Node.js, Express, and MongoDB.',
    image: 'https://via.placeholder.com/300x400.png?text=EMarket',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://example-emarket.com',
    githubUrl: 'https://github.com/kiran2530/E-Market-Backend',
    color: 'from-yellow-500 to-red-500'
  },
  {
    title: 'Billing Management System (Java Swing & SQL)',
    description:
      'A desktop billing management system built using Java Swing for the GUI and SQL for backend processing.',
    image: 'https://via.placeholder.com/300x400.png?text=Billing+Management',
    technologies: ['Java Swing', 'SQL'],
    liveUrl: 'N/A',
    githubUrl: 'https://github.com/kiran2530/Billing-Management-System',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Product Landing Page - BeatUpWithUs',
    description:
      'A simple product landing page built using HTML, CSS, and JavaScript.',
    image: 'https://via.placeholder.com/300x400.png?text=BeatUpWithUs',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://example-beatupwithus.com',
    githubUrl: 'https://github.com/kiran2530/Product-Landing-Page-BeatUpWithUs',
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'WeatherApp (Node.js & Express)',
    description:
      'A weather application built with Node.js, Express, and Handlebars, providing real-time weather data.',
    image: 'https://via.placeholder.com/300x400.png?text=WeatherApp',
    technologies: ['Node.js', 'Express', 'Handlebars', 'API Integration'],
    liveUrl: 'https://example-weatherapp.com',
    githubUrl: 'https://github.com/kiran2530/WeatherApp',
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'StoryApp',
    description:
      'An interactive web app for storytelling, built with HTML and JavaScript.',
    image: 'https://via.placeholder.com/300x400.png?text=StoryApp',
    technologies: ['HTML', 'JavaScript'],
    liveUrl: 'https://example-storyapp.com',
    githubUrl: 'https://github.com/kiran2530/StoryApp',
    color: 'from-pink-500 to-purple-500'
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio showcasing my skills and projects.',
    image: 'https://via.placeholder.com/300x400.png?text=My+Portfolio',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://kiran2530.github.io/Portfolio',
    githubUrl: 'https://github.com/kiran2530/Portfolio',
    color: 'from-indigo-500 to-blue-500'
  }
]

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-48 object-cover'
        />
        <motion.div
          className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2'
          >
            <motion.button
              className='bg-white text-gray-800 px-4 py-2 rounded-full flex items-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className='w-4 h-4 mr-2' />
              View Live
            </motion.button>
          </a>
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2'
          >
            <motion.button
              className='bg-gray-800 text-white px-4 py-2 rounded-full flex items-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className='w-4 h-4 mr-2' />
              View Code
            </motion.button>
          </a>
        </motion.div>
      </div>
      <div className='p-6'>
        <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
          {project.title}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.color}`}
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
  )
}

export default function Work () {
  return (
    <section className='p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-gray-500 text-3xl mb-5 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
