'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react'

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitMessage('Thank you for your message. I will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className='p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto'>
        <motion.h2
          className='text-gray-500 text-3xl mb-5 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          <motion.div
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>
              Contact Information
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center text-gray-600 dark:text-gray-300'>
                <Mail className='w-6 h-6 mr-4' />
                <span>nikamkiran2530@gmail.com</span>
              </div>
              <div className='flex items-center text-gray-600 dark:text-gray-300'>
                <Phone className='w-6 h-6 mr-4' />
                <span>+91 8975952690</span>
              </div>
              <div className='flex items-center text-gray-600 dark:text-gray-300'>
                <MapPin className='w-6 h-6 mr-4' />
                <span>Kolhapur, Maharastra, India</span>
              </div>
            </div>
            <div className='mt-8'>
              <h4 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='https://www.linkedin.com/in/kiran-nikam-493220238/'
                  className='text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='https://github.com/kiran2530'
                  className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                >
                  <Github className='w-6 h-6' />
                </a>
                <a
                  href='#'
                  className='text-gray-600 dark:text-gray-300 hover:text-blue-400'
                >
                  <Twitter className='w-6 h-6' />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='4'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                ></textarea>
              </div>
              <motion.button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className='flex items-center justify-center'>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className='flex items-center justify-center'>
                    Send Message <Send className='w-4 h-4 ml-2' />
                  </span>
                )}
              </motion.button>
            </form>
            {submitMessage && (
              <motion.p
                className='mt-4 text-green-600 dark:text-green-400 text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
