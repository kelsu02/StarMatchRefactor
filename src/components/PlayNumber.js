import React from 'react'
import colors from './colors'

export default function PlayNumber(props) {
    return (
        <button
            className="number"
            style={{ 
                backgroundColor: colors[props.status], 
                color: props.status === "available" ? "black" : "white"
            }}
            onClick = {() => props.onClick(props.number, props.status)}
        >
            {props.number}
            
        </button>
    )
}
