import { SiFacebook, SiGithub, SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

import { Link } from "react-router-dom";
import Expertise from "./Expertise/Expertise";


const AboutMe = () => {
    return (
        <div className='py-10' id="about-me">
            <div>
                <p className="font-bold text-5xl">About Me...</p>
                <p className='text-xl mt-2 text-cyan-50'>A dedicated MERN stack developer with a passion for building dynamic and user-centric web applications. My journey in the world of programming started with a fascination for turning lines of code into powerful and functional solutions.</p>
            </div>
            <div className='my-10  flex flex-col md:flex-row gap-10'>
                <div className='max-w-xl text-justify'>
                    <div className="">
                        <p className='text-3xl font-bold'>Get to know me!</p>
                        <p className='mt-5 text-xl text-cyan-50'> Hey there, I'm Md Sakib Hossain, your friendly MERN stack developer on a mission to make the web a more engaging and innovative space. In my coding journey, I've discovered the thrill of transforming ideas into functional and visually appealing digital experiences.<br /><br /> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </div>
                    <div className="mt-10 divider">
                        <h1 className="text-3xl font-bold">Keep in touch</h1>
                    </div>

                    <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <Link to='https://www.linkedin.com/in/hossain-sakib-x/' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiLinkedin></SiLinkedin></Link>
                        <Link to='mailto:Hossain.sakib.x@gmail.com' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiGmail></SiGmail></Link>
                        <Link to='https://github.com/Hossain-sakib' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiGithub></SiGithub></Link>
                        <Link to='https://www.facebook.com/hossain.sakib.x/' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiFacebook></SiFacebook></Link>
                        <Link to='https://wa.me/+8801955703819' target="_blank" className="btn btn-circle border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiWhatsapp></SiWhatsapp></Link>
                    </div>
                    <div className="mt-10"></div>
                </div>
                <div>
                    <Expertise></Expertise>
                    <div className="mt-8">
                        <Link to='/about'><button className="btn border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">More info</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400"></div>
        </div>
    );
};

export default AboutMe;