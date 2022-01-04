import React from 'react'
import List from '../Components/List'

const Leaderboard = () => {
    return (
      <>
        <section className="leader-board">
          <div className="title">LEADERBOARD</div>
          <div className="heading">Your Rank : 156</div>
          <div className="main">
            <List rank={1} name="Samantha" score={360} />
            <List rank={2} name="Samantha" score={360} />
            <List rank={3} name="Samantha" score={360} />
            <List rank={4} name="Samantha" score={360} />
            <List rank={6} name="Samantha" score={360} />
            <List rank={7} name="Samantha" score={360} />
            <List rank={8} name="Samantha" score={360} />
            <List rank={9} name="Samantha" score={360} />
            <List rank={10} name="Samantha" score={360} />
            <List rank={11} name="Samantha" score={360} />
            <List rank={12} name="Samantha" score={360} />
            <List rank={13} name="Samantha" score={360} />
            <List rank={14} name="Samantha" score={360} />
            <List rank={15} name="Samantha" score={360} />
          </div>
        </section>
      </>
    );
}

export default Leaderboard
