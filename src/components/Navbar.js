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
        <div className="relative">
            <div className="flex justify-between items-center my-14 text-2xl pr-8">
                <h1><a href='/' className="text-4xl font-bold bg-gradient-to-r from-[#5c37f0] via-purple-500 to-[#ea0007] text-transparent bg-clip-text">{props.title}</a></h1>
                <div className="hidden md:flex" id="navbarNav">
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
                        <li className="nav-item">
                            <Link to='/loginwrapper' className={`nav-link ${location.pathname === '/loginwrapper' ? 'text-white' : ''}`}>LOGIN</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Search />
                    </li> */}
                    </ul>
                </div>
                <div className="md:hidden">
                    <label
                        htmlFor="nav_bar_icon"
                        className="w-7 h-8 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <input
                            id="nav_bar_icon"
                            type="checkbox"
                            className="hidden peer"
                            checked={menuOpen}
                            onChange={handleMenuToggle}
                        />
                        <div
                            className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
                        ></div>
                        <div
                            className="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked:translate-x-3"
                        ></div>
                        <div
                            className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
                        ></div>
                    </label>
                    <div
                        className={`absolute top-full right-0 left-0 bg-gray-900 bg-opacity-95 z-50 mt-2 rounded-md shadow-lg transform transition-opacity transition-transform duration-300 ease-in-out origin-top ${
                            menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                        }`}
                        id="mobileMenu"
                    >
                        <ul className="flex flex-col gap-4 p-4">
                            <li>
                                <Link to='/' className={`${location.pathname === '/' ? 'text-white' : ''}`} onClick={() => setMenuOpen(false)}>HOME</Link>
                            </li>
                            <li>
                                <Link to='/about' className={`${location.pathname === '/about' ? 'text-white' : ''}`} onClick={() => setMenuOpen(false)}>ABOUT</Link>
                            </li>
                            <li>
                                <Link to='/contact' className={`${location.pathname === '/contact' ? 'text-white' : ''}`} onClick={() => setMenuOpen(false)}>CONTACT</Link>
                            </li>
                            <li>
                                <Link to='/loginwrapper' className={`${location.pathname === '/loginwrapper' ? 'text-white' : ''}`} onClick={() => setMenuOpen(false)}>LOGIN</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/loginresponsive' className={`nav-link ${location.pathname === '/loginresponsive' ? 'text-white' : ''}`}>LOGINresponsive</Link>
                            </li> */}
                        </ul>
                    </div>
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