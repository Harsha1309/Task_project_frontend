import React from 'react'
import Logoimage from '../assets/index.png'

const listOptns = [
    {
        index: 1,
        name: 'Invoices',
        link: '',
        logo: Logoimage
    },
    {
        index: 2,
        name: 'Customers',
        link: '',
        logo: Logoimage
    },
    {
        index: 3,
        name: 'My Business',
        link: '',
        logo: Logoimage
    },
    {
        index: 4,
        name: 'Invoice Journal',
        link: '',
        logo: Logoimage
    },
    {
        index: 5,
        name: 'Price List',
        link: '',
        logo: Logoimage
    },
    {
        index: 6,
        name: 'Multiple Invoices',
        link: '',
        logo: Logoimage
    },
    {
        index: 7,
        name: 'Unpaid Invoices',
        link: '',
        logo: Logoimage
    },
    {
        index: 8,
        name: 'Offer',
        link: '',
        logo: Logoimage
    },
    {
        index: 9,
        name: 'Inventory Control',
        link: '',
        logo: Logoimage
    },
    {
        index: 10,
        name: 'Member Invoicing',
        link: '',
        logo: Logoimage
    },
    {
        index: 11,
        name: 'Import/Export',
        link: '',
        logo: Logoimage
    },
    {
        index: 12,
        name: 'LogOut',
        link: '',
        logo: Logoimage
    },
]

function Sidebar() {
  return (
    <div className='sideBar'>
        <div className="menu">Menu</div>
        <div className="listMenu">
            {
                listOptns.map((item) => (
                    <div className="listOptn" key={item.index}>
                        <div className="online"></div>
                        <div className="optn">
                            <img src={item.logo} alt="" className='index'/>
                            <>{item.name}</>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar
