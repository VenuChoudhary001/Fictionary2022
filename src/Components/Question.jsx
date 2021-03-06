import React,{useState} from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import Kame from '../Assets/Sounds/among.mp3'
import Modal from "./Modal";
const Question = () => {
  const [play,setPlay]=useState(false);
  const [show,setShow]=useState(false);
  const handleClick=()=>{
    setPlay(true);
    setShow(true);
  }
  const handleClose=()=>{
    setShow(false);
    setPlay(false)
  }
  return (
    <>
    {play && <audio autoPlay> <source src={Kame} type="audio/mpeg"/> </audio>}
      <section className="ques">
        <main className="question">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea
            quibusdam rerum molestiae esse odio ab eum tempore blanditiis
            eveniet nostrum voluptate officia, ratione laudantium consequatur,
            temporibus eligendi aperiam deleniti, assumenda hic non dicta? Rerum
            odit iure consequatur, dolor facilis distinctio vitae, suscipit a
            dolorum quisquam ullam in ratione. Unde! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Sapiente nemo blanditiis
            necessitatibus adipisci. Fugit nostrum magnam architecto eos quos
            consequuntur.
          </p>
          <div className="hint">
            <div className="icon">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.875 7.96875H13.4141V3.15625C13.4141 1.6373 12.183 0.40625 10.6641 0.40625H5.33594C3.81699 0.40625 2.58594 1.6373 2.58594 3.15625V7.96875H1.125C0.744727 7.96875 0.4375 8.27598 0.4375 8.65625V16.9062C0.4375 17.2865 0.744727 17.5938 1.125 17.5938H14.875C15.2553 17.5938 15.5625 17.2865 15.5625 16.9062V8.65625C15.5625 8.27598 15.2553 7.96875 14.875 7.96875ZM8.60156 13.0605V14.1992C8.60156 14.2937 8.52422 14.3711 8.42969 14.3711H7.57031C7.47578 14.3711 7.39844 14.2937 7.39844 14.1992V13.0605C7.22109 12.9332 7.08872 12.7529 7.02038 12.5456C6.95203 12.3382 6.95124 12.1145 7.01812 11.9067C7.085 11.6989 7.2161 11.5176 7.39254 11.3891C7.56899 11.2605 7.78168 11.1912 8 11.1912C8.21832 11.1912 8.43101 11.2605 8.60746 11.3891C8.7839 11.5176 8.915 11.6989 8.98188 11.9067C9.04876 12.1145 9.04797 12.3382 8.97962 12.5456C8.91128 12.7529 8.77891 12.9332 8.60156 13.0605ZM11.8672 7.96875H4.13281V3.15625C4.13281 2.49238 4.67207 1.95312 5.33594 1.95312H10.6641C11.3279 1.95312 11.8672 2.49238 11.8672 3.15625V7.96875Z"
                  fill="#FFF50F"
                />
              </svg>
            </div>
            <div className="text">HINT</div>
          </div>
          <TextBox placeholder="Type your answer" />

          <Button lable="SUBMIT" type="glitch" action={handleClick} />
        </main>
      </section>
      {show && <Modal setShow={handleClose}/>}
    </>
  );
};

export default Question;
