import { Carousel, IconButton } from "@material-tailwind/react";
import { useState, useContext } from "react";
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
        infinite // Enable infinite sliding
      >
        {mode === "dark" ? (
          <img
            className="h-custom w-full object-cover"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/424975154_1086153345932847_8859462459704183829_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=r9a4YtkTYboAX_WQe4G&_nc_ht=scontent.flko1-2.fna&oh=00_AfBxM_lZyGVBbiSY-W6mW_u-gz6pbL6Vz5KuaPULqWUZPw&oe=65DB76C6"
            alt=""
          />
        ) : (
          <img
            className="h-custom w-full"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/424975154_1086153345932847_8859462459704183829_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=r9a4YtkTYboAX_WQe4G&_nc_ht=scontent.flko1-2.fna&oh=00_AfBxM_lZyGVBbiSY-W6mW_u-gz6pbL6Vz5KuaPULqWUZPw&oe=65DB76C6"
            alt=""
          />
        )}
        {mode === "dark" ? (
          <img
            className="h-custom w-full object-cover"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/425316545_1086153215932860_382467247897406810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ya1y9tAOrqUAX-sIWhp&_nc_ht=scontent.flko1-2.fna&oh=00_AfBRX9fM3yl0AgvSXP0DuSFyI_LWCPFkVuieKNFBrif9eA&oe=65DC26AB"
            alt=""
          />
        ) : (
          <img
            className="h-custom w-full"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/425316545_1086153215932860_382467247897406810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ya1y9tAOrqUAX-sIWhp&_nc_ht=scontent.flko1-2.fna&oh=00_AfBRX9fM3yl0AgvSXP0DuSFyI_LWCPFkVuieKNFBrif9eA&oe=65DC26AB"
            alt=""
          />
        )}
        {mode === "dark" ? (
          <img
            className="h-custom w-full "
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/424775867_1086153312599517_5607904448700715362_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=WwI-_3Z5tyAAX-TRWRz&_nc_ht=scontent.flko1-2.fna&oh=00_AfCw-svbdfgSB9KFfIIW-r38Zhc94C1fzLgiJFZ_4LgbKg&oe=65DB4449"
            alt=""
          />
        ) : (
          <img
            className="h-custom w-full"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/424775867_1086153312599517_5607904448700715362_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=WwI-_3Z5tyAAX-TRWRz&_nc_ht=scontent.flko1-2.fna&oh=00_AfCw-svbdfgSB9KFfIIW-r38Zhc94C1fzLgiJFZ_4LgbKg&oe=65DB4449"
            alt=""
          />
        )}
        {mode === "dark" ? (
          <img
            className="h-custom w-full object-cover"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/424920962_1086153332599515_838411433859100556_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hI2WSgnXtjEAX-wq2XU&_nc_ht=scontent.flko1-2.fna&oh=00_AfD_NuwtpffhK9OKZu9jppNWBUvpynjU2khxmkM0OdGEjA&oe=65DCA096"
            alt=""
          />
        ) : (
          <img
            className="h-custom w-full"
            src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/424920962_1086153332599515_838411433859100556_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hI2WSgnXtjEAX-wq2XU&_nc_ht=scontent.flko1-2.fna&oh=00_AfD_NuwtpffhK9OKZu9jppNWBUvpynjU2khxmkM0OdGEjA&oe=65DCA096"
            alt=""
          />
        )}
      </Carousel>
    );
  }
