import { ReactNode, useRef, useEffect, useState } from "react";
import ArrowBtn from "@/components/ArrowBtn";

interface Props {
  children: ReactNode[];
  selectedPlace: number;
}

const Carousel = ({ children, selectedPlace }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  useEffect(() => {
		const scrollSnapSection = document.getElementById('scrollSnap');
    const element = document.getElementById(`item-${selectedPlace}`);
    scrollSnapSection?.classList.remove('snap-mandatory', 'snap-x');
    element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    setTimeout(() => {
      scrollSnapSection?.classList.add('snap-mandatory', 'snap-x');
    }, 1000);
	}, [selectedPlace]);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;

        const isLeftVisible = scrollLeft > 0;
        const isRightVisible = scrollLeft + clientWidth < scrollWidth;

        setIsLeftArrowVisible(isLeftVisible);
        setIsRightArrowVisible(isRightVisible);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const changeSlide = (direction: number) => {
    if (carouselRef.current) {
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;

      const newScrollLeft = currentScrollLeft + direction * cardWidth;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div id="scrollSnap" className="w-full overflow-scroll snap-x snap-mandatory" ref={carouselRef}>
        <div className="flex gap-6">
          {children &&
            children.map((child, i) => (
              <div key={i} id={`item-${i}`} className="flex-shrink-0 w-full snap-start">
                {child}
              </div>
            ))}
        </div>
      </div>
      {isLeftArrowVisible && (
        <div className="absolute top-1/2 -left-10 -translate-y-1/2 justify-between">
          <ArrowBtn direction="left" color="white" cb={() => changeSlide(-1)} />
        </div>
      )}
      {isRightArrowVisible && (
        <div className="absolute top-1/2 -right-10 -translate-y-1/2 justify-between">
          <ArrowBtn direction="right" color="white" cb={() => changeSlide(1)} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
