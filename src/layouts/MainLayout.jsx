import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
function MainLayout() {
  return (
   <>
   <Navbar></Navbar>
   <Outlet></Outlet>
    <Footer></Footer>
   </>
  )
}

export default MainLayout