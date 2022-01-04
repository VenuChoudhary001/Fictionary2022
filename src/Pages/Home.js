import React from 'react'
import Question from '../Components/Question'
import Header from '../Layout/Header'

const Home = () => {
  
    return (
        <>
        <Header/>
        <section className="home">

        <div className="header">
          Your Score : 0
        </div>
        <div className="title">
          Question 1
        </div>
        </section>
          <Question/>  
        </>
    )
}

export default Home
