import { useState } from 'react'
import './App.css'

import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    
      <h1 className='text-red-600 text-center text-3xl p-10'>
        404 Error Not found
      </h1>

      <div className='flex justify-center gap-10'>
        <Link to="/about" className='text-blue-700 bg-blue-200 rounded-md px-5 py-1 hover:text-blue-100 hover:bg-blue-600 transition'>
          About
        </Link>
        <Link to="/services" className='text-rose-700 bg-rose-200 rounded-md px-5 py-1 hover:text-rose-100 hover:bg-rose-600 transition'>
          Services
        </Link>
      </div>

      <div className='flex justify-center p-5'>
        <a href="asdasd" className='bg-yellow-200 text-yellow-600 rounded-md px-5 py-1 transition'>
          Test Error
        </a>
      </div>
      
    </>
  )
}

export default App
