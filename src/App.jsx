import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import AboutSection from './components/AboutSection'
import MobileNavbar from './components/MobileNavbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Work from './components/Work'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      <div className='flex overflow-hidden'>
        {!isMobile && (
          <div className='w-64 bg-white shadow-lg'>
            <Sidebar />
          </div>
        )}
        <div className='flex-1 flex flex-col overflow-hidden '>
          {isMobile && <MobileNavbar toggleSidebar={toggleSidebar} />}
          <main className='mt-14 md:mt-0 flex-1 overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
            <div className='container mx-auto'>
              {/* Adding all routes here.................................. */}
              <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<AboutSection />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/skills' element={<Skills />} />
                <Route exact path='/education' element={<Education />} />
                <Route exact path='/experience' element={<Experience />} />
                <Route exact path='/work' element={<Work />} />
                <Route exact path='/blog' element={<Blog />} />
                <Route exact path='/contact' element={<Contact />} />
              </Routes>
            </div>
            <Footer />
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
              <Sidebar closeSidebar={() => setIsSidebarOpen(false)} setIsSidebarOpen={setIsSidebarOpen}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
