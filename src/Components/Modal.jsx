import React from "react";
const Modal = ({setShow}) => {
  return (
    <>
      <main className="modal--">
        <div className="close">
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={setShow}
          >
            <path
              d="M23 23.4375L1.125 1.5625M1.125 23.4375L23 1.5625L1.125 23.4375Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="main">
          <div className="modal--title">RULES</div>
          <div className="modal--body">
            <ul>
              <div className="list-item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                sunt.{" "}
              </div>
              <div className="list-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt laborum explicabo dolore culpa placeat nam deserunt in?
                Delectus, neque autem.
              </div>
              <div className="list-item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ipsa sed iusto quisquam obcaecati pariatur?
              </div>
              <div className="list-item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ipsa sed iusto quisquam obcaecati pariatur?
              </div>
              <div className="list-item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ipsa sed iusto quisquam obcaecati pariatur?
              </div>
              <div className="list-item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ipsa sed iusto quisquam obcaecati pariatur?
              </div>{" "}
            </ul>
          </div>
        </div>
      </main>
      <div className="overlay"></div>
    </>
  );
};

export default Modal;
