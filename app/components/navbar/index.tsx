import logo from "~/assets/svg/dobu-logo.png";
const Navbar = ()=> { 
    return (
    <header className="flex items-center justify-between bg-gray-900">
        <div>
            <img className="h-16 w-auto" src={logo} alt="Dobu Martial Arts Gym" />
        </div>
        
        <div>
            <button className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" type="button">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
            </button>
        </div>
    </header>
    );
    };

    export default Navbar;
