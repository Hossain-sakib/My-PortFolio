import { MdDownload } from "react-icons/md";
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
                    <div className="md:flex-row flex flex-col items-center justify-center mt-16">
                        <div className="flex-1">
                            <img src="https://i.ibb.co/vzVH02p/banner-img.png" alt="" />
                        </div>
                        <div className="flex-1 space-y-4 text-right ">
                            <h1 className="text-3xl font-medium text-cyan-300">Unlocking Digital Potential with <span className="text-5xl text-cyan-100">SAKIB</span></h1>
                            <p className="text-6xl md:text-8xl font-bold text-cyan-300">MERN <span className="text-white text-600">Stack</span> <br />Developer</p>
                            <p className="text-xl text-cyan-50">Transforming Ideas into Digital Reality. Explore my portfolio to witness the power of MERN stack expertise. Let's build your next web solution together.</p>
                            <div>
                                <button onClick={handleDownloadResume} className="btn border-1 bg-black border-cyan-500 text-cyan-200 hover:border-1 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl mt-8"><MdDownload/>Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-cyan-400 my-4"></div>
        </div>
    );
};

export default Banner;