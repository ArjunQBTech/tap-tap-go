import React, { useState } from 'react'
import './navbar.css'
import Button from '../Button'

const Navbar = () => {

    const [navBg,setNavBg]=useState(false)

    const changeNavBg = () =>
        {
            window.scrollY >= 70 ? setNavBg(true) : setNavBg(false);
        }
  
    window.addEventListener('scroll', changeNavBg);

  return (
    <div className={navBg?'nav-main-cont':'nav-main-cont2'}>
        <div className="nav-cont">
            <h1 className="nav-title">
                Cutie Hunters
            </h1>
            <div className="nav-link-cont">
                <a className="nav-link">
                    Home
                </a>
                <a className="nav-link">
                    About
                </a>
                <a className="nav-link">
                    Rules
                </a>
            </div>
            <Button size="lg" title={"Connect"}>{"Connect"}</Button>
        </div>
    </div>
  )
}

export default Navbar