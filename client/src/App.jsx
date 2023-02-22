import React from 'react'
import axios from 'axios'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import { UserContextProvider } from './UserContext'
import Account from './Pages/Account'

axios.defaults.baseURL = import.meta.env.VITE_APP_DOMAIN_SERVER


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<Register />} />
      <Route path='account' element={<Account />} />
    </Route>
  )
)

const App = () => {
  return (
  <>
    <UserContextProvider>
      <RouterProvider router={router} />  
    </UserContextProvider>
    
  </>
  )
}

export default App