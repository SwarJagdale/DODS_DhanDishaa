import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  const handleClick = () => {

    // scroll down the screen by 50px;
    window.scrollBy(0, 500);
  }
  return (
   
    
    <>
      <section className='hero '>
        <div className="home__bgLayer">
        <div className='container'>
          <div className='row'>
            <Heading subtitle='' title='Learn Finance' />
            <p className=" text-white">Welcome to our personal finance learning hub! We believe that financial education is crucial for empowering individuals to make informed decisions about their money. </p>
            <div className='button'>
              <button className='primary-btn' onClick={handleClick}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
             
            </div>
          </div>
        </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
