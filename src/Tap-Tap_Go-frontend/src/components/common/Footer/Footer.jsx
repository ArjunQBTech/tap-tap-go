import React from 'react'
import './Footer.css'
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import bgImage from '../../../assets/footerImg.jpg'
import monsterIMG from '../../../assets/monster2.png'

export default function Footer() {

    const styleBg = {
        backgroundImage: `url(${bgImage})`,
    }

    const styleMonster = {
        backgroundImage: `url(${monsterIMG})`,
        // backgroundSize: 'cover',
        
    };

    return (
        <div className='footer' style={styleBg}>
            <div className='footer-overlay'>
                <div className='footer-upper-box'>
                    <div className='footer-heading'>TAP TAP GO</div>
                    {/* <div className='footer-character' style={styleMonster}></div> */}
                    <img src={monsterIMG} alt="monsterIMG" className='footer-character'/>
                    {/* <div className='footer-para'>
                        Step into the enchanting world of Tap Tap Go, where you can play games, win prizes, and have fun. Tap Tap Go is a platform that offers a variety of games that you can play and win exciting prizes. So, what are you waiting for? Join Tap Tap Go and start playing now!
                    </div> */}
                </div>
                <div className='footer-lower-box'>
                    <div className="footer-lower-box-copyright">
                        Copyright © {new Date().getFullYear()} Tap-Tap-Go
                    </div>
                    <div className='footer-lower-box-links'>
                        <a href='#'>Home</a>
                        <a href='#'>Rules</a>
                    </div>
                    <div className='footer-lower-box-socials'>
                        <a href='#' className='twitter-icon'><FaSquareXTwitter  /></a>
                        <a href='#' className='insta-icon'><FaInstagram /></a>
                        <a href='#' className='yt-icon'><FaYoutube/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
