import React from 'react'
import "../styles/HowOlympusWorks.css"
import Image from "../images/how_image_1.png"
import Image2 from "../images/how_image_2.png"
import Image3 from "../images/how_image_3.png"
import LeftArrow from "../images/arrowLeft.png"
import RightArrow from "../images/arrowRight.png"
function HowOlympusWorks() {
    return (
        <section className='how-olympus-works-section'>
            <h2>How Olympus Works</h2>
            <div className="container">
                <div className="row">
                    <div className="left-col">
                        <h5><span className='number'>1</span> Treasury Revenue </h5>
                        <h3>Bonds & LP fees</h3>
                        <p>Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control OHM supply</p>
                    </div>
                    <div className="right-col">
                        <img src={Image} alt="" className='image'/>
                    </div>
                </div>
                
                <div className="row-2">
                    <img src={LeftArrow} alt="" className='arrow'/>
                    <div className="content">
                        <div className="left-col">
                        <img src={Image2} alt="" className='image'/>
                        </div>
                        <div className="right-col">
                            <h5><span className='number'>2</span> Treasury Growth</h5>
                            <h3>Olympus Treasury</h3>
                            <p>Treasury inflow is used to increase Treasury Balance and back outstanding OHM tokens and regulate staking APY</p>
                        </div>
                    </div>
                    <img src={RightArrow} alt="" className='arrow-right' />
                </div>
                
                <div className="row">
                <div className="left-col">
                        <h5><span className='number'>3</span> Staking Rewards </h5>
                        <h3>OHM Token</h3>
                        <p>Compounds yields automatically through a treasury backed currency with intrinsic value</p>
                    </div>
                    <div className="right-col">
                        <img src={Image3} alt="" className='image'/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default HowOlympusWorks
