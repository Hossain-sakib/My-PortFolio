import { Link } from "react-router-dom";


const Navbar = () => {
    const navLinks =
        <>
            <Link to="/"> <li className="w-full btn btn-sm border-1 bg-black text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl my-1">Home</li></Link>
            <Link to="/about"><li className="w-full btn btn-sm border-1 bg-black  text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl my-1">About</li></Link>
            <Link><li className="w-full btn btn-sm border-1 bg-black  text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl my-1">Projects</li></Link>
            <Link to="/contact"><li className="w-full btn btn-sm border-1 bg-black  text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl my-1">Contact</li></Link>
        </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-80 max-w-screen-xl mx-auto">
                <div className="navbar-start px-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-sm btn-ghost lg:hidden  bg-black border-2 border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-30 rounded-box w-52 text-cyan-200 mr-4">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to="/"><img className="w-36 rounded-lg ml-4 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl" src="https://s5.gifyu.com/images/SiWyc.gif" alt="" /></Link>
                </div>
                <div className="navbar-end px-1 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-cyan-200">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
            <div className="border-t border-cyan-400 mb-4"></div>
        </div>
    );
};

export default Navbar;