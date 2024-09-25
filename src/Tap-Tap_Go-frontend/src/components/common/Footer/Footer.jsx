import React from 'react'
import './Footer.css'
import { FaSquareXTwitter,FaYoutube  } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <div className='footer'>
            <div className="copyright">
                Copyright @ 2024 Tap-Tap-Go
            </div>
            <div className='links'>
                <a href='#'>Home</a>
                <a href='#'>Rules</a>
            </div>
            <div className='socials'>
                <a href='#'><FaSquareXTwitter  size={24}/></a>
                <a href='#'><FaInstagram  size={24}/></a>
                <a href='#'><FaYoutube  size={24}/></a>
            </div>
        </div>
    )
}
