import React from 'react'
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../components/AuthContext";
import FadeLoader from 'react-spinners/FadeLoader'
import Message from '../../components/Message';
import ResponsiveAppBar from '../../components/NabBar';
import Footer from '../../components/Footer/Footer';
import { AccountCircle } from '@mui/icons-material';


function  AllMessages () {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
   console.log(user)
  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <>

      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50">
      <FadeLoader color="#36d7b7" />;
    </div>
      </>
    )
  }

  const Messages = user.recentMessages;

  console.log(Messages)




  return (
    <>
      <ResponsiveAppBar />
       <div className='  mt-6 bg-blue-50 sm:w-[90%] md:w-[60%] lg:w-[50%] mx-auto border-solid border-gray-500'>
      <h1 className='text-center text-3xl font-bold mb-5 bg-slate-500 py-5' >  <AccountCircle  fontSize='large'/>  {user.user.first_name} {user.user.last_name}</h1>
        <div className=''>
          {Messages && Messages.length > 0 ? (
            Messages.map((message, index) => (
              <Message key={index} message={message} />
            ))
          ) : (
            <p className="text-gray-500">No messages</p>
          )}
        </div>
       </div>
        <Footer />
    </>
  )
}

export default AllMessages
