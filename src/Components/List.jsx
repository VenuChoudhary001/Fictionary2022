import React from 'react'

const List = ({rank,name,score}) => {
    return (
      <>
        <div className="list-group">
          <div
            className={`rank ${rank === 1 && "rank-1"}  ${
              rank === 2 && "rank-2"
            } ${rank === 3 && "rank-3"}`}
          >
            {rank}
          </div>
          <main className="list">
            <div className="avatar">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="lable">
              <div className="name">{name}</div>
              <div className="progress">
                <div className="bar"></div>
              </div>
            </div>
            <div className="score">{score}</div>
          </main>
        </div>
      </>
    );
}

export default List
