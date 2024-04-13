import { useState } from 'react';
import api from "../api"
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN , REFRESH_TOKEN } from '../constants'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    
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
    
    const handleSubmit = async (e) => {
        setLoading(true); 
        e.preventDefault();

        try {
            const res = await api.post("api/token/" , { email , password })

            localStorage.setItem(ACCESS_TOKEN , res.data.access);
            localStorage.setItem(REFRESH_TOKEN , res.data.refresh);
            
            const accessToken = localStorage.getItem(ACCESS_TOKEN);
            const userData = getUserDataFromToken(accessToken);
            console.log(userData);
            console.log(userData.user_id);
            const id = userData.user_id
            const user = await api.get(`api/user/?id=${id}`)
            const role = user.data[0].role;
            
            switch (role) {
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
            alert(error)
        }
        finally {
            setLoading(false)
        }
        
    };

    return (
<section className='flex mt-20 justify-between flex-wrap'>
            <div className='flex flex-col rounded-lg ml-24 w-80 h-64'>
                <h2 className="text-black text-2xl font-bold mb-9 pl-0">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    <div className='mb-4'>
                    <label htmlFor="email" className="block font-semibold">Email Address</label>
                    <input id="email" type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 mt-4 w-80" />
                </div>
               <div className="mb-3 flex justify-between items-center">
                <label htmlFor="password" className="block font-semibold">Password</label>
                <a href="#" className="text-blue-500 hover:text-blue-700 underline text-sm">Forgot Password?</a>
            </div>
            <div>
                <input id="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 mt-1 w-80 mb-8" />
            </div>
                    <div className='flex'>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-80 flex justify-center font-bold">LOGIN</button>
                    </div>
                </form>
            </div>
            <img src="/src/assets/kidStudying.png" alt="Kid studying with parent" className="w-[530px] h-[420px] mr-28"/>
        </section>
    );
}

export default Login;
