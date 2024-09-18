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
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
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
            <li><a href="#About" onClick={toggleMenu}>About</a></li>
            <li><a href="#Experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar