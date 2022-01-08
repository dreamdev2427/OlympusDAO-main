import React from 'react'
import "../styles/OlyZaps.css"
import BoldButton from "../components/Buttons/BoldButton"
import DisabledButton from './Buttons/DisabledButton'
import NewButton from '../components/Buttons/BoldButton'
import Image from "../images/image3.png"

function OlyZaps() {
    return (
        <section className='olyzaps-section'>

            <div className="container">
                <h2>OlyZaps</h2>
                <p>Swap any asset into staked variations of OHM with OlyZaps to reduce complexity that saves you time while making gas fees more transparent and efficient.</p>
                <div className='options'>
                    <BoldButton text="Zap-Stake" link="#"/>
                    <DisabledButton text="Zap-Bond" link="#"/>
                </div>
            </div>
            <img src={Image} alt="Olympus DAO" className='image' />
            
        </section>
    )
}

export default OlyZaps
