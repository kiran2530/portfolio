import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, Loader } from 'lucide-react'
import axios from 'axios'

function Subscribers ({ isOpen, onClose, subscribers }) {
  // const [subscribers, setSubscribers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 15 }}
            className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative'
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-30 dark:opacity-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.2 }}
            />
            <button
              onClick={onClose}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors'
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='flex items-center mb-6 relative'
            >
              <Users className='w-8 h-8 text-green-500 mr-3' />
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                Subscribers
              </h2>
            </motion.div>
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='flex justify-center items-center h-40'
              >
                <Loader className='w-8 h-8 text-blue-500 animate-spin' />
              </motion.div>
            ) : (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='space-y-4 max-h-[60vh] overflow-y-auto pr-2 relative'
              >
                <AnimatePresence>
                  {subscribers.map((subscriber, index) => (
                    <motion.li
                      key={subscriber._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className='bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md relative overflow-hidden'
                    >
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-900 dark:to-blue-900 opacity-20'
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: 'linear'
                        }}
                      />
                      <div className='flex items-center'>
                        <div className='h-5 w-5 mr-1 rounded-full bg-gray-600'></div>
                        <h3 className='font-semibold text-gray-800 dark:text-white text-lg mb-1 relative'>
                          {subscriber.name}
                        </h3>
                      </div>
                      <p className='text-gray-600 dark:text-gray-300 relative ml-6'>
                        {subscriber.email}
                      </p>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Subscribers
