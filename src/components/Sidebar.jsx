import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Mail, UserPlus, Users } from 'lucide-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import SubscriptionModal from './SubscriptionModal'
import Subscribers from './Subscribers'
import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const navItems = [
  'HOME',
  'ABOUT',
  'SERVICES',
  'SKILLS',
  'EDUCATION',
  'EXPERIENCE',
  'WORK',
  'BLOG',
  'CONTACT'
]

function Sidebar ({ closeSidebar, setIsSidebarOpen }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)
  const [isSubscribersOpen, setIsSubscribersOpen] = useState(false)
  const [subscribers, setSubscribers] = useState([])

  const fetchSubscribers = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${BACKEND_URL}/api/users`)
      setSubscribers(response.data.users)
    } catch (error) {
      console.error('Error fetching subscribers:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const handleInternalLinkClick = (e, to) => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen(false)
    }
    if (location.pathname !== to) {
      navigate(to)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <aside className='h-full flex flex-col p-6 fixed bg-white dark:bg-gray-800 w-64 z-50'>
      {closeSidebar && (
        <div className='flex justify-end mb-4'>
          <button
            onClick={closeSidebar}
            className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          >
            <X size={24} />
          </button>
        </div>
      )}
      <div className='text-center mb-4'>
        <motion.img
          src='/kiranProfile.png'
          alt='Kiran Nikam'
          className='w-48 h-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mx-auto'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.h1
          className='text-2xl font-bold text-gray-800 dark:text-white'
          initial={{ x: -180, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KIRAN NIKAM
        </motion.h1>
        <motion.p
          className='text-sm text-blue-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Developer
        </motion.p>
        <motion.div
          className='flex justify-center space-x-6 mt-2'
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
              href: 'mailto:nikamkiran2530@gmail.com.com',
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
              <Icon size={20} />
              <span className='sr-only'>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
      <div className='mt-0 flex justify-center space-x-2 mb-4 ml-4'>
        <motion.button
          onClick={() => setIsSubscriptionModalOpen(true)}
          className='flex items-center justify-center px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-sm'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <UserPlus size={20} className='mr-2' />
          Subscribe
        </motion.button>
        <motion.button
          disabled={isLoading ? true : false}
          onClick={() => setIsSubscribersOpen(true)}
          className={`flex items-center justify-center px-2 py-2 ${
            isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
          } bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 text-sm`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <Users size={20} className='mr-2' /> */}
          <div className='mr-2'>
            {isLoading ? (
              <motion.div
                className='w-4 h-4 border-t-2 border-white rounded-full animate-spin'
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            ) : subscribers.length < 10 ? (
              `0${subscribers.length}`
            ) : (
              subscribers.length
            )}
          </div>
          <p>Subscribers</p>
        </motion.button>
      </div>
      <nav className='flex-grow'>
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className='mb-2'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.6 }}
              onClick={e => {
                handleInternalLinkClick(e, `/${item.toLowerCase()}`)
              }}
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
                }
                end
              >
                {item}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.footer
        className='text-xs text-gray-500 mt-auto text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© Copyright {new Date().getFullYear()} All rights reserved.</p>
        <p>Made with ♥ by Kiran</p>
      </motion.footer>
      <AnimatePresence>
        {isSubscriptionModalOpen && (
          <SubscriptionModal
            isOpen={isSubscriptionModalOpen}
            onClose={() => setIsSubscriptionModalOpen(false)}
            fetchSubscribers={fetchSubscribers}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSubscribersOpen && (
          <Subscribers
            isOpen={isSubscribersOpen}
            onClose={() => setIsSubscribersOpen(false)}
            subscribers={subscribers}
          />
        )}
      </AnimatePresence>
    </aside>
  )
}

export default Sidebar
