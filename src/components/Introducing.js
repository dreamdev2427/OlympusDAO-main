import React from 'react'
import "../styles/Introducing.css"
import Image from "../images/image2.png"
import BoldButton from './Buttons/BoldButton'

function Introducing() {
    return (
        <section className='introducing-section'>
            <div className="container">
                <h2>Introducing Olympus Pro</h2>
                <p>We’re bringing Protocol Owned Liquidity to a DAO near you. Learn about Olympus Pro, our Bonds-as-a-Service protocol.</p>
                <BoldButton text="View Olympus Pro" link="#"/>
            </div>
            <img src={Image} alt="Olympus DAO" className='image' />
            
        </section>
    )
}

export default Introducing
