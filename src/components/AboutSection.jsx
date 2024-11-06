import React from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaGlobe, FaDatabase, FaMobileAlt } from 'react-icons/fa'

const services = [
  { icon: FaLightbulb, name: 'Backend Developer', color: 'text-blue-500' },
  { icon: FaGlobe, name: 'Web Design', color: 'text-red-500' },
  { icon: FaDatabase, name: 'Software', color: 'text-yellow-500' },
  { icon: FaMobileAlt, name: 'Application', color: 'text-purple-500' }
]

function AboutSection () {
  return (
    <motion.section
      className='mb-12 p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className='text-gray-500 text-3xl mb-5 text-center font-bold'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        ABOUT US
      </motion.h2>
      <motion.h3
        className='text-2xl font-bold mb-4'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        WHO AM I?
      </motion.h3>
      <motion.p
        className='text-gray-700 mb-12 text-justify '
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hello! I'm Kiran Gungaji Nikam, a passionate Computer Science and
        Engineering student in my final year at Sant Gajanan Maharaj College of
        Engineering, Mahagaon. With a solid academic foundation and a GPA of
        8.0, I've gained hands-on experience in web and software development,
        specializing in the MERN stack, Java, and data structures and
        algorithms. Throughout my journey, I've contributed to multiple
        projects, including a billing management system built with Java Swing
        and SQL and an E-Market project aimed at simplifying online commerce.
      </motion.p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='text-center'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <service.icon
              className={`text-4xl ${service.color} mx-auto mb-4`}
            />
            <h3 className='text-lg font-semibold'>{service.name}</h3>
            <div
              className={`w-16 h-1 ${service.color.replace(
                'text',
                'bg'
              )} mx-auto mt-2`}
            ></div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className='text-gray-700 mb-12 text-justify'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        In addition to my technical pursuits, I'm a national-level table tennis
        player and enjoy hobbies like swimming, which keep me grounded and
        motivated. My strengths include adaptability, self-confidence, and a
        positive attitude that drives me to continuously improve and take on new
        challenges.
      </motion.p>

      <motion.div
        className='bg-yellow-300 p-8 text-center'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className='text-3xl font-bold mb-4'>
          I am happy to know you
          <br />
          that 20+ projects done sucessfully!
        </h2>
        <motion.button
          className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HIRE ME
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default AboutSection
