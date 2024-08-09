import React from 'react';
import { Parallax } from 'react-parallax';

const images = [
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', alt: 'Montanhas', title: 'Revolucione com as melhores marcas', inf: "sempre nike" },
  { src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24', alt: 'Campo de Flores', title: 'Campo de Flores', inf: "ddasda" },
  { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', alt: 'Cachoeira', title: 'Cachoeira Majestosa', inf: "dsada" },
  { src: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664', alt: 'Aurora Boreal', title: 'Aurora Boreal', inf: "dasd" },
];

const HeroSection: React.FC = () => {
  return (
    <>
      {images.map((image, index) => (
        <Parallax
          key={index}
          bgImage={image.src}
          strength={300}
          bgImageAlt={image.alt}
        >
          <section className="h-screen flex items-center justify-center">
            <div className="text-center p-4 bg-black bg-opacity-50 rounded-md max-w-md mx-auto md:max-w-lg lg:max-w-xl">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">{image.title}</h1>
              <p className="mt-2 text-sm md:text-lg lg:text-xl text-gray-300">{image.inf}</p>
            </div>
          </section>
        </Parallax>
      ))}
    </>
  );
};

export default HeroSection;
