import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
            >
                <FaWhatsapp size={24} />
                <span>Fale Conosco</span>
            </a>
        </footer>
    );
};

export default Footer;
