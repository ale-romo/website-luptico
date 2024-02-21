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
  reverse?: boolean;
}

const Slider = ({ slides, title, cta, reverse = false }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const fadeSlide = (direction: number) => {
    const totalSlides = slides.length;
    let nextSlide = (currentSlide + direction + totalSlides) % totalSlides;
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(nextSlide);
      setFade(false);
    }, 500)

  };

  return (
    <div className="w-full relative">
      <h2 className={`font-display text-5xl xl:text-6xl text-center ${reverse ? 'lg:text-left' : 'lg:text-right'} text-orange-500 mb-14 lg:-mb-8`}>{title}</h2>
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-full flex justify-center mx-auto">
        <div
          className={`w-full flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start w-full transition-opacity duration-500 ease-in-out`}>
          <div className="w-5/6 sm:w-full lg:w-1/2 relative mb-16 lg:mb-0">
            <div className="w-full sm:w-full h-64 sm:h-80 relative">
              <span
                className={`absolute bg-green-200 w-full h-full ${reverse ? 'translate-x-6 translate-y-6' : '-translate-x-6 -translate-y-6'}`}
                style={{ borderRadius: '40px' }}
              ></span>
              <Image
                src={slides[currentSlide].src}
                fill
                sizes="100vw, (min-width: 768px) 50vw"
                alt={title}
                className={`object-cover object-center rounded-3xl rounded-tr-none overflow-hidden z-10 relative transition-all duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
            <div className={`absolute ${reverse ? 'left-0 -translate-x-1/3' : 'right-0 translate-x-1/3'} bottom-0 translate-y-1/3  z-10`}>
              <Cta {...cta} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 relative">
            <p className={`text-base md:text-lg xl:text-xl px-16 text-center ${reverse ? 'lg:text-right' : 'lg:text-left'}  lg:pt-20 transition-all duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>{slides[currentSlide].description}</p>
            <div className="flex absolute w-full top-1/2 -translate-y-1/2 justify-between">
              <ArrowBtn direction="left" cb={() => fadeSlide(-1)} />
              <ArrowBtn direction="right" cb={() => fadeSlide(1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

