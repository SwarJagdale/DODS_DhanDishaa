import React, { useEffect, useState } from 'react';
import './leaderboard.css';
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1707625305118.json"
function Leaderboard() {
  const [users, setUsers] = useState([]);
const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetchall', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUsers(data);
        console.log('Data fetched successfully:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="leaderboard-container grid grid-cols-2">
      
        <div className='flex flex-col items-center justify-center mx-20 my-10'>
      <table className="leaderboard-table mx-10 rounded-lg ">
        <thead>
          <tr>
            <th className=''>Username</th>
            <th className=''>Dhanrashi Leaderboard</th>
          </tr>
        </thead>
        <tbody className=' px-10'>
          {users.map(user => (
            <tr  className=' px-20' key={user.username}>
              <td>{user.username}</td>
              <td align="center">{user.reward_tokens}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=' flex flex-row gap-20 mx-10 my-10' >
      <button onClick={fetchData} className=' bg-blue-gradient text-white font-semibold px-4 rounded-lg py-2 font-poppins text-xl'>Refresh</button>
      </div>
      </div>

      <div>
      <Lottie className=" h-[70vh] mx-10" animationData={animation} />
      </div>
    </div>
  );
}

export default Leaderboard;
