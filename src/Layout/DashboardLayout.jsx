import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Dashnav from '../components/Dashnav'

const DashboardLayout = () => {
  return (
    <div>
        <Dashnav/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout