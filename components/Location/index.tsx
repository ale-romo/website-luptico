"use client"
import Image from "next/image";
import Carousel from "@/components/Carousel";
import VenueCard, { Venue } from "../VenueCard";
import MapComponent from "../MapComponent";
import { useState } from "react";
import { center } from "../MapComponent";
import getDistance from "@/utils/calculateDistance";

interface Props {
	venues: Venue[];
}

const Location = ({ venues }: Props) => {
	const [selectedPlace, setSelectedPlace] = useState(0);

	for (const venue of venues) {
		const distance = getDistance([venue.lng, venue.lat], [center.lng, center.lat]);
		if (distance !== undefined) {
			venue.distance = distance;
		} else {
			venue.distance = Number.POSITIVE_INFINITY;
		}
	}

	const compareByDistance = (a: Venue, b: Venue) => a.distance! - b.distance!;
	venues.sort(compareByDistance);

  return (<section className="flex flex-col items-end w-full pb-20">
		 	<h2 className={`px-3 md:px-8 lg:px-20 font-display text-5xl md:text-6xl text-center md:text-right md:indent-40 text-orange-500 mb-14 md:mb-0`}>En el corazón del<br className="hidden lg:flex" />Valle de Guadalupe</h2>
			<div className="w-full relative flex flex-col items-center">
				<div className="w-11/12 md:w-5/12 rounded-3xl overflow-hidden h-96 relative md:absolute md:left-10 md:top-0 md:h-full">
					<MapComponent places={venues} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>
				</div>
				<div className="bg-gradient-to-t from-teal-100 to-purple-200 w-full -mt-20 md:my-10">
					<div style={{ backgroundImage: "url(/images/location-bg.webp)"}} className="bg-bottom  bg-contain bg-no-repeat flex flex-col">
						<Image src="/images/location-clip.svg" width="1195" height="46" className="w-full h-auto" alt="" />
						<div className="flex max-w-screen-xl justify-end">
							<div className="w-full md:w-1/2 pt-16 pb-5 md:py-5 px-10 text-white">
								<Carousel selectedPlace={selectedPlace}>
									{venues.map((venue, i)=> (
										<VenueCard key={`${i}-venueCard`} {...venue} setSelectedPlace={setSelectedPlace} id={i} />
									))}
								</Carousel>
							</div>
						</div>
						<Image src="/images/location-clip.svg" width="1195" height="46" className="w-full h-auto rotate-180" alt="" />
					</div>
				</div>
			</div>

		</section>
  );
};

export default Location;
