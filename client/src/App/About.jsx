import React from 'react'

import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1 className='text-green-700 text-center text-4xl p-10'>
        About
        </h1>

        <div className='flex justify-center'>
            <a href="/" className='text-zinc-400 border px-5 py-1 rounded-md text-sm'>
                Back to Home
            </a>
        </div>
    </div>
  )
}

export default About