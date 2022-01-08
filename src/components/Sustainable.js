import React from 'react'
import "../styles/Sustainable.css"
import BoldButton from "../components/Buttons/BoldButton"

function Sustainable() {
    return (
        <section className='sustainable-section'>
            <div className="container">
                <h2>Sustainable Staking APY</h2>
                <div className="row">
                    <div className="left-column">
                        <h3>5,188%</h3>
                        <p>OHM Staking APY</p>
                        <BoldButton text="Stake now"/>
                    </div>
                    <div className='divider'></div>
                    <div className="right-column">
                        <h4>Treasury Regulated APY</h4>
                        <p className='blurry'>Treasury inflow will always outperform staking rewards</p>
                        <p>Olympus is designed with long-term protocol health in mind. All OHM minted for staking rewards are backed with a reserve from the Treasury.</p>
                    </div>
                </div>

                <div className="row-middle">
                    <p>Olympus rewards stakers with compounding interest, increasing their OHM holdings over time.</p>
                </div>

                <div className="row-end">
                    <h4>Investment Protection</h4>
                    <p className='blurry'>The fewer OHM staked, the higher APY</p>
                    <p>OHM is minted and evenly distributed for staking rewards. More OHM staked reduces the APY but pushes the OHM price higher, creating a balance that protects your investment.</p>
                </div>
            </div>
            
        </section>
    )
}

export default Sustainable
