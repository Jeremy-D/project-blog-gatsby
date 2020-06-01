import React from 'react'

const ColorBar = props => {
    let barStyle = {
        backgroundColor: props.backgroundColor,
        height:'1rem',
        margin: '.25rem'
    }
    
    return (
        <div      
         style={barStyle}>
             {/* text placeholder */}
        </div>
    )
}

export default ColorBar