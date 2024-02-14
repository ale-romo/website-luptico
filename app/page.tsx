import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Location from "@/components/Location";

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
    icon: "/images/ab-logo-white.svg",
    bg1: "bg-orange-400",
    bg2: "bg-orange-500 hover:bg-orange-400/90",
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

const venues = [
  {
    img: '/images/venues/vinedo-img.webp',
    company: 'Nombre Viñedo',
    distance: '2.1',
    rating: 3.5,
  },
  {
    img: '/images/venues/vinedo-img.webp',
    company: 'Nombre Viñedo',
    distance: '2.1',
    rating: 3.4,
  },
  {
    img: '/images/venues/vinedo-img.webp',
    company: 'Nombre Viñedo',
    distance: '2.1',
    rating: 3.3,
  },
  {
    img: '/images/venues/vinedo-img.webp',
    company: 'Nombre Viñedo',
    distance: '2.1',
    rating: 3.5,
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="mb-20 w-full sticky top-0 z-40">
        <Navbar navItems={navItems} />
      </div>
      <section className="mb-32 md:mb-44 w-full max-w-screen-xl  px-3 md:px-8 lg:px-20 flex flex-col gap-20">
        <Slider {...estancias} />
        <Slider {...jardin} reverse />
      </section>
      <Location venues={venues}/>
    </main>
  );
}
