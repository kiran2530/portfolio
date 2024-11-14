import React from 'react'
import { Menu } from 'lucide-react'

function MobileNavbar ({ toggleSidebar }) {
  return (
    <nav className='fixed w-full top-0 z-50 shadow-md text-black bg-white bg-opacity-25 backdrop-blur-md p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Kiran Nikam</h1>
        <button
          onClick={toggleSidebar}
          className='text-gray-500 hover:text-gray-700'
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar
