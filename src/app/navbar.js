'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="bg-gray-800 text-white relative">
            <div className="md:p-6 p-2 flex drop-shadow-2xl flex-row items-center text-center">

            <h1 className="lg:text-4xl text-xl ml-1">Team Decisiontree</h1>
            <div className="hidden md:flex justify-items-end space-x-4 lg:text-2xl text-md mx-auto flex-row justify-center items-center text-center lg:mr-2 lg:gap-2">
                <Link href="/" className="hover:text-blue-400">Home</Link>
                <a href="/team" className="hover:text-blue-400">About us</a>
                <a href="/sprints" className="hover:text-blue-400">Sprints</a>
                <a href="/expo" className="hover:text-blue-400">Expo</a>
            </div>
            <button className="md:hidden align-middle text-center self-center text-lg mx-auto mr-2 bg-blue-400 rounded-xl p-3 hover:cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggle}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'absolute' : 'hidden'} top-full left-0 w-full bg-gray-800 z-10 border-t-2 border-gray-700`}>
                <div className="flex flex-col space-y-4 md:text-2xl text-md mx-auto justify-center items-center text-center lg:mr-2 lg:gap-2 py-2 pb-4">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <a href="/team" className="hover:text-blue-400">About us</a>
                    <a href="/sprints" className="hover:text-blue-400">Sprints</a>
                    <a href="/expo" className="hover:text-blue-400">Expo</a>
                </div>
            </div>
        </nav>
    );
}

/**
 
 */