'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import AboutSection from './components/AboutSection'
import MobileNavbar from './components/MobileNavbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <Router>
      <div className='flex h-screen overflow-hidden'>
        {!isMobile && (
          <div className='w-64 bg-white shadow-lg'>
            <Sidebar />
          </div>
        )}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {isMobile && <MobileNavbar toggleSidebar={toggleSidebar} />}
          <main className='flex-1 overflow-y-auto bg-gray-100'>
            <div className='container mx-auto p-8'>
              {/* Adding all routes here.................................. */}
              <Routes>
                <Route path='/about' element={<AboutSection />} />
              </Routes>
            </div>
          </main>
        </div>
        <AnimatePresence>
          {isMobile && isSidebarOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg'
            >
              <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
