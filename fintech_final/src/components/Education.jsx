import React from 'react'
import { Link } from 'react-router-dom'
const Education = () => {
  return (
    <div>
        <div className=' flex justify-center font-bold font-poppins text-2xl my-2 text-blue-600 py-2'>Take our quiz now to assess yourself and evaluvate your financial understanding :
        <div>
        <button className='bg-blue-900 hover:bg-black px-4 text-white rounded-lg text-lg font-poppins font-medium mx-2'><Link to="/quiz">Reward yourself!</Link></button>
        </div>
        </div>
        <hr />
      <div className=' text-white'>
    {/* hello
    <a className='text-white px-32' href="https://diet-recommendation-system.streamlit.app/Diet_Recommendation" target='_blank'>Model</a> */}
    <iframe className='h-screen w-screen' src="http://localhost:3001/" frameborder="0"></iframe>
  </div>
   <div></div>
    </div>
  )
}

export default Education
