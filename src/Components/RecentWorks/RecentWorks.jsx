import { Link } from "react-router-dom";

const RecentWorks = () => {
    return (
        <div className="mt-10">
            <div>
                <h1 className="font-bold text-5xl">My Recent Works...</h1>
            </div>
            {/* zen zephyr  */}
            <div className="mt-10 flex flex-col md:flex-row items-center md:gap-10">
                <img src="https://i.ibb.co/syCyg31/Neon-Retro-Stars-Marketing-Mockup-Website-Instagram-Post.png" alt="" className="md:w-1/2" />
                <div className="space-y-5">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold">Social learning Website</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold">Technologies Used:</span> <span className="text-cyan-50">React JS, Express JS, Node JS, MongoDB, Tailwind CSS, Daisy UI Component, Firebase</span></p>
                    <p><span className="font-bold text-lg md:text-xl">Features:</span>
                        <ul className="list-disc ml-10 text-cyan-50">
                            <li>User can add post,delete,vote and comment</li>
                            <li>Has interactive admin and user dashboard</li>
                            <li>User Friendly UI</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <Link to='https://zen-zephyr.web.app/' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Live Website Link</Link>
                        <Link to='https://github.com/Hossain-sakib/Zen-zephyr--client-' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Client Site Repository</Link>
                        <Link to='https://github.com/Hossain-sakib/Zen-zephyr--server' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Server Site Repository</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400 my-4"></div>
            {/* Study Buddy Hub */}
            <div className="mt-10 flex flex-col md:flex-row-reverse items-center md:gap-10">
                <img src="https://i.ibb.co/2jh3mdR/Neon-Retro-Stars-Marketing-Mockup-Website-Instagram-Post-1.png" alt="" className="md:w-1/2" />
                <div className="space-y-5">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold">Online assignments platform</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold">Technologies Used:</span> <span className="text-cyan-50">React JS, Express JS, Node JS, MongoDB, Tailwind CSS, Daisy UI Component, Firebase</span></p>
                    <p><span className="font-bold text-lg md:text-xl">Features:</span>
                        <ul className="list-disc ml-10 text-cyan-50">
                            <li>User can add assignment</li>
                            <li>User can take assignment and submit them</li>
                            <li>Others user can give mark on submitted assignment</li>
                            <li>User Friendly UI</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <Link to='https://study-buddy-hub.web.app/' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Live Website Link</Link>
                        <Link to='https://github.com/Hossain-sakib/StudyBuddyHub-client' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Client Site Repository</Link>
                        <Link to='https://github.com/Hossain-sakib/StudyBuddyHub-server' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Server Site Repository</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400 my-4"></div>
            {/* Flavor voyage */}
            <div className="mt-10 flex flex-col md:flex-row items-center md:gap-10">
                <img src="https://i.ibb.co/Gk4JjKn/Neon-Retro-Stars-Marketing-Mockup-Website-Instagram-Post-2.png" alt="" className="md:w-1/2" />
                <div className="space-y-5">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold">Brands Shop site</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold">Technologies Used:</span><span className="text-cyan-50"> React JS, Node JS, Tailwind CSS, Daisy UI Component, Firebase</span></p>
                    <p><span className="font-bold text-lg md:text-xl">Features:</span>
                        <ul className="list-disc ml-10 text-cyan-50">
                            <li>User can add product to cart</li>
                            <li>User can delete product from cart</li>
                            <li>User Friendly UI</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <Link to='https://flavor-voyage.web.app/' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Live Website Link</Link>
                        <Link to='https://github.com/Hossain-sakib/FlavorVoyage---client' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Client Site Repository</Link>
                        <Link to='https://github.com/Hossain-sakib/FlavorVoyage-server' target="_blank" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Server Site Repository</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400 my-4"></div>
        </div>
    );
};

export default RecentWorks;