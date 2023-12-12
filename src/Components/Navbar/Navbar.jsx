

const Navbar = () => {
    const navLinks =
        <>
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
        </>
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  bg-black border-2 border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-cyan-200">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a ><img className="w-36 rounded-lg overflow-hidden transition-all hover:scale-105  hover:shadow-2xl" src="https://s5.gifyu.com/images/SiWyc.gif" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-cyan-200">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Contact</button>
                </div>
            </div>
            <div className="border-t border-cyan-400"></div>
        </div>
    );
};

export default Navbar;