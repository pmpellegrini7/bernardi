import { NavLink } from "react-router-dom";

function NavBar({navBarButtons}) {
    return ( 
        <nav className="hidden sm:block text-lg h-full">
            <ul className="sm:flex justify-around items-center h-full">
                {navBarButtons.map((button, index) => {
                return (
                    <NavLink
                    className="w-40 flex flow-row items-center justify-center h-full hover:underline underline-offset-8 duration-500"
                    key={index}
                    to={button.url}
                    >
                    <img
                        className="w-6 mr-2"
                        src={button.iconURL}
                        alt={button.iconALT}
                    />
                    <li>{button.text}</li>
                    </NavLink>
                );
                })}
            </ul>
            </nav>
    );
}
export default NavBar;