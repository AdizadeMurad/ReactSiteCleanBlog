import React from 'react'
import Footer from '../../components/FooterGeneral/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/NavbarGeneral/Navbar'

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