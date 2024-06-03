import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { About1, About2 } from "@/public/images"; // Import local images

const carouselData = [
  {
    id: 1,
    image: About1,
    link: "/carousel-1",
    caption: "Caption for Slide 1",
  },
  {
    id: 2,
    image: About2,
    link: "/carousel-2",
    caption: "Caption for Slide 2",
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Calculate the transform percentage based on current slide
  const slidePosition = -current * 100;

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translate3d(${slidePosition}%, 0, 0)` }}
        >
          {carouselData.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <a>
                <Image
                  src={slide.image.src}
                  alt={`Slide ${index}`}
                  className="w-full h-full aspect-square rounded-3xl object-cover object-bottom"
                  width={500}
                  height={500}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex p-2 mb-2">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 ${
              current === idx
                ? "bg-gray-500 w-9 rounded-lg"
                : "bg-gray-300 rounded-full w-3"
            } transition-all duration-300 mx-1`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
