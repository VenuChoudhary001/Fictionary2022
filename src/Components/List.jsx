import React from 'react'

const List = ({rank,name,score}) => {
    return (
        <>
          <main className="list">
              <div className="rank">{rank}</div>
              <div className="avatar">
                  <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="lable">
                 {name}
              </div>
              <div className="score">{score}</div>
          </main>  
        </>
    )
}

export default List
