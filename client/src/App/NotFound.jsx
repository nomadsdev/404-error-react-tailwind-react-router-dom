import React from 'react'

import { Link } from 'react-router-dom';

import { MdOutlineWifiTetheringError } from "react-icons/md";

function NotFound() {
  return (
    <div>
       <div>
        <h1 className='text-5xl text-zinc-400 text-center p-20'>
                404 Error Not found
            </h1>
       </div>

        <div className='flex justify-center'>
            <span className='text-rose-500 text-7xl'>
                <MdOutlineWifiTetheringError />
            </span>
        </div>

        <div className='flex justify-center'>
            <Link to="/" className='text-zinc-400 underline text-sm p-5'>
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound