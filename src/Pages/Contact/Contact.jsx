import { SiFacebook, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import SendEmail from "../../Components/SendEmail/SendEmail";
const Contact = () => {
    return (
        <div>
            <div className="flex items-center flex-col md:flex-row gap-4 mt-8 p-8">
                <div className="flex-1">
                    <h1 className="text-6xl mb-4">Contact Me!</h1>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-4xl text-cyan-100 mb-4">Md Sakib Hossain</h1>
                            <div className="flex items-center gap-4">
                                <button className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><FaAddressCard></FaAddressCard></button>
                                <p className="text-2xl text-cyan-100">BSCIC Road,Kanchpur,Narayanganj,Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><IoMdCall></IoMdCall></button>
                            <p className="text-2xl text-cyan-100">+8801576636011</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to='https://wa.me/+8801955703819' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiWhatsapp></SiWhatsapp></Link>
                            <p className="text-2xl text-cyan-100">+8801955703819</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to='mailto:Hossain.sakib.x@gmail.com' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiGmail></SiGmail></Link>
                            <p className="text-2xl text-cyan-100">Hossain.Sakib.X@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to='https://www.linkedin.com/in/hossain-sakib-x/' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiLinkedin></SiLinkedin></Link>
                            <p className="text-2xl text-cyan-100">Hossain-Sakib-X</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to='https://www.facebook.com/hossain.sakib.x/' target="_blank" className="btn btn-circle border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl text-2xl"><SiFacebook></SiFacebook></Link>
                            <p className="text-2xl text-cyan-100">Hossain.Sakib.X</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ">
                    <img src="https://i.ibb.co/hHq8Lfz/372833531-2194525894272993-5948451160057598974-n.jpg" alt="" />
                </div>
            </div>
            <div className="border-b border-cyan-400"></div>
            <div>
                <SendEmail></SendEmail>
            </div>
        </div>
    );
};

export default Contact;