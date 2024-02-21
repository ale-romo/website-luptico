"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
;import TextInput from "../TextInput";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [department, setDepartment] = useState('cabins');

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission logic here
  };

  return <div className="flex flex-col md:flex-row  max-w-screen-xl p-3 md:p-8 lg:p-20">
    <div className="w-full md:w-1/2">
      <h2 className="font-display text-orange-500 text-6xl">Estamos a tus Órdenes</h2>
      <p>
        En Luptico estamos para servirte, Cualquier duda, comentario, critica constructiva o propuesta de colaboracion, no dudes en Escribirnos.
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          onClick={() => setDepartment('cabins')}
          className={`flex-1 rounded py-2 px-4 mr-2 ${department === 'cabins' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Cabins
        </button>
        <button
          type="button"
          onClick={() => setDepartment('venue')}
          className={`flex-1 rounded py-2 px-4 ml-2 ${department === 'venue' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Venue
        </button>
        <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />
      {errors.name && <span className="text-red-500">Name is required</span>}

      <input
        type="tel"
        placeholder="Phone"
        {...register("phone", { required: true, pattern: /^\d{10}$/ })}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />
      {errors.phone && <span className="text-red-500">Phone number must be 10 digits</span>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />
      {errors.email && <span className="text-red-500">Email is required</span>}

      <textarea
        placeholder="Message"
        {...register("message")}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      ></textarea>
      {errors.message && <span className="text-red-500">Message is required</span>}
        <button type="submit" className={`bg-orange-500 rounded-full`}>
          <span className={`flex flex-col text-white 'bg-green-600 hover:bg-green-400/10  p-3 rounded-full w-24 h-24 sm:w-32 sm:h-32 items-center justify-center text-center gap-2 shadow-2xl text-sm sm:text-base font-bold`}>Enviar</span>
        </button>
      </form>
    </div>
  </div>

}

export default Contact;
