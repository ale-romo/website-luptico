import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Navbar navItems={navItems} />
      <section className="mt-32 w-full max-w-screen-xl">
        <Slider {...estancias} />
      </section>
    </main>
  );
}
