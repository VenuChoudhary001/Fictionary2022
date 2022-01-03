import React from 'react'

const Loading = () => {
    return (
      <>
        {/* <div className="loading">
          <svg viewBox="0 0 100 100">
            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="1.5"
                  floodColor="#805AB1"
                />
              </filter>
            </defs>
            <circle
              id="spinner"
              style={{
                fill: "transparent",
                stroke: "#60CFFF",
                strokeWidth: "3px",
                strokeLinecap: "round",
                filter: "url(#shadow)",
              }}
              cx="50"
              cy="50"
              r="45"
            />
          </svg>
        </div> */}
        <div className="loading">

        <div className="clock-loader"></div>
        </div>
      </>
    );
}

export default Loading
