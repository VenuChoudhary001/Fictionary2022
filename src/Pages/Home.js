import React from 'react'
import Question from '../Components/Question'

const Home = () => {
  
    return (
        <>
        <section className="home">

        <div className="header">
          Your Score : 0
        </div>
        <div className="title">
          Question 1
        </div>
        </section>
          <Question/>  
          {/* <Modal/> */}
        </>
    )
}

export default Home
