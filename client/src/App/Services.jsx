import React from 'react'

import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
        <h1 className='text-rose-700 text-4xl text-center p-10'>
        Services
        </h1>

        <div className='flex justify-center'>
            <a href="/" className='text-zinc-400 border px-5 py-1 rounded-md text-sm'>
                Back to Home
            </a>
        </div>
    </div>
  )
}

export default Services