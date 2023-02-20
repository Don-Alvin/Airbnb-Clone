import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/register", ({username, email, password}));
      toast.success('User registered successfully...!')
      navigate('/login')
    } catch (error) {
      toast.error('Registration failed because user is already registered');
    }
    // setUsername('')
    // setEmail('')
    // setPassword('')
    
  }

  return (
    <>
      <Toaster position='top-center'/>
      <div className='flex flex-col gap-6 justify-center items-center h-[100vh]'>
        <h1 className='text-3xl font-bold'>Welcome to Airbnb</h1>
        <form className='grid p-4 border border-gray-300 rounded shadow' onSubmit={submitHandler}>
          <label htmlFor="name" className='mb-'>Username</label>
          <input 
            className='mb-4 outline-none border border-gray-300 p-2 rounded' 
            type="text" 
            id='name' 
            placeholder='John-Doe'
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <label htmlFor="email" className='mb-'>Email</label>
          <input 
            className='mb-4 outline-none border border-gray-300 p-2 rounded' 
            type="email" 
            id='email' 
            placeholder='your@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <label htmlFor="password" className='mb-1'>Password</label>
          <input 
            className='mb-4 outline-none border border-gray-300 p-2 rounded'
            type='password' 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
          <button className='mb-2 text-white bg-red-500 p-2 rounded'>Register</button>
          <div>
            <span className='text-sm'>Already registered? <Link to='/login' className='text-red-500 text-sm'>Log in</Link></span>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register