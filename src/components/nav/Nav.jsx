import { React, useState, useEffect } from 'react'
import './nav.css'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {

  const toggleNav = () => {
    const navbar = document.querySelector('.container-header')
    const links = document.querySelectorAll('.link')
    navbar.classList.toggle("show")
    links.forEach(link => {
      link.classList.toggle("appear")
      if (window.location.pathname === link.getAttribute('href')) {
        link.classList.add('active')
      } else {
        link.classList.add('active')
      }
    })
  }
      

  return (
    <motion.header className="container-header">
      <div className="container-title">
        <h1 className='title'>Tamos Toros</h1>
      </div>
      <nav className="container-nav">
        <div className="container-list">
          <ul className="list-nav">
            <li>
              <Link className='link' to={"/"}>Home</Link>
            </li>
            <li>
              <Link className='link' to={"/about"}>About</Link>
            </li>
            <li>
              <Link className='link' to={"/diet"}>Diets</Link>
            </li>
            <li>
              <Link className='link' to={"/rutines"}>Rutines</Link>
            </li>
            <li>
              <Link className='link' to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container-logo">
          <img src={Logo} alt="Logo de gym" className="logo" />
        </div>
        <div className="container-bars">
          <i onClick={toggleNav} class="ri-menu-line"></i>
        </div>
        <div className="container-login">
          <Link className='link-login' to={"/login"}><i class="ri-user-3-line"></i></Link>
        </div>
      </nav>
    </motion.header>
  )
}

export default Nav