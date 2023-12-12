import { SiFacebook, SiGithub, SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { MdDownload } from "react-icons/md";

import { Link } from "react-router-dom";


const AboutMe = () => {
    return (
        <div className='mt-10'>
            <div>
                <p className='text-4xl font-bold'>About Me.</p>
                <p className='text-xl mt-2 text-cyan-50'>A dedicated MERN stack developer with a passion for building dynamic and user-centric web applications. My journey in the world of programming started with a fascination for turning lines of code into powerful and functional solutions.</p>
            </div>
            <div className='mt-10  flex flex-col md:flex-row gap-10'>
                <div className='max-w-xl text-justify'>
                    <div className="">
                        <p className='text-3xl font-bold'>Get to know me!</p>
                        <p className='mt-5 text-xl text-cyan-50'> Hey there, I'm Md Sakib Hossain, your friendly MERN stack developer on a mission to make the web a more engaging and innovative space. In my coding journey, I've discovered the thrill of transforming ideas into functional and visually appealing digital experiences.<br /><br /> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </div>
                    <div className="mt-10 divider">
                        <h1 className="text-3xl font-bold">Keep in touch</h1>
                    </div>
                    <div className="mt-10 flex justify-center items-center gap-10">
                        <Link to='https://www.linkedin.com/in/hossain-sakib-x/' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiLinkedin></SiLinkedin></Link>
                        <Link to='mailto:Hossain.sakib.x@gmail.com' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiGmail></SiGmail></Link>
                        <Link to='https://github.com/Hossain-sakib' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiGithub></SiGithub></Link>
                        <Link to='https://www.facebook.com/hossain.sakib.x/' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiFacebook></SiFacebook></Link>
                        <Link to='https://wa.me/+8801955703819' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiWhatsapp></SiWhatsapp></Link>
                    </div>


                    <div className="mt-10"></div>
                </div>
                <div>
                    <p className='text-3xl font-bold'>I have expertise on...</p>
                    <div className="text-4xl mt-5">
                        <img src="https://camo.githubusercontent.com/3e3f5e4caa6d3b6821a1a28cb810c219900e664236f155badb1e5e5560792cc5/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c7461696c77696e642c72656163742c66697265626173652c657870726573732c6d6f6e676f2c6e6f64656a732c6769742c6669676d61" alt="" />

                        <div>
                            <div className="mt-5">
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            HTML
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            90%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[90%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            CSS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            80%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[80%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Tailwind CSS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            85%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[85%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            JavaScript
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            75%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            React JS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            80%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[80%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Express JS
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            75%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            MongoDB
                                        </h6>
                                        <h6
                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            75%
                                        </h6>
                                    </div>
                                    <div
                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div
                                            className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-cyan-100 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400"></div>
        </div>
    );
};

export default AboutMe;