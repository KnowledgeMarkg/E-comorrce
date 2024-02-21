import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

export default function Carosel() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <Carousel
      className="rounded-xl flex pt-2 mx-auto"
      autoplay
      interval={5000} // 5 seconds interval
      currentIndex={currentSlide}
      onChange={setCurrentSlide}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {mode === "dark" ? (
        <img className="h-full w-full " src="https://shorturl.at/pBQW2" alt="" />
      ) : (
        <img
          className="h-full w-full"
          src="https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg"
          alt=""
        />
      )}
      {mode === "dark" ? (
        <img className="h-full w-full" src="https://shorturl.at/pBQW2" alt="" />
      ) : (
        <img
          className="h-full w-full"
          src="https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg"
          alt=""
        />
      )}
      {mode === "dark" ? (
        <img className="h-full w-full" src="https://shorturl.at/pBQW2" alt="" />
      ) : (
        <img
          className="h-full w-full"
          src="https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg"
          alt=""
        />
      )}
    </Carousel>
  );
}
