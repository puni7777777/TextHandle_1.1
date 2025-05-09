"use client"

import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginResponsive() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        alert('Login submitted with email: ' + email);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-4">
            <div className="w-full max-w-md bg-black shadow-md shadow-[#9F51F6] rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <div className="flex justify-center gap-4 mb-6">
                    {/* Social login icons */}
                    <a href="#" role="button" className="h-9">
                        <div className="rounded-full p-3 text-xs shadow-sm transition-all ease-in-out fill-white shadow-white hover:fill-blue-500 hover:shadow-blue-500 hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4 w-4">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7
                                20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2
                                0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </div>
                    </a>
                    <a href="#" role="button" className="h-9">
                        <div className="rounded-full p-3 shadow-sm transition-all ease-in-out fill-white shadow-white hover:fill-yellow-500 hover:shadow-yellow-500 hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-4 w-4">
                                <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448
                                204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9
                                128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9
                                54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7
                                109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
                            </svg>
                        </div>
                    </a>
                    <a href="#" role="button" className="h-9">
                        <div className="rounded-full p-3 shadow-sm transition-all ease-in-out fill-white shadow-white hover:fill-blue-800 hover:shadow-blue-900 hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4">
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8
                                53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3
                                0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3
                                61.9 111.3 142.3V448z" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="text-sm text-white mb-4 text-center"><h5>or use your account</h5></div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6] w-full"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6] w-full"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <a href="#" className="hover:underline text-center">
                        Forgot your password?
                    </a>
                    <div className="flex justify-center text-white font-bold">
                        <button type="submit" className="w-32 bg-[#9F51F6] rounded-full p-2 hover:bg-[#ad6ef5]">
                            SIGNIN
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/signupresponsive" className="text-[#9F51F6] hover:underline font-semibold">
                        new user? signup
                    </Link>
                </div>
            </div>
        </div>
    );
}
