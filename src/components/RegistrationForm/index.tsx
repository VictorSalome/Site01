import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const RegistrationForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <section id="contact" className="p-8 bg-gray-100">
            <div className="container mx-auto max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Cadastre-se</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Nome</label>
                        <input
                            id="name"
                            {...register('name', { required: 'Nome é obrigatório' })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', { required: 'Email é obrigatório' })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700">Mensagem</label>
                        <textarea
                            id="message"
                            {...register('message')}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;
