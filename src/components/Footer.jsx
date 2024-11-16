import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GitlabIcon as GitHub,
  Mail,
  ArrowRight
} from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'GitHub', icon: GitHub, url: 'https://github.com' }
]

const quickLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/contact' }
]

const ExternalLink = motion.create(Link)

export default function Footer () {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const handleSubscribe = async e => {
    e.preventDefault()
    setSubscribeStatus('Subscribing...')
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubscribeStatus('Thank you for subscribing!')
    setEmail('')

    setTimeout(() => {
      setSubscribeStatus('')
    }, 3000)
  }

  const handleInternalLinkClick = (e, to) => {
    e.preventDefault()
    if (location.pathname !== to) {
      navigate(to)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-2xl font-bold mb-4'>Kiran Nikam</h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              Passionate web developer creating amazing digital experiences.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(link => (
                <ExternalLink
                  key={link.name}
                  to={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300'
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={e => {
                    e.preventDefault()
                    window.open(link.url, '_blank', 'noopener,noreferrer')
                  }}
                >
                  <link.icon size={20} />
                  <span className='sr-only'>{link.name}</span>
                </ExternalLink>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.url}
                      className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300'
                      onClick={e => handleInternalLinkClick(e, link.url)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
            <ul className='space-y-2 text-gray-600 dark:text-gray-400'>
              <li>Kiran Gungaji Nikam</li>
              <li className='flex items-center'>
                <Mail size={16} className='mr-2' />
                nikamkiran2530@gmail.com
              </li>
              <li>+91 8975952690</li>
              <li>Shelewadi, Kolhapur, India, 416208</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className='text-xl font-semibold mb-4'>Newsletter</h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form
              onSubmit={handleSubscribe}
              className='flex flex-col space-y-2'
            >
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <motion.button
                type='submit'
                className='bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center justify-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <ArrowRight size={16} className='ml-2' />
              </motion.button>
            </form>
            {subscribeStatus && (
              <motion.p
                className='mt-2 text-sm text-green-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {subscribeStatus}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className='mt-2 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>© Copyright {new Date().getFullYear()} All rights reserved.</p>
          <p>Made with ♥ by Kiran</p>
        </motion.div>
      </div>
    </footer>
  )
}
