import React, { useState } from 'react'

function Navbar() {

    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <>
    <nav id='desktop-nav'>
        <div className='logo'>David Obat</div>
        <div>
            <ul className='nav-links'>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

    </nav>
    <nav id='hamburger-nav'>
    <div className='logo'>David Obat</div>
    <div className='hamburger-menu'>
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#" onClick={toggleMenu}>About</a></li>
            <li><a href="#" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#" onClick={toggleMenu}>Contact</a></li>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar