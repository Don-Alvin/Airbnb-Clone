import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import { UserContext } from '../UserContext'
import { useSignIn } from 'react-auth-kit'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const signIn = useSignIn()

  const submitHandler = async(e) =>{
    e.preventDefault()

    try {
      const {data} = await axios.post('/login', ({email, password}))
      signIn({
        token: data.token,
        tokenType: 'Bearer',
        expiresIn: 3600,
        authState: email
      })
      localStorage.setItem('token', data.token);
      setUser(data.user)
      toast.success('Log in successfull...!')

      navigate('/')
    } catch (error) {
      toast.error('Failed to log in. Check if password and email are correct')
    }
  } 

  return (
    <>
      <Toaster position='top-center'></Toaster>
      <div className='flex flex-col gap-6 justify-center items-center h-[100vh]'>
      <h1 className='text-3xl font-bold'>Welcome back</h1>
      <form className='grid p-4 border border-gray-300 rounded shadow' onSubmit={submitHandler}>
        <label htmlFor="email" className='mb-'>Email</label>
        <input 
          className='mb-4 outline-none border border-gray-300 p-2 rounded' 
          type="email" 
          id='email' 
          placeholder='your@email.com'
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
        <label htmlFor="password" className='mb-1'>Password</label>
        <input 
          className='mb-4 outline-none border border-gray-300 p-2 rounded' 
          type="password" 
          id='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)} 
        />
        <button className='mb-2 text-white bg-red-500 p-2 rounded'>Login</button>
        <div>
          <span className='text-sm'>Don't have an account yet? <Link to='/register' className='text-red-500 text-sm'>Register</Link></span>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginPage