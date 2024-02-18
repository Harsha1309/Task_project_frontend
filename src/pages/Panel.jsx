import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import '../App.css'

function Panel({username}) {
  return (
    <div className=''>
      <Navbar name={username}></Navbar>
        <div className="block">
          <Sidebar></Sidebar>
          <Dashboard></Dashboard>
        </div>
    </div>
  )
}

export default Panel
