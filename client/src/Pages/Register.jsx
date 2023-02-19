import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-[100vh]'>
      <h1 className='text-3xl font-bold'>Welcome to Airbnb</h1>
      <form className='grid p-4 border border-gray-300 rounded shadow'>
      <label htmlFor="name" className='mb-'>Username</label>
        <input className='mb-4 outline-none border border-gray-300 p-2 rounded' type="text" id='name' placeholder='Usename' />
        <label htmlFor="email" className='mb-'>Email</label>
        <input className='mb-4 outline-none border border-gray-300 p-2 rounded' type="email" id='email' placeholder='your@email.com' />
        <label htmlFor="password" className='mb-1'>Password</label>
        <input className='mb-4 outline-none border border-gray-300 p-2 rounded' type="password" placeholder='password' />
        <button className='mb-2 text-white bg-red-500 p-2 rounded'>Register</button>
        <div>
          <span className='text-sm'>Already registered? <Link to='/login' className='text-red-500 text-sm'>Log in</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Register