import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white p-4 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:underline">Início</a>
          <a href="#about" className="hover:underline">Sobre Nós</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-700 p-4">
          <a href="#home" className="block py-2 hover:underline">Início</a>
          <a href="#about" className="block py-2 hover:underline">Sobre Nós</a>
          <a href="#contact" className="block py-2 hover:underline">Contato</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
