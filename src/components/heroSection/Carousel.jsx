import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselDarkVariant() {
  return (
    <>
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="absolute -m-0 h-0 w-0 overflow-hidden whitespace-nowrap border-0 p-0">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="absolute -m-0 h-0 w-0 overflow-hidden whitespace-nowrap border-0 p-0">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-3 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-black bg-clip-padding p-0 -indent-999px opacity-50 transition-opacity duration-600ms ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full overflow-hidden">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-full hidden w-full opacity-0 transition-opacity duration-600ms ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg"
              className="block w-full"
              alt="First slide"
            />
            <div className="absolute inset-x-15% bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-full hidden w-full opacity-0 transition-opacity duration-600ms ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg"
              className="block w-full"
              alt="Second slide"
            />
            <div className="absolute inset-x-15% bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-full hidden w-full opacity-0 transition-opacity duration-600ms ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
              className="block w-full"
              alt="Third slide"
            />
            <div className="absolute inset-x-15% bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
