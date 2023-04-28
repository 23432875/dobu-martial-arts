import {useState} from "react";
import logo from "~/assets/svg/dobu-new-logo.png";
import NavbarLink from "./NavbarLink";
import { Link } from "@remix-run/react";

const Navbar = ()=> { 
    const [isOpen, setIsOpen]= useState(false);
    return (
    <header className="flex items-center justify-between bg-purple-600">
        <div>
            <Link to="/">
                <img className="h-16 w-auto" src={logo} alt="Dobu Martial Arts Gym" />
            </Link>
        </div>

        <div className="md:hidden">
            <button
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                type="button"
                onClick={()=> setIsOpen(!isOpen)}>
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 
                        1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 
                        1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                </svg>
            </button>
        </div>

        <div className={`px-2 pt-2 pb-4 ${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
            <NavbarLink url="/">Home</NavbarLink>
            <NavbarLink url="/about">About Us</NavbarLink>
            <NavbarLink url="/instructors">Instructors</NavbarLink>
            <NavbarLink url="/Classes">Classes</NavbarLink>
            <NavbarLink url="/Membership">Membership</NavbarLink>
            <NavbarLink url="/login">Login</NavbarLink>
        </div>
    </header>
    );
};

export default Navbar;
