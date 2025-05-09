"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
import Signup from "./Signup"
import { useState } from "react";

export default function Login() {

    const [style, setStyle] = useState('right-0 rounded-e-lg')
    const [head, setHead] = useState('Hello, Friend!')
    const [body, setBody] = useState('Enter your personal details and start journey with us')
    const [btn, setBtn] = useState('SIGNUP')
    const [anim, setAnim] = useState('')

    console.log(anim)
    console.log(style)
    const moveSlider = () => {
        if (style === 'right-0 rounded-e-lg') {
            setStyle('left-0 rounded-s-lg')
            setHead('Welcome Back!')
            setBody('To keep connected with us plase login with your personal info')
            setBtn('SIGNIN')
            setAnim('animate-slideLeft')
        } else {
            setStyle('right-0 rounded-e-lg')
            setHead('Hello, Friend!')
            setBody('Enter your personal details and start journey with us')
            setBtn('SIGNUP')
            setAnim('animate-slideRight')
        }
    }

    return (
        <>
            <div className="flex justify-center items-center pb-60 h-screen text-white bg-black">
                <div className="flex flex-row gap-6 w-1/2 bg-black shadow-md shadow-[#9F51F6] rounded-lg justify-center items-center relative">
                    <div className="py-8 flex flex-col gap-4 w-2/4 h-full items-center rounded-lg">
                        <h2 className="text-lg font-bold">Sign In</h2>
                        <div className="flex gap-4">
                            <a href="#" role="button" className="h-9">
                                <div className="rounded-full mb-2 inline-block p-3 text-xs shadow-sm transition-all ease-in-out fill-white shadow-white hover:fill-blue-500 hover:shadow-blue-500 hover:cursor-pointer">
                                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7
            20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2
            0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                                    </span>
                                </div>
                            </a>
                            <a href="#" role="button" className="h-9">
                                <div className="rounded-full mb-2 inline-block p-3 shadow-sm  transition-all ease-in-out fill-white shadow-white hover:fill-yellow-500 hover:shadow-yellow-500 hover:cursor-pointer hover:outline-dotte">
                                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448
          204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9
          128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9
          54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7
          109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            <a href="#" role="button" className="h-9">
                                <div className="rounded-full mb-2 inline-block p-3 shadow-sm transition-all ease-in-out fill-white shadow-white hover:fill-blue-800 hover:shadow-blue-900 hover:cursor-pointer hover:outline-dotte">
                                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8
              53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3
              0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3
              61.9 111.3 142.3V448z" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="text-sm text-white"><h5>or use your account</h5></div>
                        <div className="flex flex-col gap-4">
                            <input type="email" placeholder="Email" className="border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6]" />
                            <input type="password" placeholder="Password" className="border-none bg-[#e3c9ff] p-2 rounded-lg outline-none caret-[#9F51F6] text-[#9F51F6]" />
                        </div>
                        <a href="#" className="hover:underline">
                            <span>
                                Forgot your password?
                            </span>
                        </a>
                        <div className="flex justify-center text-white font-bold">
                            <button className="w-32 bg-[#9F51F6] rounded-full p-2 hover:bg-[#ad6ef5]">
                                SIGNIN
                            </button>
                        </div>
                    </div>
                    <Signup />
                    {/* <div className={`z-10 absolute bg-red-600 w-1/2 h-full ${style} flex flex-col justify-center items-center gap-8 p-10 transition-all ease-in-out animate-slideLeft`}>
                        <div className="z-10 right-0 rounded-s-lg text-white flex flex-col justify-center items-center gap-8">
                            <h1 className="font-extrabold text-4xl">{head}</h1>
                            <p align='center'>{body}</p>
                            <button className="w-32 border-2 border-white font-bold rounded-full p-2" onClick={moveSlider}>
                                {btn}
                            </button>
                        </div>
                    </div> */}
                    <div className={`z-10 absolute bg-[#9F51F6] text-white w-1/2 h-full flex flex-col justify-center items-center gap-8 p-10 transition-all duration-1000 ${style} ${anim}`}>
                        <div className="z-10 rounded-s-lg flex flex-col justify-center items-center gap-8 transition-opacity duration-500 ease-in-out">
                            <h1 className="font-extrabold text-4xl">{head}</h1>
                            <p align='center'>{body}</p>
                            <button className="w-32 border-2 border-white font-bold rounded-full p-2" onClick={moveSlider}>
                                {btn}
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
