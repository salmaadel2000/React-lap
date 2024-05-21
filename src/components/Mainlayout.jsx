import React from 'react'
import MyNavbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Home'
import About from './About'
function Mainlayout() {
  return (
    <>
    <MyNavbar/>
    <Home/>
    {/* <About/> */}
    <Outlet />
    </>
  )
}

export default Mainlayout