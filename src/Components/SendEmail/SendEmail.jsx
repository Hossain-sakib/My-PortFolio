import { MdSend } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";




const SendEmail = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_foudpvg", "template_kunltj6", form.current, "nWmHybbLPokblFEdY")
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    form.current.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Mail sent successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                        color: "#4DD0E1",
                        background: "#000000",
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div>
                <form ref={form} onSubmit={handleSubmit} className="py-8 flex flex-col gap-4 p-4 mx-auto">
                    <div>
                        <h1 className="font-bold text-5xl mb-4">Send Email instantly...</h1>
                    </div>
                    <div className="flex justify-between gap-2">
                        <input type="text" name="user_name" className="input input-lg input-bordered border-cyan-300 w-full bg-cyan-950 bg-opacity-10" placeholder="Full Name" />
                        <input type="email" name="user_email" className="input input-lg input-bordered border-cyan-300 w-full bg-cyan-950 bg-opacity-10" placeholder="Your Email" />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your Message" className="textarea textarea-lg textarea-bordered border-cyan-300 w-full bg-cyan-950 bg-opacity-10"></textarea>
                    </div>
                    <button type="submit" className="btn border-2 bg-black border-cyan-500 text-cyan-200 hover:border-2 hover:border-cyan-500 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
                        send<MdSend />
                    </button>
                </form>
            </div>
            <div className="border-t border-cyan-400 my-4"></div>
        </div>
    );
};

export default SendEmail;
