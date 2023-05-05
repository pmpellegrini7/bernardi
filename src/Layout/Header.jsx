import MobileMenu from "../Components/Header/MobileMenu";
import MobileMenuButton from "../Components/Header/MobileMenuButton";
import NavBar from "../Components/Header/NavBar";
import {navBarButtons} from "/src/Components/Header/config.js"
import { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
    return ( 
        <header className="w-full fixed h-20 flex flex-col items-center sm:h-28 sm:grid z-50">
            <NavBar navBarButtons={navBarButtons} />
            <MobileMenuButton toggleMenu={toggleMenu} showMenu={showMenu} />
            <MobileMenu navBarButtons={navBarButtons} toggleMenu={toggleMenu} showMenu={showMenu} />
        </header>
    );
}

export default Header;