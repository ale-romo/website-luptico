"use client"
import Image from "next/image";
import Carousel from "@/components/Carousel";
import VenueCard, { Props as Venue } from "../VenueCard";
import MapComponent from "../MapComponent";

interface Props {
	venues: Venue[];
}

const Location = ({ venues }: Props) => {
  return (
    <section className="bg-gradient-to-t from-teal-100 to-purple-200 w-full">
			<div style={{ backgroundImage: "url(/images/location-bg.webp)"}} className="bg-bottom bg-contain bg-no-repeat">
				<Image src="/images/location-clip.svg" width="1195" height="46" className="w-full h-auto -mb-12" alt="" />
				<div className="flex max-w-screen-xl">
					<div className="w-1/2" style={{ height: "50vh" }}>
						<MapComponent />
					</div>
					<div className="w-1/2 py-20 px-10 text-white">
						<Carousel>
							{venues.map((venue, i)=> (
								<VenueCard key={i} {...venue} />
							))}
						</Carousel>
					</div>
				</div>
				<Image src="/images/location-clip.svg" width="1195" height="46" className="w-full h-auto -mt-12 rotate-180" alt="" />
			</div>
    </section>
  );
};

export default Location;
