import { MdDownload } from "react-icons/md";
import Skills from "./Skills";
const resumeLink = "https://drive.google.com/drive/folders/1LR5TJLDtnec3NHwnhlLq4Tohp_FPMNby?usp=sharing";

const About = () => {
    const handleDownloadResume = () => {
        window.open(resumeLink, "_blank");
    };
    return (
        <div className="mt-10 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/mJkXPY9/bg-image.png)' }}>
            <div className="md:pt-10 flex flex-col md:flex-row gap-5 justify-center items-center ">
                <div className="flex flex-col justify-center rounded-md">
                    <img src="https://i.ibb.co/vzVH02p/banner-img.png" alt="" />
                    <div className="my-4 ml-20">
                        <button onClick={handleDownloadResume} className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl mt-8"><MdDownload />Download Resume</button>
                    </div>
                </div>
                <div className="flex-1 space-y-6 p-4 max-w-2xl">
                    <div>
                        <p className="text-4xl font-bold">Md Sakib Hossain</p>
                        <p className="text-2xl font-medium text-cyan-100">Frontend Web Developer</p>
                        <p className="text-cyan-100">Narayanganj, Bangladesh</p>
                    </div>

                    <div>
                        <p className="divider text-2xl font-semibold">Objectives</p>
                        <p className="text-justify text-cyan-50">As a recent graduate with expertise in React.js, MongoDB, Express.js, and Node.js, I am seeking a dynamic role in web development. Eager to apply my skills in creating efficient and scalable solutions for real-world challenges. I aim to contribute to a collaborative team, further enhance my technical proficiency, and play a key role in delivering impactful web applications.</p>
                    </div>
                    <div>
                        <p className="divider text-2xl font-semibold">Education</p>
                        <div className="space-y-4">
                            <div className="flex items-center  gap-2">
                                <img className="w-16 h-16" src="https://i.ibb.co/1dXWx2x/national-university-bangladesh-2.jpg" alt="" />
                                <div className="mb-2">
                                    <p className="text-2xl text-cyan-100">BSc. (Hons) in Computer Science & Engineering</p>
                                    <p className="text-lg text-cyan-50">National University, Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex items-center  gap-2">
                                <img className="w-16 h-16" src="https://i.ibb.co/zSZ3YcH/download.jpg" alt="" />
                                <div className="mb-2">
                                    <p className="text-2xl text-cyan-100">Higher Secondary Certificate</p>
                                    <p className="text-lg text-cyan-50">Giasuddin Islamic Model College</p>
                                </div>
                            </div>
                            <div className="flex items-center  gap-2">
                                <img className="w-16 h-16" src="https://i.ibb.co/wp5JJ3W/download-1.jpg" alt="" />
                                <div >
                                    <p className="text-2xl text-cyan-100">Secondary School Certificate</p>
                                    <p className="text-lg text-cyan-50">Kanchpur Omar Ali High School</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="divider text-2xl font-semibold">Skills Set</p>
                        <div>
                            <p className='text-3xl font-bold'>I have expertise on...</p>
                            <div className="mt-5 flex flex-col  justify-between">
                                <Skills></Skills>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-cyan-400"></div>
        </div>
    );
};

export default About;