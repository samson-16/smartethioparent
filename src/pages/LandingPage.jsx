import React from 'react'
import Button from '@mui/material/Button';
import landingphoto from '../assets/parent-stud.jpg'
import { FaPlayCircle } from "react-icons/fa";

import NavBar from '../components/NabBar'
 const LandingPage = () => {
  return (
   <>
   {/* <NavBar/> */}
   <nav className='bg-blue-300  w-[99%] ml-1 rounded-md'>
     <ul className='flex justify-between mx-3 mb-3 items-center h-10'>
      <li>Logo</li>
        <button className='rounded-xl bg-sky-600 w-28 h-8 text-center text-white bold'>Join now</button>
     </ul>
   </nav>
   <header className='h-[600px] bg-[#F0F7FF] w-[98%] flex justify-center ml-[10px] rounded-2xl'>
      <div className='flex  '>
        <div className="flex flex-col justify-center ml-8">
          <h1 className="text-4xl font-bold mb-2">BETTER FUTURE FOR YOUR CHILDREN</h1>
          <p className="text-gray-600 mb-4">Stay Connected with Your Child's Education</p>
          <div className="flex items-center">
            <Button variant="contained" color="primary">Join now</Button>
            <span className="text-gray-500 ml-2 flex "> < span className='mr-3'><FaPlayCircle size={24} /> </span> Watch our welcome video</span>
          </div>
        </div>
        <div className=' overflow-hidden ml-4 mr-5 h-full flex items-center border-none '>
          <img src={landingphoto} alt="landing photo" className='mx-auto rounded-3xl ' />
        </div>
      </div>
    </header>

    <section className='mt-7'>
      <div className=' flex justify-evenly mx-5'>
      <div>
            <img src={landingphoto} alt="" className='w-[1000px] rounded-2xl'/>
        </div>
        <div className='mx-6 font-bold'>
            <h2>Your child's digital guardian</h2>
            <p>Our illustration depicts the heartwarming scene of parents and children engaged in educational activities together, 
              symbolizing the strong bond fostered through shared learning experiences.</p>
        </div>
      </div>
    </section>

    <section className='mt-7'>
      <div className='flex justify-around'>
      <div className='mx-6 h-full justify-center items-center text-center font-bold'>
            <h2>Your child's digital guardian</h2>
            <p>parents are empowered to take an active role in their child's education,
               moving beyond traditional roles to become influential contributors to their academic development.</p>
        </div>
        <div>
            <img src={landingphoto} alt="" />
        </div>
      </div>
    </section>
  
    <section className='mt-7 '>
        <div className='h-[500px] bg-blue-300'>
          <h1>Key features</h1>
        </div>
    </section>

    <section>
      <div className='h-[500px] bg-sky-600'>
        <h1>Testimonies</h1>
      </div>
    </section>

    <footer>
        <div className='h-[300px] bg-blue-300'>Footer</div>
    </footer>
   
   </>
  )
}

export default LandingPage;
