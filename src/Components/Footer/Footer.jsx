import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4">
                <aside className="items-center grid-flow-col">
                    <img className="w-64" src="https://s5.gifyu.com/images/SiWyc.gif" alt="" />
                    <p className="text-cyan-100 text-lg">Copyright © 2023 - Md. Sakib Hossain</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to='https://www.linkedin.com/in/hossain-sakib-x/' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiLinkedin></SiLinkedin></Link>
                    <Link to='https://github.com/Hossain-sakib' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiGithub></SiGithub></Link>
                    <Link to='https://www.facebook.com/hossain.sakib.x/' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiFacebook></SiFacebook></Link>
                </nav>
            </footer>
            <div className="border-t border-cyan-400"></div>
        </div>
    );
};

export default Footer;