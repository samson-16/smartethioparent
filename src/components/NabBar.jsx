import React from 'react'

 const NavBar = () => {
  return (
    // <div className='w-full h-14 bg-sky-700 mb-3'>
    //   <div>
    //     <ul className=' h-full flex items-center'>
    //       <li>Home</li>
    //       <li>Announcement</li>
    //       <li>Task</li>
    //       <li>Test Result</li>
    //       <li>Resource</li>
    //     </ul>
    //   </div>
    // </div>
      <nav className='w-full bg-[#F0F7FF] mb-3'>
        
      <ul className='h-full flex justify-center items-center'>
        <li className='px-4 py-2 text-white hover:bg-sky-600'>Home</li>
        <li className='px-4 py-2 text-white hover:bg-sky-600'>Announcement</li>
        <li className='px-4 py-2 text-white hover:bg-sky-600'>Task </li>
        <li className='px-4 py-2 text-white hover:bg-sky-600'>Test Result</li>
        <li className='px-4 py-2 text-white hover:bg-sky-600'>Resource</li>
      </ul>
    </nav>
  )
}


export default NavBar;

