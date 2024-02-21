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
}

const VenueCard = ({ lat, lng, name, telephone, web,  desc, rating, img, setSelectedPlace, id= 0, distance }: Props) => {
  const centerArray: [number, number] = [center.lat, center.lng];
  const getImage = (img: string) => img === 'luptico.webp' ? '/images/location-bg.webp' : `https://www.larutadelvinoensenada.com/ruta-vino-valle-guadalupe/${img}`;

  return <div className="flex flex-col items-center">
    <div className="flex w-56 h-56 relative">
      <Image src={getImage(img)} fill alt="" sizes="200px" className="rounded-full  shadow-2xl" />
    </div>
    <div className="p-4 pt-10 w-full -mt-5 sm:-ml-5 md:-mt-5 bg-purple-400/70 flex flex-col items-center gap-4">
      <h2 className="text-4xl text-center font-display bold">{name}</h2>
      {desc && <p className="text-sm text-center line-clamp-3">{desc}</p>}
      <hr className="w-32" />
      <div className="flex justify-between">
        {rating && <StarRating rating={rating} />}
        <div>
          <p>{rating && `${rating} |`} a {distance ? distance : getDistance([lat, lng], centerArray)}km</p>
        </div>
        <button onClick={() => setSelectedPlace(id)}>Pin</button>
      </div>
    </div>
  </div>
};

export default VenueCard;
