import React from 'react'
import Logo from '../images/logo.png'
import "../styles/Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                {/* <a href="#"><img src={Logo} className='logo' alt="Olympus DAO Logo" /></a> */}
                <nav>
                    <ul className="primary-nav">
                        {/* <li><a href="#">Olympus Pro</a></li> */}
                        <li><a href="#">Stake</a></li>
                        <li><a href="#">Bond</a></li>
                        <li><a href="#">FAQ's</a></li>
                        {/* <li><a href="#">Get Involved</a></li> */}
                        <li><a href="#" className="enter-app">Enter App</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
