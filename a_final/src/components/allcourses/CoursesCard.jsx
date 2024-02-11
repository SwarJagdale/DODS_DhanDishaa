import React from "react"
import "./courses.css"


const CoursesCard = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='Learn from Blogs' title='Financial Modules' />
          
          <div className='grid2'>
            {blog.map((val) => (
              <div className='items'>
                <div className='img'>
                  <img src={val.cover}  alt='image' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                  <button classname="OpenLink" onClick={() => window.open(val.link)}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default CoursesCard
