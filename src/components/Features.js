import React from 'react'
import "../styles/Features.css"
function Features() {
    return (
        <section className='features-section'>
            <div className="container">
                <ul className="features-list">
                    <li>
                        <p>Treasury Balance</p>
                        <h1>$553,693,969</h1>
                    </li>
                    <li>
                        <p>Total Value Locked</p>
                        <h1>$2,087,327,967</h1>
                    </li>
                    <li>
                        <p>Current APY</p>
                        <h1>4,371%</h1>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Features
