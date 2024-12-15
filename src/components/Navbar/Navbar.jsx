import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { SlEarphones } from "react-icons/sl";
import { MdMenu } from "react-icons/md";

// Updated NavbarMenu
const NavbarMenu = [
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'Shop',
        path: '/shop',
    },
    {
        id: 3,
        name: 'New Arrivals',
        path: '/new-arrivals',
    },
    {
        id: 4,
        name: 'Blog',
        path: '/blog',
    },
    {
        id: 5,
        name: 'Contact Us',
        path: '/contact',
    },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
    const mobileMenuRef = useRef(null); 

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <motion.div
            className="bg-gray-900 text-white py-4 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <nav className="container flex justify-between items-center px-4 md:px-8">
                {/* Logo section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <a
                        className="text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                        href="#"
                    >
                        Playing /{' '}
                        <span className="font-light text-gray-300">
                            <motion.span
                                className="hover:text-pink-500 transition-all"
                                whileHover={{ scale: 1.1, rotate: 2 }}
                            >
                                Market
                            </motion.span>
                        </span>
                    </a>
                </motion.div>

                {/* Desktop Menu section */}
                <div className="hidden md:flex items-center gap-8">
                    {NavbarMenu.map((menu) => (
                        <motion.li
                            key={menu.id}
                            initial={{ scale: 0.9, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a
                                href={menu.path}
                                className="inline-block text-sm py-2 px-4 uppercase transition-colors duration-300 hover:text-pink-500"
                            >
                                {menu.name}
                            </a>
                        </motion.li>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl"
                    >
                        <SlEarphones size={24} />
                    </motion.button>
                </div>

                {/* Mobile menu icon */}
                <motion.div
                    className="md:hidden"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    onClick={toggleMobileMenu}
                >
                    <MdMenu className="text-4xl cursor-pointer" />
                </motion.div>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                ref={mobileMenuRef}
                className={`fixed top-0 left-0 w-full bg-gray-900 text-white md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <ul className="flex flex-col items-center py-4">
                    {NavbarMenu.map((menu) => (
                        <motion.li
                            key={menu.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: menu.id * 0.1 }}
                        >
                            <a
                                href={menu.path}
                                className="text-lg py-2 px-4 uppercase block transition-colors duration-300 hover:text-pink-500"
                                onClick={toggleMobileMenu}
                            >
                                {menu.name}
                            </a>
                        </motion.li>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl mt-4"
                    >
                        <SlEarphones size={24} />
                    </motion.button>
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
