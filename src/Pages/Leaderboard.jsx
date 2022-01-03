import React from 'react'
import List from '../Components/List'

const Leaderboard = () => {
    return (
      <>
        <section className="leader-board">
          <div className="title">Your Rank : 69</div>
          <div className="main">
            <List rank={1} name="Samantha" score={0} />
            <List rank={2} name="Samantha" score={0} />
            <List rank={3} name="Samantha" score={0} />
            <List rank={4} name="Samantha" score={0} />
            <List rank={5} name="Samantha" score={0} />
            <List rank={6} name="Samantha" score={0} />
            <List rank={7} name="Samantha" score={0} />
            <List rank={8} name="Samantha" score={0} />
          </div>
        </section>
      </>
    );
}

export default Leaderboard
