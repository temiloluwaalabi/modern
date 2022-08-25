import React from 'react'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useState } from 'react';
//BEM -> BLOCK ELEMENTS MODIFIER

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wmod">What is Modern</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Libraries</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='modern__navbar'>
      <div className="modern__navbar-links">
        <div className="modern__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="modern__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="modern__navbar_sign">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="modern__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='modern__navbar-menu_container scale-up-center'>
            <div className="modern__navbar-menu_container-links">
              <Menu />
              <div className="modern__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar