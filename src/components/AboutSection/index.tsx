import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="p-8 bg-gray-200">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Somos uma empresa comprometida em oferecer as melhores soluções para nossos clientes.
                    Nossa equipe de especialistas trabalha incansavelmente para inovar e criar produtos
                    que atendam às necessidades do mercado moderno. Valorizamos a qualidade, a inovação
                    e o atendimento ao cliente, e estamos sempre prontos para ajudar você a alcançar
                    seus objetivos com nossas soluções.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
