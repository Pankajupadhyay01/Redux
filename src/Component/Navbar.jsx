import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Navbar = () => {
    const [stick, setstick] = useState(false);
    const setcolor = () => {
        if (window.scrollY >= 80) {
            setstick(true);
        }
        else {
            setstick(false);
        }
    }
    window.addEventListener('scroll', setcolor);
    return (
        <div>
            <nav className={`fixed w-full ${stick ? "bg-blue-600" : "bg-white"}`}>
                <div className='flex justify-between mx-6 items-center'>
                    <div className={`text-[32px] ${stick ? "text-white" : "text-blue-600"} font-semibold`}>
                        Logo
                    </div>
                    <div className='flex list-none '>
                        <Link to="/" className='mx-3 capitalize text-lg hover:text-blue-700 cursor-pointer font-semibold'>home</Link>
                        <Link to="about" className='mx-3 capitalize text-lg hover:text-blue-700 cursor-pointer font-semibold'>About</Link>
                        <Link to="/" className='mx-3 capitalize text-lg hover:text-blue-700 cursor-pointer font-semibold'>Service</Link>
                        <Link to="/" className='mx-3 capitalize text-lg hover:text-blue-700 cursor-pointer font-semibold'>Contact</Link>
                    </div>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;
