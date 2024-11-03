import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/formify.png'; 
import axios from "axios";
import ShootingStars from './adminpanel/shootingStars';
import background from '../assets/background.jpeg';

export default function HomePage() {
    const [email, setEmail] = useState(false);
    const [email1, setEmail1] = useState(false);
    const [soon, setSoon] = useState(false);
    const [response, setResponse] = useState("");

    const handleEmail = () => {
        setEmail((prev) => !prev);
    };
    
    const handleSoon = () => {
        setSoon((prev) => !prev);
        setEmail(false); 
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post("https://intern-project-backend-only.vercel.app/formifyapi/formify", {
            email: email1,
          });
          setResponse(res.data.response);
        } catch (error) {
          console.error("Error posting data:", error);
        }
        handleSoon();
        console.log(response);
      };

    return (
        <div className="relative  bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 h-fit">
            
            {/* Background Animation */}
            

            {/* Header Section */}
            <header className="w-full max-w-7xl text-center py-12">
                <motion.img
                    src={Logo}
                    alt="Formify Logo"
                    className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Formify
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl font-medium text-gray-400 italic mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    "Why Build One When You Can Steal One? We Won't Tell."
                </motion.p>
            </header>

            {/* Call to Action Section */}
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <p className="text-lg md:text-xl font-semibold text-gray-300 mb-6">
                    Quick, Customizable, and Ready to Go!
                </p>
                <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white py-3 px-10 rounded-lg text-lg font-bold mb-8 shadow-lg transition duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmail}
                >
                    Steal a Form Now!
                </motion.button>
                {(email && !soon) && (
                    <div className="flex gap-4 mb-4">
                        <input 
                            className="bg-gray-800 border-2 border-blue-900 p-2 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 w-64"
                            placeholder="Enter Your Email"
                            type="email" 
                            onChange={(e) => setEmail1(e.target.value)}
                        />
                        <button 
                            className="p-2 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-800 transition duration-300"
                            onClick={handleSubmit}
                        >
                            FORMIFY
                        </button>
                    </div>
                )}
                {soon && (
                    <div className="text-lg font-semibold text-gray-300">
                        😊 We will contact you SOON
                    </div>
                )}
            </motion.div>

            {/* Humor Section */}
            <motion.div
                className="w-full max-w-4xl mt-16 text-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <p className="text-xl md:text-2xl font-semibold text-gray-300">
                    Don't waste hours coding your own contact form.
                </p>
                <motion.p
                    className="text-lg md:text-xl text-gray-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    Just <span className="text-blue-500 font-bold">*copy*</span> and pretend you did all the work!
                </motion.p>
                <p className="text-lg md:text-xl font-semibold text-gray-300">
                    We even made it look <span className="text-purple-500 font-bold">expensive</span>.
                </p>
            </motion.div>

            {/* Features Section */}
            <motion.div
                className="w-full max-w-4xl mt-12 space-y-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Choose Formify?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Instant Setup", desc: "Get a fully functional contact form in seconds." },
                        { title: "Highly Customizable", desc: "Make it your own without writing a line of code." },
                        { title: "Totally Free*", desc: "*But we do accept coffee donations." },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-bold mb-3 text-purple-500">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Footer Section */}
            <footer className="mt-16 text-gray-500 text-center py-6">
                <p>© 2024 Formify. All rights reserved. We won't tell.</p>
            </footer>
        </div>
    );
}
