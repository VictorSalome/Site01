import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogImg from "../../public/assets/Título.png"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="w-[45px] h-[45px] cursor-pointer rounded-full border-2 border-black"><img src={LogImg} alt="" className="rounded-full" /></div>

                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white hover:text-blue-400 transition-colors">Início</a>
                    <a href="#about" className="text-white hover:text-blue-400 transition-colors">Sobre Nós</a>
                    <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contato</a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-gray-800 bg-opacity-90 p-4 border-t border-gray-700">
                    <a href="#home" className="block py-2 text-white hover:text-blue-400 transition-colors">Início</a>
                    <a href="#about" className="block py-2 text-white hover:text-blue-400 transition-colors">Sobre Nós</a>
                    <a href="#contact" className="block py-2 text-white hover:text-blue-400 transition-colors">Contato</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
