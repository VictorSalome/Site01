import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-white via-slate-100 to-slate-200">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
                        <img
                            src="https://sitetray.s3.amazonaws.com/wp-content/uploads/sites/2/2021/08/post_thumbnail-9b1be5170f70396ef5f1d7198c08b42b-e1687226651278.jpeg"
                            alt="Equipe"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 lg:w-3/5 md:pl-8">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                            Sobre Nós
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Somos uma empresa dedicada a transformar ideias em realidade. Com uma equipe apaixonada e experiente, oferecemos soluções inovadoras que atendem às necessidades do mercado moderno. Nosso compromisso com a qualidade e a excelência nos permite criar produtos e serviços que não apenas atendem, mas superam as expectativas de nossos clientes.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nossa missão é proporcionar um impacto positivo através de nossas soluções, sempre com foco na inovação e na satisfação do cliente. Estamos aqui para construir o futuro, um projeto de cada vez.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
