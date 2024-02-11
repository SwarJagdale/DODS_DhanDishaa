import React,{useState,useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { mainlogo } from '../assets';
import { GoogleLogin } from '@react-oauth/google';
import Login from './Login';


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [rewardPoints, setRewardPoints] = useState(null); // Start with null until data is fetched

  // Function to fetch reward points for a specific user
  const fetchRewardPoints = async () => {
      try {
          const response = await fetch('http://127.0.0.1:5000/fetchpoints', {
              method: 'POST',
              body: JSON.stringify({ user: 'user3' }),
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }

          const data = await response.json();
          setRewardPoints(data.reward_tokens); // Update rewardPoints with fetched value
          console.log('Reward points updated successfully:', data.reward_tokens);
      } catch (error) {
          console.error('There was a problem with fetching reward points:', error);
      }
  };


  useEffect(() => {
    // Fetch reward points when the component mounts
    fetchRewardPoints();

    // Fetch reward points every 30 seconds
    const interval = setInterval(fetchRewardPoints, 30000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
}, []);




  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-32 px-4 text-black font-poppins'>
      <img className=" h-[4vh] rounded-lg mx-32" src={mainlogo} alt="" />
      {/* <h1 className={`w-full text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>BuzzR</h1> */}
      <ul className={toggle ? 'hidden md:flex uppercase' : 'hidden md:flex'}>
        <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to="/">{toggle ? 'Start' : 'Home'}</Link></li>
        <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to="/savings">{toggle ? 'Save' : 'Savings'}</Link></li>
        <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to="/portfolio">{toggle ? 'Port' : 'Portfolio'}</Link></li>
        {/* <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to='/stocks'>{toggle ? 'Net' : 'Network'}</Link></li> */}
        <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to='/dashboard'>{toggle ? 'Dash' : 'Dashboard'}</Link></li>
        <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to='/education'>{toggle ? 'Dash' : 'Education'}</Link></li>
        <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to='/leaderboard'>{toggle ? 'Dash' : 'Leaderboard'}</Link></li>
        <button onClick={toggleDarkMode} className={`mr-4 focus:outline-none ${darkMode ? 'text-white' : 'text-black'}`}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
        {/* <li className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`} ><Link to='/admin'>{toggle ? 'Admn' : 'Admin'}</Link></li> */}
        
      </ul>
      <div className='flex items-center'>
        {/* <button onClick={handleToggle} className={`mr-4 focus:outline-none ${darkMode ? 'text-white' : 'text-black'}`}>
          Toggle
        </button> */}
        {/* <button onClick={toggleDarkMode} className={`mr-4 focus:outline-none ${darkMode ? 'text-white' : 'text-black'}`}>
          {darkMode ? 'Light' : 'Dark'}
        </button> */}
        <div className="flex items-center justify-center border px-4 py-1 rounded-lg h-10 ml-32 w-32 bg-blue-500">
        <Link to="/rewards" className="flex items-center justify-center">
          <FaUser className={`mr-2  ${darkMode ? 'text-white' : ''}`} />
          <span className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{rewardPoints}</span>
        </Link>
        
        
      </div>
      <Login className=""/>
 {/* Profile icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 ml-7'>REACT.</h1>
            <ul className='uppercase p-4'>
              <li className="p-4 border-b border-gray-500">Company</li>
              <li className="p-4 border-b border-gray-500">Home</li>
              <li className="p-4 border-b border-gray-500">Resources</li>
              <li className="p-4 border-b border-gray-500">About</li>
              <li className="p-4">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
