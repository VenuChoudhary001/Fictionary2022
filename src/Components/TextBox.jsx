import React from 'react'

const TextBox = ({placeholder}) => {
    return (
        <div className='text-box'>
            <input type="text" placeholder={placeholder} onChange={(e)=>console.log(e.target.value)}/>
        </div>
    )
}

export default TextBox
