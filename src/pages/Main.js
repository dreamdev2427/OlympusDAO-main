import React from 'react'
import Image from "../images/image500.png"
import NewButton from '../components/Buttons/NewButton'
import "../styles/Main.css"

function Main() {
    return (
        <section className="hero">
            <div className="container">
                <div className="left-col">
                    <a href='#' className="white-bar">
                        <p><NewButton text="NEW"/> Zap into Staked OHM with any asset</p>
                    </a>
                    <h1>
                        The Decentralized Reserve Currency
                    </h1>
                    <p className="subhead">
                        Olympus is building a community-owned decentralized financial infrastructure to bring more stability and transparency for the world.
                    </p>
                </div>
                {/* <img src={Image} alt="Olympus DAO" className='hero-img' /> */}
            </div>
        </section>
    )
}

export default Main
