import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileMenu({ navBarButtons, toggleMenu, showMenu }) {
    return (
        <nav className={`block sm:hidden text-lg w-full absolute bg-white z-10 ${showMenu ? "" : "hidden"}`}>
            <ul className="flex flex-col items-center gap-8 p-6">
            {navBarButtons.map((button, index) => (
                <li key={index}>
                <NavLink
                    className="w-full py-2 hover:bg-gray-200 text-center"
                    to={button.url}
                    onClick={toggleMenu}
                >
                    <img className="w-6 mr-2 inline" src={button.iconURL} alt={button.iconALT} />
                    <span className="inline-block">{button.text}</span>
                </NavLink>
                </li>
            ))}
            </ul>
        </nav>
    );
}

export default MobileMenu