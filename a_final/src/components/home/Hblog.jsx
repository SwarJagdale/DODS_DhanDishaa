import React from "react"
import "../blog/blog.css"
import { useState } from "react"

import Heading from "../common/heading/Heading"
const blog = [
  { id: 1, title: 'The Two Most Important Factors To Successful Investing', desc: 'A long horizon and consistency are keys to healthy investment returns', domain: 'Investing',link:'https://medium.com/alpha-beta-blog/the-two-most-important-factors-to-successful-investing-a2df42dd5697',date:'Dec 29, 2023',cover:'https://miro.medium.com/v2/resize:fit:720/format:webp/0*XpiSG7a3c82AYC9r '},
  { id: 2, title: 'Investing for Beginners; The Essential Guide', desc: 'Were always told to invest — but were rarely shown how. This guide will take you through.', domain: 'Investing',link:'https://medium.com/the-post-grad-survival-guide/investing-for-beginners-the-essential-guide-930bb8cc14a6',date:'Jun 24, 2020',cover:'https://miro.medium.com/v2/resize:fit:720/format:webp/0*wO4FfkQJ_bE7sJnv' },
  { id: 3, title: 'The Only How to Save Money Guide Youll Ever Need', desc: 'The Guide to Saving Money and Becoming Financially Independent', domain: 'Savings',link:'https://medium.com/fortune-for-future/the-only-how-to-save-money-guide-youll-ever-need-e291c2a82e06',date:'Mar 3, 2021',cover:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KPYUT9qfgCTJbrJmDoOkvw.jpeg' },
  { id: 4, title: '10 Small Ways To Save Money That Allow You To Build Real Long-Term Wealth', desc: 'Then take the half youve saved,', domain: 'Savings' ,link:'https://medium.com/the-post-grad-survival-guide/10-small-ways-to-save-money-that-allow-you-to-build-real-long-term-wealth-d6645193df72',date:'Jun 24, 2020',cover:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Q1qknmW9UzGjb1P3IfZKzA.jpeg' },
  { id: 5, title: 'Indian Mutual Funds: Frothy Frenzy or Future Fizz?', desc: 'Decoding the Red Flags Beneath Record Inflows', domain: 'Mutual Funds',link:'https://medium.com/@girivasishta07/indian-mutual-funds-frothy-frenzy-or-future-fizz-decoding-the-red-flags-beneath-record-inflows-cc8895ca61dc',date:'2 days ago',cover:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*kBqaDvDAt-Yj5xEiu3Y5Uw@2x.jpeg' },
  {id: 6, title: 'Mutual Funds: The Best Investment Option for Beginners', desc: 'Mutual funds are a great investment option for beginners.', domain: 'Mutual Funds' ,link:'https:xxxxxxxx.xxxx@xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',cover:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*yh6dhafrA-amyCyfCZykZw.png'},
];

// copy code of blog => blogCard

const Hblog = () => {
  const [selectedDomain, setSelectedDomain] = useState('Investing');
  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='Learn from Blogs' title='Financial Modules' />
          
          <div className='grid2'>
            <select className="domainselect" onChange={handleDomainChange}>
              <option value="Investing">Investing</option>
              <option value="Savings">Savings</option>
              <option value="Mutual Funds">Mutual Funds</option>
            </select>
            {blog.filter((url) => url.domain.includes(selectedDomain)).map((val) => (
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

export default Hblog
