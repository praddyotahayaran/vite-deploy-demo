import React from 'react'
import './NavBar.css'
import { AiFillHome } from 'react-icons/ai'
import { MdMiscellaneousServices } from 'react-icons/md'
import { GoGraph } from 'react-icons/go'
import { FcFeedback, FcAbout } from 'react-icons/fc'


const NavBar = () => {
    return (
        <div className='navBar'>
            <nav className="mainNav">
                    <h1>NEW WEB  </h1>
                <ul>
                    <li><AiFillHome />  Home</li>
                    <li><MdMiscellaneousServices />  Services</li>
                    <li><FcFeedback />  FeedBack</li>
                    <li><GoGraph />  Testimonials</li>
                </ul>
            </nav>

            
        </div>
    )
}

export default NavBar