import {  MdSend } from "react-icons/md";
const SendEmail = () => {
    const handleSendEmail = e =>{
        e.preventDefault();
        const form = e.target;
        
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSendEmail} className="py-8 flex flex-col gap-4 p-4 mx-auto">
                    <div>
                        <h1 className="font-bold text-5xl mb-4">Send Email instantly...</h1>
                    </div>
                    <div className="flex justify-between gap-2">
                        <input type="text" name="name" className="input input-lg input-bordered border-cyan-300 w-full bg-cyan-950 bg-opacity-10" placeholder="Full Name" />
                        <input type="text" name="subject" className="input input-lg input-bordered border-cyan-300 w-full bg-cyan-950 bg-opacity-10" placeholder="Subject"/>
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your Message" className="textarea textarea-lg textarea-bordered border-cyan-300 w-full bg-cyan-950 bg-opacity-10"></textarea>
                    </div>
                    <button type="submit" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">send<MdSend></MdSend> </button>
                </form>
            </div>
            <div className="border-t border-cyan-400 my-4"></div>
        </div>

    );
};

export default SendEmail;