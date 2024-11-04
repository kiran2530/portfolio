import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import {Link} from 'react-router-dom'

const navItems = ['HOME', 'ABOUT', 'SERVICES', 'SKILLS', 'EDUCATION', 'EXPERIENCE', 'WORK', 'BLOG', 'CONTACT'];

function Sidebar({ closeSidebar }) {
  return (
    <aside className="h-full flex flex-col p-6">
      {closeSidebar && (
        <div className="flex justify-end mb-4">
          <button onClick={closeSidebar} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
      )}
      <div className="text-center mb-8">
        <motion.img
          src="/kiranProfile.png"
          alt="Kiran Nikam"
          className="rounded-full mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          KIRAN NIKAM
        </motion.h1>
        <motion.p
          className="text-sm text-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Fullstack Developer
        </motion.p>
      </div>
      <nav className="flex-grow">
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className={`mb-2 ${item === 'ABOUT' ? 'text-blue-500' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500 transition duration-300">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.footer
        className="text-xs text-gray-500 mt-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© Copyright 2021 All rights reserved.</p>
        <p>Made with ♥ by Kiran</p>
      </motion.footer>
    </aside>
  );
}

export default Sidebar;