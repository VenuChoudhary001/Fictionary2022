import React from 'react'

const Button = ({lable,type,action}) => {
    return (
        <div className='btn'>
            <div className="side-overlay"></div>
            <button onClick={action} className={type}>{lable}</button>
        </div>
    )
}

export default Button
