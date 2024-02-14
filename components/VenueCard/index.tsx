import Image from "next/image";
import StarRating from "@/components/StarRating";
import { center } from "../MapComponent";
import getDistance from "@/utils/calculateDistance";


export interface Props {
  lat: number;
  type: string;
  lng: number;
  name: string;
  telephone?: string;
  web?: string;
  desc?: string;
  rating: number;
  img: string;
}

const VenueCard = ({ lat, lng, name, telephone, web,  desc, rating, img }: Props) => {
  const centerArray: [number, number] = [center.lat, center.lng];
  const getImage = (img: string) => img === 'luptico.webp' ? '/images/location-bg.webp' : `https://www.larutadelvinoensenada.com/ruta-vino-valle-guadalupe/${img}`;

  return <div className="flex flex-col items-center gap-5 md:gap-10">
    <div className="flex w-48 h-48 relative">
      <Image src={getImage(img)} fill alt="" sizes="200px" className="rounded-full shadow-2xl" />
    </div>
    <div className="px-10 py-5 rounded-full bg-purple-400/70 md:bg-transparent md:px-0 md:py-0 flex flex-col items-center">
      <h2 className="text-xl bold">{name}</h2>
      {desc && <p className="text-xl text-center">{desc}</p>}
      <hr className="my-2 w-32" />
      <div className="flex justify-between">
        {rating && <StarRating rating={rating} />}
        <div>
          <p>{rating && `${rating} |`} a {getDistance([lat, lng], centerArray)}km</p>
        </div>
      </div>
    </div>
  </div>
};

export default VenueCard;
