import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  const [active, setActive] = useState('HOME')

  return (
    <aside className='h-full flex flex-col p-6'>
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
          Fullstack Developer
        </motion.p>
      </div>
      <nav className='flex-grow'>
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className={`mb-2 ${active === item ? 'text-blue-500' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.6 }}
              onClick={() => {setActive(item)}}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className='hover:text-blue-500 transition duration-300'
              >
                {item}
              </Link>
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
        <p>© Copyright 2021 All rights reserved.</p>
        <p>Made with ♥ by Kiran</p>
      </motion.footer>
    </aside>
  )
}

export default Sidebar
