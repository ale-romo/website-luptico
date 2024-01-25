import Image from "next/image";
import StarRating from "@/components/StarRating";


export interface Props {
  img: string;
  description?: string;
  company: string;
  distance: string;
  rating: number;
}

const VenueCard = ({ img, description, company, distance, rating }: Props) => (
  <div className="flex flex-col items-center">
    <div className="flex w-48 h-48 relative mb-10">
      <Image src={img} fill alt="" className="rounded-full shadow-2xl" />
    </div>
    <h2>{company}</h2>
    {description && <p className="text-xl text-center">{description}</p>}
    <hr className="my-2 w-32" />
    <div className="flex justify-between">
      <StarRating rating={rating} />
      <div>
        <p>{rating} | a {distance}km</p>
      </div>
    </div>
  </div>
);

export default VenueCard;
