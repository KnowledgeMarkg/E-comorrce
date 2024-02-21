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
          <img
            className="h-96 w-full object-cover"
            src="https://shorturl.at/pBQW2"
            alt=""
          />
        ) : (
          <img
            className="h-96 w-full"
            src="https://img.freepik.com/free-vector/nail-studio-manicure-salon-brand-poster_107791-2215.jpg?w=900&t=st=1708528026~exp=1708528626~hmac=0452bc1d85eec8fa326bff0918170621472eec4cd7e0b749640b9f3b43d29f3e"
            alt=""
          />
        )}
        {mode === "dark" ? (
          <img
            className="h-96 w-full "
            src="https://shorturl.at/pBQW2"
            alt=""
          />
        ) : (
          <img
            className="h-96 w-full "
            src="https://img.freepik.com/premium-vector/nail-lacquer-sale-ads-with-hand-holding-products-3d-illustration-lovely-pink-background-with-party-flags_317810-2560.jpg?w=996"
            alt=""
          />
        )}
        {mode === "dark" ? (
          <img
            className="h-96 w-full object-cover"
            src="https://shorturl.at/pBQW2"
            alt=""
          />
        ) : (
          <img
            className="h-96 w-full"
            src="https://img.freepik.com/free-vector/red-nail-polish-3d-realistic-vector-advertising-banner-with-glass-bottle-glossy_33099-1331.jpg?w=740&t=st=1708527839~exp=1708528439~hmac=38048ec45a03186f3c3e9643256f9f9641869730f2a618562424798451a89aa2"
            alt=""
          />
        )}
      </Carousel>
    );
  }
  
