import React, { useState } from 'react';
import api from "../api"
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN , REFRESH_TOKEN } from '../constants';
import  axios from 'axios';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    function getUserDataFromToken(accessToken) {
        const tokenParts = accessToken.split('.');
        const encodedPayload = tokenParts[1];
        const decodedPayload = JSON.parse(atob(encodedPayload));
        return decodedPayload;
    }
    

    const validateForm = () => {
        if (!email || !password) {
            setError('Please enter both email and password');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true); 

        try {
            const res = await api.post("/api/token/" , { email , password });
            console.log("Successful")

            localStorage.setItem(ACCESS_TOKEN , res.data.access);
            localStorage.setItem(REFRESH_TOKEN , res.data.refresh);
            
            const accessToken = localStorage.getItem(ACCESS_TOKEN);
            const userData = getUserDataFromToken(accessToken);
            console.log(userData)
            const id = userData.user_id;


  const response = await api.get(`api/user/?id=${id}`);
  console.log(response.data); 
  const user = response.data[0]

            
            switch (user.role) {
                case 'parent':
                    navigate("/parent");
                    break;
                case 'teacher':
                    navigate("/teacher");
                    break;
                case 'admin':
                    navigate("/admin");
                    break;
                default:
                    navigate("/");
                    break;
            }
        } catch(error){
            setError('Incorrect Username or Password');
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <section className='flex justify-center items-center mt-28'>
            <div className='bg-blue-600 w-[400px] h-64 flex flex-col justify-center items-center rounded-lg'>
                <h2 className="text-white text-2xl mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    <div className='mb-3'>
                        <input id="email" type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
                    </div>
                    <div className="mb-3">
                        <input id="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="bg-white text-blue-400 py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white transition duration-300 w-40 flex justify-center font-bold">Login</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </section>
    );
}

export default Login;
