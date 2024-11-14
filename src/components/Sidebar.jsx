import React from 'react'
import { motion } from 'framer-motion'
import { X, Github, Linkedin, Mail } from 'lucide-react'
import { NavLink } from 'react-router-dom'

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

function Sidebar ({ closeSidebar }) {
  return (
    <aside className='h-full flex flex-col p-6 fixed bg-white'>
      {closeSidebar && (
        <div className='flex justify-end mb-4'>
          <button
            onClick={closeSidebar}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={24} />
          </button>
        </div>
      )}
      <div className='text-center mb-8'>
        <motion.img
          src='/kiranProfile.png'
          alt='Kiran Nikam'
          className='w-48 h-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mx-auto'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.h1
          className='text-2xl font-bold'
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
      <nav className='flex-grow'>
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className='mb-2'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.6 }}
              onClick={closeSidebar}
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
        <p>© Copyright 2024 All rights reserved.</p>
        <p>Made with ♥ by Kiran</p>
      </motion.footer>
    </aside>
  )
}

export default Sidebar
