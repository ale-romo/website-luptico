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
  <div>
    <div className="overflow-hidden rounded-full mb-5">
      <Image src={img} width="250" height="150" className="w-full h-auto" alt="" />
    </div>
    <h2>{company}</h2>
    {description && <p className="text-xl text-center">{description}</p>}
    <hr className="my-2" />
    <div className="flex justify-between">
      <StarRating rating={rating} />
      <div>
        <p>{rating} | a {distance}km</p>
      </div>
    </div>
  </div>
);

export default VenueCard;
