import { MdDownload } from "react-icons/md";
import Skills from "./Skills";
const resumeLink = "https://drive.google.com/drive/folders/1LR5TJLDtnec3NHwnhlLq4Tohp_FPMNby?usp=sharing";

const About = () => {
    const handleDownloadResume = () => {
        window.open(resumeLink, "_blank");
    };
    return (
        <div className="mt-10 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/mJkXPY9/bg-image.png)' }}>
            <div className="md:pt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className="flex flex-col justify-center rounded-md">
                    <img src="https://i.ibb.co/vzVH02p/banner-img.png" alt="" />
                    <div className="my-4">
                        <button onClick={handleDownloadResume} className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl mt-8"><MdDownload />Download Resume</button>
                    </div>
                </div>
                <div className="flex-1 space-y-2 p-4 max-w-2xl">
                    <p className="text-4xl font-bold">Md Sakib Hossain</p>
                    <p className="text-2xl font-medium text-cyan-100">Frontend Web Developer</p>
                    <p className="text-cyan-100">Narayanganj, Bangladesh</p>
                    <div className="divider text-2xl font-semibold">Objectives</div>
                    <p className="text-justify text-cyan-50">As a recent graduate with expertise in React.js, MongoDB, Express.js, and Node.js, I am seeking a dynamic role in web development. Eager to apply my skills in creating efficient and scalable solutions for real-world challenges. I aim to contribute to a collaborative team, further enhance my technical proficiency, and play a key role in delivering impactful web applications.</p>
                    <div className="divider text-2xl font-semibold">Education</div>
                    <p className="text-2xl text-cyan-100">BSc. (Hons) in Computer Science & Engineering</p>
                    <p className="text-xl text-cyan-50">National University, Bangladesh</p>
                    <div className="divider text-2xl font-semibold">Skills Set</div>
                    <div>
                        <p className='text-3xl font-bold'>I have expertise on...</p>

                        <div className="mt-5 flex flex-col  justify-between">
                            <Skills></Skills>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-b border-cyan-400"></div>
        </div>
    );
};

export default About;