import React from 'react';
import { Parallax } from 'react-parallax';

const images = [
    { src: '../../public/assets/nike.jpeg', alt: 'nike', title: 'Revolucione com as melhores marcas', inf: "O sucesso é a soma de pequenos esforços repetidos dia após dia." },
    { src: '../../public/assets//banana.jpeg', alt: 'banana', title: 'Doce e Saudável', inf: "A vida é como uma banana: é preciso descascar as dificuldades para aproveitar o melhor dela." },
    { src: '../../public/assets/praia.jpeg', alt: 'praia', title: 'Relaxamento e Paz', inf: "A tranquilidade não é um lugar, é um estado de espírito." },
    { src: '../../public/assets/ponte.jpeg', alt: 'ponte', title: 'Conecte-se com Novos Horizontes', inf: "Construa pontes, não muros. A verdadeira conexão está na empatia e na compreensão." },
];

const HeroSection: React.FC = () => {
    return (
        <>
            {images.map((image, index) => (
                <Parallax
                    key={index}
                    bgImage={image.src}
                    bgImageAlt={image.alt}
                    strength={300}
                    className="h-screen bg-cover bg-center"
                    bgImageStyle={{
                        objectFit: 'cover',
                    }}
                >
                    <section id='home' className="h-screen flex items-center justify-center">
                        <div className="text-center p-4 bg-black bg-opacity-50 rounded-md max-w-md mx-auto md:max-w-lg lg:max-w-xl">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{image.title}</h1>
                            <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-300">{image.inf}</p>
                        </div>
                    </section>
                </Parallax>
            ))}
        </>
    );
};

export default HeroSection;
