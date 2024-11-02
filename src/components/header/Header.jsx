import React, { useState } from 'react'
import "./header.css"
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const links = ["Home", "Main", "About", "Users",]
    return (
        <div className='container mx-auto mb-6 bg-gray-200'>
            <nav className="navbar flex py-5 items-center justify-between">
                <div className="navbar__logo">
                </div>
                <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
                    <ul className="navbar__collection flex gap-8 font-medium">
                        {
                            links.map((el, index) => (<li className="navbar__item"><a key={index} href="#">{el}<span></span></a></li>))
                        }
                    </ul>
                </div>
                <div>
                </div>

                <div onClick={toggleMenu} className="navbar__menu">
                    <RiMenu2Fill />
                </div>
            </nav>
        </div>
    )
}

export default Header