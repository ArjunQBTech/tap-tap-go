import React, { useState } from 'react'
import './navbar.css'
import Button from '../Button'
import ConnectWallet from '../ConnectWallet'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const nav=useNavigate()
    const [navBg,setNavBg]=useState(false)

    const changeNavBg = () =>
        {
            window.scrollY >= 70 ? setNavBg(true) : setNavBg(false);
        }
  
    window.addEventListener('scroll', changeNavBg);

  return (
    <div className={navBg?'nav-main-cont':'nav-main-cont2'}>
        <div className="nav-cont">
            <a href='#home' onClick={()=>nav('/#home')} className="nav-title">
                Cutie Hunters
            </a>
            <div className="nav-link-cont">
                <a href='#home' onClick={()=>nav('/#home')} className="nav-link">
                    Home
                </a>
                <a href='#about' onClick={()=>nav('/#about')} className="nav-link">
                    About
                </a>
                <a href='#rules' onClick={()=>nav('/#rules')} className="nav-link">
                    Rules
                </a>
            </div>
            {/* <Button size="lg" title={"Connect"}>{"Connect"}</Button> */}
            <ConnectWallet/>
        </div>
    </div>
  )
}

export default Navbar