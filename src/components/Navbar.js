import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import About from './About';
import ContactUs from './Contact';

export default function Navbar(props) {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearch = (searchValue) => {
        console.log("Search value:", searchValue)
    }

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };

    return (
        <div className="">
            <div className="flex justify-between ">
                <div className='w-full flex justify-between my-14 text-2xl items-center'>
                    <h1><a href='/' className="text-4xl font-bold bg-gradient-to-r from-[#5c37f0] via-purple-500 to-[#ea0007] text-transparent bg-clip-text">{props.title}</a></h1>
                    <div className={` ${menuOpen ? "block" : "hidden"} `} id="navbarNav">
                        <ul className="flex flex-wrap gap-12">
                            <li className="">
                                <Link to='/' className={`${location.pathname === '/' ? 'text-white' : ''}`}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className={`${location.pathname === '/about' ? 'text-white' : ''}`}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className={`nav-link ${location.pathname === '/contact' ? 'text-white' : ''}`}>CONTACT</Link>
                            </li>
                            {/* <li className="nav-item">
                            <Search />
                        </li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <label
                        for="nav_bar_icon"
                        class="w-7 h-8 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
                        onClick={handleMenuToggle}
                    >
                        <input id="nav_bar_icon" type="checkbox" class="hidden peer" />
                        <div
                            class="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
                        ></div>
                        <div
                            class="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked: peer-checked:translate-x-3"
                        ></div>
                        <div
                            class="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
                        ></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Add title here",
}