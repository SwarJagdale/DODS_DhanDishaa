
import React from "react"
import "../blog/blog.css"
import { useState } from "react"

import Heading from "../common/heading/Heading"
const youtubePlaylistURL = [
  { links: "https://www.youtube.com/embed/videoseries?list=PL9ECA8AEB409B3E4F", domain: "Investing|Mutual Funds", title:'Finance & Capital Market' },
  { links: "https://www.youtube.com/embed/videoseries?list=PLFQ0hRWyH11RS4KUPadj6aoC2KtEHVIfN", domain: "Investing ",title:'Share Market' },
  { links: "https://www.youtube.com/embed/videoseries?list=PLX2SHiKfualGsjgd7fKFC-JXRF6vO73hk", domain: "Savings | Mutual Funds",title:'Personal finance' },
  { links: "https://www.youtube.com/embed/videoseries?list=PLrb5sBMyf4C7ISVI86X4djAZi-fFx_0XT", domain: "Investing ",title:' What is Stock Market  ' },
  { links: "https://www.youtube.com/embed/videoseries?list=PLFQ0hRWyH11QATZnqvbmly-6oJ_kYC1fr", domain: "Mutual Funds",title:'What is Mutual funds   '},
    { links: "https://www.youtube.com/embed/videoseries?list=PLeqr2N5URjYhtEw8fHmxMd6sgbQzE3kuo", domain: "Savings",title: '5 Money Goals    '},
 
]; // Replace YOUR_PLAYLIST_ID with your actual playlist ID

// // copy code of blog => blogCard

const HAbout = () => {
  const [selectedDomain, setSelectedDomain] = useState('Investing');
  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='Learn from Blogs' title='Financial Modules' />
          
          <div className='grid3items'>
            <select className="domainselectv" onChange={handleDomainChange}>
              <option value="Investing">Investing</option>
              <option value="Savings">Savings</option>
              <option value="Mutual Funds">Mutual Funds</option>
            </select>
            {youtubePlaylistURL.filter((url) => url.domain.includes(selectedDomain)).map((val) => (
              <div className='videos2'>
                <div className='iframe'>
                  <iframe width="800px" height="500px" src={val.links} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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


export default HAbout
