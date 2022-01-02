import React from 'react'

const Button = ({lable,type,action}) => {
    return (
        <div className='btn'>
            <button onClick={action} className={type}>{lable}</button>
        </div>
    )
}

export default Button
