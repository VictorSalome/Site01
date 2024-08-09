import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-transparent p-4 flex justify-end items-center z-50">
            <a
                href="https://wa.me/5511987319331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
                style={{ opacity: 0.5 }}
            >
                <FaWhatsapp size={64} color="#25D366" className="animate-pulse" />
            </a>
        </footer>
    );
};

export default Footer;
