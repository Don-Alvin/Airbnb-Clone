import React, { useContext, useEffect } from 'react'
import { TbBrandAirbnb } from 'react-icons/tb'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import axios from 'axios'


const Header = () => {
  const {user, token} = useContext(UserContext)
  
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token]);


  return (
      <header className='flex justify-between fixed top-0 left-0 right-0 p-4'>
        <Link to='/' className='flex items-center gap-1' >
          <TbBrandAirbnb className='text-red-500 text-xl'/>
          <span className='font-bold text-xl text-red-500'>airbnb</span>
        </Link>

        <div className='flex border border-gray rounded-full py-2 px-4 gap-4 items-center shadow-md shadow-gray-300' >
          <div className='pr-4 border-r-2 border-r-gray'>Anywhere</div>
          <div className='pr-4 border-r-2 border-r-gray'>Any week</div>
          <div>Add Guests</div>
          <button className="bg-red-500 rounded-full p-1">
            <BiSearch className='text-white'/>
          </button>
        </div>

        <Link to={user? '/account' : '/login'} className='flex border border-gray rounded-full py-2 px-4 gap-4 items-center'>
          <div className='text-xl'>
            <HiOutlineBars3 />
          </div>
          {!!user ? <div>
            {user.username}
          </div> : <div className='bg-gray-500 text-white p-1 rounded-full'>
            <FaUserAlt />
           </div> }
          
        </Link>
      </header>
  )
}

export default Header