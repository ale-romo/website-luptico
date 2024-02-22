import Image from "next/image";
import { Dispatch, SetStateAction } from 'react';
import StarRating from "@/components/StarRating";
import { center } from "../MapComponent";
import getDistance from "@/utils/calculateDistance";

export interface Venue {
  lat: number;
  type: string;
  lng: number;
  name: string;
  telephone: string;
  web: string;
  desc: string;
  rating?: number;
  img: string;
  distance?: number;
}



export interface Props extends Venue {
  setSelectedPlace: Dispatch<SetStateAction<number>>;
  id?: number;
  selectedPlace: number;
}

const VenueCard = ({ lat, lng, name, telephone, web,  desc, rating, img, setSelectedPlace, id = 0, distance, type, selectedPlace }: Props) => {
  const centerArray: [number, number] = [center.lat, center.lng];

  const socialMedia = [
    {
      href: `tel:${telephone}`,
      icon: '/images/phone-logo.svg'
    },
    {
      href: `${web}`,
      icon: '/images/website-logo.svg'
    },
    {
      href: `https://www.google.com/maps?q=${lat},${lng}`,
      icon: '/images/maps-logo-white.svg'
    },
  ]

  const getImage = (img: string) => img === 'luptico.webp' ? '/images/location-bg.webp' : `https://www.larutadelvinoensenada.com/ruta-vino-valle-guadalupe/${img}`;

  const getPinIcon = (type:string, active: boolean) => `/images/pin${type === 'vinedo' ? 'Wine': ''}${type === 'restaurante' ? 'Food' : ''}${type === 'Luptico' ? 'Luptico': ''}${active ? 'Active' : ''}.svg`;

  return <div className="flex flex-col items-center">
    <div className="flex w-56 h-56 relative">
      <Image src={getImage(img)} fill alt="" sizes="200px" className="rounded-full  shadow-2xl" />
    </div>
    <div className="p-4 pt-10 w-full -mt-5 sm:-ml-5 md:-mt-5 bg-purple-400/70 flex flex-col items-center gap-2">
      <button onClick={() => setSelectedPlace(id)}>
        <h2 className="text-4xl text-center font-display bold flex gap-4">
          <Image src={getPinIcon(type, id === selectedPlace)} alt="Find in map" className="w-7 h-auto" width="0" height="0" />
          {name}
        </h2>
        </button>
      {desc && <p className="text-sm text-center line-clamp-3 text-purple-100 pb-2">{desc}</p>}
      <hr className="w-32" />
      <div className="flex justify-between">
        {rating && <StarRating rating={rating} />}
        <p>
          {rating && `${rating} |`}
          {id !== 0 && (
            <span className="text-purple-100">{`a ${distance ? distance : getDistance([lat, lng], centerArray)}km de`} Lúptico</span>
          )}
        </p>
      </div>
      <div className={`w-full z-10 relative flex justify-center gap-6`}>
        {socialMedia.map(({ href, icon }) => (
          <a key={href} href={href} title={name} target="_blank">
            <Image src={icon} width="40" height="32" className="h-5 md:h-7 w-auto" alt={name} />
          </a>
        ))}
      </div>
    </div>
  </div>
};

export default VenueCard;
