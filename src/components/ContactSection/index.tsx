import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="p-8 bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="container mx-auto max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Entre em Contato</h2>
                <p className="text-lg text-gray-600 text-center mb-8">Conecte-se conosco através das redes sociais:</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="https://wa.me/5511987319331"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex items-center space-x-3 bg-[#25D366] text-white p-3 rounded-lg shadow-sm hover:bg-green-600 transition-colors duration-300 ease-in-out"
                    >
                        <FaWhatsapp size={20} />
                        <span className="font-medium">WhatsApp</span>
                    </a>
                    <a
                        href="https://www.instagram.com/victorsalome41?igsh=MW9iMDk1a3BqOXQyMg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex items-center space-x-3 bg-pink-500 text-white p-3 rounded-lg shadow-sm hover:bg-pink-600 transition-colors duration-300 ease-in-out"
                    >
                        <FaInstagram size={20} />
                        <span className="font-medium">Instagram</span>
                    </a>

                    <a
                        href="https://www.youtube.com/yourchannel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex items-center space-x-3 bg-red-500 text-white p-3 rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-300 ease-in-out"
                    >
                        <FaYoutube size={20} />
                        <span className="font-medium">YouTube</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
