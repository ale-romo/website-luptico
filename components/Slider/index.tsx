"use client"

import { useState } from 'react';
import Image from "next/image";
import ArrowBtn from "@/components/ArrowBtn";
import Cta, {Props as CtaProps} from '@/components/Cta';


interface Slide {
  src: string;
  description: string;
}

interface Props {
  slides: Slide[];
  title: string;
  cta: CtaProps;
}

const Slider = ({ slides, title, cta }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeSlide = (direction: number) => {
    const totalSlides = slides.length;
    let nextSlide = (currentSlide + direction + totalSlides) % totalSlides;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="w-full max-w-screen-xl relative">
      {slides.map(({ src, description }, i) => (
        <div
          key={i}
          className={`flex absolute left-0 top-0 w-full transition-opacity duration-500 ease-in-out ${
            currentSlide === i ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1/2 relative">
            <span
              className="absolute bg-green-200 -top-6 -left-6 w-full h-full"
              style={{ borderRadius: '40px' }}
            ></span>
            <Image
              src={src}
              width="546"
              height="231"
              alt={title}
              className="w-full h-auto rounded-3xl rounded-tr-none overflow-hidden z-10 relative"
            />
            <div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 z-10">
              <Cta {...cta} />
            </div>
          </div>
          <div className="w-1/2 py-10 flex flex-col justify-center gap-10 relative">
            <h2 className="font-display text-7xl text-right text-orange-500 pl-20">{title}</h2>
            <p className="text-xl px-20">{description}</p>
            <div className="flex absolute w-full top-1/2 -translate-y-1/2 justify-between">
              <ArrowBtn direction="left" cb={() => fadeSlide(-1)} />
              <ArrowBtn direction="right" cb={() => fadeSlide(1)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

