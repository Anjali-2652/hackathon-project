import React from 'react'
import Login from './Login'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div>
      <Login/>
      <Outlet/>
    </div>
  )
}

export default LoginLayout
