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
  <div className="flex flex-col items-center gap-5 md:gap-10">
    <div className="flex w-48 h-48 relative">
      <Image src={img} fill alt="" className="rounded-full shadow-2xl" />
    </div>
    <div className="px-10 py-5 rounded-full bg-purple-400/70 md:bg-transparent md:px-0 md:py-0 flex flex-col items-center">
      <h2 className="text-xl bold">{company}</h2>
      {description && <p className="text-xl text-center">{description}</p>}
      <hr className="my-2 w-32" />
      <div className="flex justify-between">
        <StarRating rating={rating} />
        <div>
          <p>{rating} | a {distance}km</p>
        </div>
      </div>
    </div>
  </div>
);

export default VenueCard;
