import { FaArrowDown } from "react-icons/fa6";
const resumeLink = "https://drive.google.com/drive/folders/1LR5TJLDtnec3NHwnhlLq4Tohp_FPMNby?usp=sharing";
const Banner = () => {
    const handleDownloadResume = () => {
        window.open(resumeLink, "_blank");
      };
    return (
        <div >
            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/mJkXPY9/bg-image.png)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:flex-row flex flex-col items-center justify-center">
                        <div className="flex-1">
                            <img src="https://i.ibb.co/vzVH02p/banner-img.png" alt="" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <h1 className="text-3xl font-medium text-cyan-300">Unlocking Digital Potential with <span className="text-5xl text-cyan-100">Hossain Sakib</span></h1>
                            <p className="text-6xl md:text-8xl font-bold text-cyan-300">Front<span className="text-white text-600">end</span> <br />Developer</p>
                            <p className="mt-10 max-w-lg text-xl text-cyan-50">Transforming Ideas into Digital Reality. Explore my portfolio to witness the power of MERN stack expertise. Let's build your next web solution together.</p>
                            <div>
                                <button onClick={handleDownloadResume} className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl"><FaArrowDown />Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400"></div>
        </div>
    );
};

export default Banner;