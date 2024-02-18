import React from 'react'
import admin from '../assets/admin.png'
import denmark from '../assets/denmark.png'
import Ham from '../assets/ham.png'
import './style.css'

function Navbar({username}) {
  return (
    <div className='Navbar'>
        <div className="nameBox">
            <div className="ham">
                <img src={Ham} alt="" className='hamimg'/>
            </div>
            <div className="image">
                <img src={admin} alt="" className='admin'/>
            </div>
            <div className="detail">
                <div className="name">{username ? username : "Hello"}</div>
                <div className="post">Starfjord AS</div>
            </div>
        </div>
        <div className="locationBox">
            <div className="location">Norks Boerkmal</div>
            <div className="locationFlag">
                <img src={denmark} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
