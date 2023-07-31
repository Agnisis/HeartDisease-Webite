import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='container mx-auto'>
      <nav className='m-3 p-7 flex items-center justify-between bg-slate-600 text-yellow-600'>
        <div className='text-5xl hover:text-slate-300 cursor-pointer'>
        <img src="" alt="" />
        <h1>CVD Prediction</h1>
        </div>
        
        <div className='flex text-3xl gap-6 cursor-pointer ease-in duration-100'>
          <Link className='hover:text-teal-300 ease-in duration-200 '>Home</Link>
          <Link className='hover:text-teal-300 ease-in duration-200 '>Dashboard</Link>
          <Link className='hover:text-teal-300 ease-in duration-200 '>Prediction</Link>
          <Link className='hover:text-teal-300 ease-in duration-200 '>Profile</Link>
          <img src="" alt="" />


        </div>
      </nav>
      
    </div>
  )
}

export default Header