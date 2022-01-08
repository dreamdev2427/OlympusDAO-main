import React from 'react'
import "../../styles/BoldButton.css"

function NewButton(props) {
    return (
        <a href={props.link}>
            <div className='bold-button'>
                {props.text}
            </div>
        </a>
    )
}

export default NewButton
