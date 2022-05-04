import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {SidebarData} from './SidebarData'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
      setSidebar(!sidebar)
      console.log(sidebar)
  }

  return (
    <>
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <MenuIcon onClick={showSidebar} /> 
            </Link>
        </div>
        <nav className={sidebar?'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <CloseIcon  /> 
                    </Link>
                </li>
            </ul>

        </nav>

    </>
    )
}

export default Navbar