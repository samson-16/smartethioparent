import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <section className='flex justify-center items-center mt-28'>
            <div className='bg-blue-600 w-[400px] h-64 flex flex-col justify-center items-center rounded-lg'>
            <h2 className="text-white text-2xl mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <div className='mb-3'>
                    {/* <label htmlFor="email" className="text-white">Email:</label> */}
                    <input id="email" type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="password" className="text-white">Password:</label> */}
                    <input id="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
                </div>
                <div className='flex justify-center'>
                <button type="submit" className="bg-white text-blue-400 py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white transition duration-300 w-40 flex justify-center font-bold">Login</button>
                </div>
            </form>
        </div>
        </section>
    );
}

export default Login;
