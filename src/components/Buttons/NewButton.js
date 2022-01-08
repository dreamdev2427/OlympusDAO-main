import React from 'react'
import "../../styles/Button.css"

function NewButton(props) {
    return (
        <div className='button' style={props.style}>
            {props.text}
        </div>
    )
}

export default NewButton
