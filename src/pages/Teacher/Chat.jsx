import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../components/AuthContext";
import FadeLoader from 'react-spinners/FadeLoader'
import Message from "../../components/Message";
import { AccountCircle } from '@mui/icons-material';
import api from "../../api";
import PropTypes from 'prop-types';

function Chat({ parentid }) {
   const [loading, setLoading] = useState(true);
   const { user } = useContext(AuthContext);
   const [messages , setMessages] = useState(null)
   
   useEffect(() => {
       const fetchMessages = async () => {
           try {
            const response = await api.get(`/messages/?sender_id=${user.user_id}&receiver_id=${parentid}`);
               console.log(response.data);
               console.log(user)
               setMessages(response.data);
               setLoading(false);
           } catch (error) {
               console.error('Error fetching messages:', error);
               setLoading(false);
           }
       };

       if (user !== null ) {
           fetchMessages();
       }
   }, [user, parentid]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50">
        <FadeLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="chat-container flex flex-col space-y-4 p-4 bg-gray-100 h-[90%] overflow-y-auto w-[70%] mx-auto ">
      {messages.map((message) => {
        const isUserSender = message.sender.user_id === user.user_id;
        return (
          <div
            key={message.id}
            className='bg-slate-300 p-2'
          >
          
                <div className={` w-full flex justify-${isUserSender ? 'end' : 'start'}`}>
                <div className={`max-w-[75%] w-1/2 `}>
              <Message message={message} />
            </div>
                </div>
          </div>
          
        );
      })}
    </div>
  );
}

Chat.propTypes = {
    parentid: PropTypes.any.isRequired,
  };
export default Chat;
