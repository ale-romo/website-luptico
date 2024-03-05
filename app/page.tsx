import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import places from '@/public/places.json';

const navItems = [
  {
    title: 'Airbnb',
    icon: '/images/ab-logo.svg',
    href: 'https://airbnb.com',
  },
  {
    title: 'Google Maps',
    icon: '/images/maps-logo.svg',
    href: 'https://maps.google.cm',
  },
  {
    title: 'Facebook',
    icon: '/images/fb-logo.svg',
    href: 'https://facebook.com',
  },
  {
    title: 'Instagram',
    icon: '/images/ig-logo.svg',
    href: 'http://instagram.com',
  },
];

const estancias = {
  title: "Nuestras Estancias",
  cta: {
    title: "Reserva ahora",
    href: "https://airbnb.com",
    icon: "/images/ab-logo-white.svg",
  },
  slides: [
    {
      src: '/images/estancias/living-room.webp',
      description: 'Cabanas de ladrillo bien bonitas que hay que describir mejor que en este parrafo que nomas estoy llenando por tener algo. Puede ser un carrucel'
    },
    {
      src: '/images/estancias/living-room.webp',
      description: 'ue describir mejor que en este parrafo que nomas estoy llenando por tener algo. Puede ser un carrucel Cabanas de ladrillo bien bonitas que hay que'
    },
    {
      src: '/images/estancias/living-room.webp',
      description: 'Puede ser un carrucel. Cabanas de ladrillo bien bonitas que hay que describir mejor que en este parrafo que nomas estoy llenando por tener algo. '
    }
  ],
}

const jardin = {
  title: "Nuestro Jardín",
  cta: {
    title: "Reserva ahora",
    href: "https://airbnb.com",
    bg1: "bg-orange-500",
    bg2: "bg-orange-600 hover:bg-orange-400/10",
  },
  slides: [
    {
      src: '/images/estancias/living-room.webp',
      description: 'Cabanas de ladrillo bien bonitas que hay que describir mejor que en este parrafo que nomas estoy llenando por tener algo. Puede ser un carrucel'
    },
    {
      src: '/images/estancias/living-room.webp',
      description: 'ue describir mejor que en este parrafo que nomas estoy llenando por tener algo. Puede ser un carrucel Cabanas de ladrillo bien bonitas que hay que'
    },
    {
      src: '/images/estancias/living-room.webp',
      description: 'Puede ser un carrucel. Cabanas de ladrillo bien bonitas que hay que describir mejor que en este parrafo que nomas estoy llenando por tener algo. '
    }
  ],
}



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="mb-20 w-full sticky top-0 z-40">
        <Navbar navItems={navItems} />
      </div>
      <section className="mb-32 md:mb-28 w-full max-w-screen-xl  px-3 md:px-8 lg:px-20 flex flex-col gap-28">
        <Slider {...estancias} />
        <Slider {...jardin} reverse />
      </section>
      <Location venues={places}/>
      <section>
        <Contact />
      </section>
      <div className="w-full max-w-screen-xl px-3 md:px-10 pt-20">
        <p className="w-full flex justify-center bg-no-repeat pt-10 pb-8" style={{ backgroundImage: 'url(/images/footer-bg.svg)' }}>© 2024 Luptico. All rights reserved <span className="px-10">|</span> A website by <a href="http://mintitmedia.com">Mint IT Media</a></p>
      </div>
    </main>
  );
}
