import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import {
    AiOutlineMail,
} from 'react-icons/ai';
import { BsPhoneFill } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCBzDnPRBf4Rui_efAEnD-nQ9d5j-4sib0",
    authDomain: "portfolio-c3cab.firebaseapp.com",
    databaseURL: "https://portfolio-c3cab-default-rtdb.firebaseio.com",
    projectId: "portfolio-c3cab",
    storageBucket: "portfolio-c3cab.appspot.com",
    messagingSenderId: "363313106631",
    appId: "1:363313106631:web:f4ec2ff38ef5ea53ceb8e2",
    measurementId: "G-4KFP52MF8N"
};

// Initialize Firebase (only once)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const contactRef = firebase.database().ref('contact-form');
        const newContact = contactRef.push();

        newContact.set({
            Name: form.name,
            email: form.email,
            subject: form.subject,
            textarea: form.message
        });

        setAlert(true);
        setTimeout(() => setAlert(false), 4000);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section
            id="contact"
            className="min-h-screen px-6 py-16 bg-gradient-to-tr from-[#041f1e] via-[#09121f] to-[#2c5364] text-white flex flex-col lg:flex-row justify-between gap-12 "
        >
            {/* Left Side */}
            {/* Left Side - Hero Style */}
            <div className="flex-1 mt-12 md:mt-24 ml-6 text-center md:text-left">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#49cfef] leading-tight">
                    Let's <span className="text-[#00fe19]">Connect</span> & Collaborate
                </h2>

                <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                    I'm open to exciting opportunities & collabs!
                </h4>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                    My portfolio reflects my journey as a dedicated full-stack developer.
                    From building captivating UIs to mastering backend integrations — let's shape the future of web together!
                </p>

                {/* Contact Info */}
                <div className="mb-6">
                    <ul className="space-y-3 text-lg text-gray-200">
                        <li className="flex justify-center md:justify-start items-center gap-3">
                            <AiOutlineMail className="text-[#49cfef] text-xl" /> chvivek674@gmail.com
                        </li>
                        <li className="flex justify-center md:justify-start items-center gap-3">
                            <BsPhoneFill className="text-[#49cfef] text-xl" /> 9398584426
                        </li>
                    </ul>
                </div>

                {/* Social Icons - Styled Circle Buttons */}
                <div className="flex justify-center md:justify-start space-x-5 mt-4">
                    <a
                        href="mailto:chvivek674@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full hover:bg-cyan-500/20"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chengalapattu-vivek-sai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full hover:bg-cyan-500/20"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.hackerrank.com/RA2111028020021"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full hover:bg-cyan-500/20"
                    >
                        <FaCode />
                    </a>
                    <a
                        href="https://github.com/vickycode674"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full hover:bg-cyan-500/20"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>


            {/* Right Side - Form */}
            <div className="flex-1 mt-24">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#49cfef] text-center md:text-left">
                    Reach out Via Direct Message
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-lg">
                    {alert && (
                        <div className="text-green-300 bg-green-900/30 p-2 rounded text-center font-medium transition-all duration-300">
                            Hehe !! Your message has been sent successfully!
                        </div>
                    )}

                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email Adresss"
                        className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                        required
                    />
                    <input
                        type="text"
                        id="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Enter Topic You want to convey"
                        className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none"
                    />
                    <textarea
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Enter Your Message"
                        className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none resize-none"
                    ></textarea>
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-gradient-to-r from-[#00e6e6] to-[#1effbc] text-black font-semibold py-2 rounded-md cursor-pointer transition-transform hover:scale-105"
                    />
                </form>
            </div>
        </section>
    );
};

export default Contact;
