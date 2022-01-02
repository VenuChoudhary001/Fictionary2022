import React from 'react'
import Skull from '../Assets/Images/skull.png';
import Evil from '../Assets/Sounds/Evil.mp3'
const Modal = ({setShow}) => {
    return (
        <>
         <div className="overlay">
        </div>
          <audio autoPlay>
<source src={Evil}/>
          </audio>
        <main className="modal">

        <div className='main'>

        <div className="modal-header">
            
           <img src={Skull} alt="" />
        </div>
        <div className="modal-body">
            <div className="lable">Wrong Answer</div>
        </div>
        </div>
        </main>
           
        </>
    )
}

export default Modal
