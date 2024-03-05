"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useFormspark } from '@formspark/use-formspark';

const Contact = () => {
  const [department, setDepartment] = useState('cabins');
  const [submit, submitting] = useFormspark({
    formId: "XfNcyK1rm"
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit(formData);
    setMessageSent(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return <div className="flex flex-col gap-6 md:gap-0 items-center max-w-screen-xl md:flex-row px-3 md:px-16 lg:px-20 pt-20">
    <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-left">
      <h2 className="font-display text-orange-500 text-6xl text-center">Estamos a tus Órdenes</h2>
      <p className="text-center w-2/3">
        En Luptico estamos para servirte, Cualquier duda, comentario, critica constructiva o propuesta de colaboracion, no dudes en Escribirnos a:
      </p>
      <ul className="flex flex-col gap-1 text-center">
        <li><a className="flex gap-3 items-center font-bold hover:underline" href="mailto:info@luptico.com" target="_blank"><Image src="images/email-icon.svg" alt="Email" width={0} height={0} className="w-6 h-auto" />info@luptico.com</a></li>
        <li><a className="flex gap-3 items-center font-bold hover:underline" href="https://wa.me/526643092240" target="_blank"><Image src="images/whatsapp-icon.svg" alt="Email" width={0} height={0} className="w-6 h-auto" />(+52)664 308-2240</a></li>
      </ul>
    </div>
    <div className="w-4/5 md:w-1/2">
      <form onSubmit={handleSubmit} className="gap-3 flex flex-col items-center relative">
        <div className="bg-yellow-100/70 rounded-full">
          <button
            type="button"
            onClick={() => setDepartment('cabins')}
            className={`flex-1 rounded-full py-2 px-4 font-bold ${department === 'cabins' ? 'bg-green-500 text-white' : 'text-yellow-500'}`}
          >
            Cabins
          </button>
          <button
            type="button"
            onClick={() => setDepartment('venue')}
            className={`flex-1 rounded-full py-2 px-4 font-bold ${department === 'venue' ? 'bg-green-500 text-white' : 'text-yellow-600'}`}
          >
            Venue
          </button>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-yellow-100/70 placeholder:text-yellow-400/90 placeholder:italic py-2 px-4 text-lg text-yellow-600"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-yellow-100/70 placeholder:text-yellow-400/90 placeholder:italic py-2 px-4 text-lg text-yellow-600"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-yellow-100/70 placeholder:text-yellow-400/90 placeholder:italic py-2 px-4 text-lg text-yellow-600"
        />

        <textarea
          placeholder="Mensaje"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-yellow-100/70 placeholder:text-yellow-400/90 placeholder:italic py-2 px-4 text-lg text-yellow-600 pr-12"
        ></textarea>
        <button type="submit" disabled={submitting} className={`bg-orange-500 rounded-full absolute right-0 bottom-0 translate-y-2/3 translate-x-1/2`}>
          <span className={`flex flex-col text-white bg-orange-600 hover:bg-orange-400/10  p-3 rounded-full w-24 h-24 items-center justify-center text-center gap-2 shadow-2xl text-sm sm:text-base font-bold`}>Enviar</span>
        </button>
      </form>
      {messageSent && <p className="w-full text-center font-bold text-green-500 bg-green-100 rounded-bl-lg p-3 pr-10">Tu mensaje se ha enviado, pronto estaremos en contacto</p>}
    </div>
  </div>

}

export default Contact;
