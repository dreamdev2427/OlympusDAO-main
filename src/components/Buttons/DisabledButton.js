import React from 'react'
import "../../styles/DisabledButton.css"

function DisabledButton(props) {
    return (
        <a href={props.link}>
            <div className='disabled-button'>
                {props.text} <span>Coming Soon</span>
            </div>
        </a>
    )
}

export default DisabledButton
