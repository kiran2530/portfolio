import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, AlertTriangle } from 'lucide-react'
import axios from 'axios'

function SubscriptionModal ({ isOpen, onClose, fetchSubscribers }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otpStauts, setOtpStauts] = useState(false)
  const [otp, setOtp] = useState('')
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)

  // **API call to send OTP**
  const sendOtp = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/send-otp',
        { email }
      )
      if (response.data.status) {
        setSubmitMessage('OTP sent to your email.')
        setOtpSent(true)
        setIsSuccess(false)
        setOtpStauts(true)
      } else {
        setSubmitMessage(response.data.message)
      }
    } catch (error) {
      setSubmitMessage('Failed to send OTP. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // **API call to add user**
  const addUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        email,
        otp,
        name
      })
      if (response.data.status) {
        setSubmitMessage('Subscription successful!')
        setIsSuccess(true)
        setOtp('')
        setOtpSent(false)
        setName('')
        setEmail('')
        fetchSubscribers()
      } else {
        setSubmitMessage(response.data.message)
        setIsSuccess(false)
      }
    } catch (error) {
      setOtpStauts(false)
      setSubmitMessage('Verification failed. Please try again.')
    } finally {
      setIsVerifyingOtp(false)
      setIsSubmitting(false)
    }
  }

  // **Handle form submission**
  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!otpSent) {
      // Call sendOtp function if OTP hasn't been sent
      await sendOtp()
    } else {
      // Call addUser function if OTP is already sent
      setIsVerifyingOtp(true)
      await addUser()
    }
  }

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
            className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden'
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 dark:opacity-20'
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
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='text-3xl font-bold text-gray-800 dark:text-white mb-6 relative'
            >
              Subscribe
            </motion.h2>
            {!isSuccess && submitMessage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                className='text-center mb-4'
              >
                {otpStauts ? (
                  <CheckCircle className='w-16 h-16 mx-auto text-green-500 mb-4' />
                ) : (
                  <AlertTriangle className='w-16 h-16 mx-auto text-red-500 mb-2' />
                )}
                <p className='text-sm font-semibold text-gray-800 dark:text-white'>
                  {submitMessage}
                </p>
              </motion.div>
            ) : null}
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className='space-y-6 relative'>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300'
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300'
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {otpSent && (
                    <div>
                      <label
                        htmlFor='otp'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                      >
                        OTP
                      </label>
                      <input
                        type='text'
                        id='otp'
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300'
                        required
                      />
                    </div>
                  )}
                </motion.div>
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting || isVerifyingOtp ? (
                    <motion.div
                      className='w-6 h-6 border-t-2 border-white rounded-full animate-spin'
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  ) : (
                    <>
                      {otpSent ? 'Verify OTP' : 'Send OTP'}{' '}
                      <Send className='ml-2' size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                className='text-center'
              >
                <CheckCircle className='w-16 h-16 mx-auto text-green-500 mb-4' />
                <p className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>
                  {submitMessage}
                </p>
                <p className='text-gray-600 dark:text-gray-400'>
                  Thank you for subscribing!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SubscriptionModal
