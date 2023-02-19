import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <form className='grid p-4 border border-gray-300 rounded shadow'>
        <label htmlFor="email" className='mb-'>Email</label>
        <input className='mb-4 outline-none border border-gray-300 p-2 rounded' type="email" id='email' placeholder='your@email.com' />
        <label htmlFor="password" className='mb-1'>Password</label>
        <input className='mb-4 outline-none border border-gray-300 p-2 rounded' type="password" placeholder='password' />
        <button className='mb-2 text-white bg-red-500 p-2 rounded'>Login</button>
        <div>
          <span className='text-sm'>Don't have an account yet? <Link to='/register' className='text-red-500 text-sm'>Register</Link></span>
        </div>
      </form>
    </div>
  )
}

export default LoginPage