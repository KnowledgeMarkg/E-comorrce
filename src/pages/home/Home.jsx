import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Carosel from "../../components/heroSection/Carosel";
const Home = () => {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <Layout>
      <div
        style={{
          backgroundColor: mode === "dark" ? "#031525" : "",
          color: mode === "dark" ? "#FAFBFF" : "",
        }}
      >
        <Carosel />
        <HeroSection
          content="Experience the beauty of nail care with our premium nail polish collection. Choose from a variety of vibrant colors and long-lasting formulas for nails that make a statement."
          category="Nail Care"
          title="Nail Polish Collection"
          url="#"
          videoSrc="https://www.shutterstock.com/shutterstock/videos/1032404222/preview/stock-footage-manicure-and-pedicure-in-beauty-salon-spa-skin-care-moisturizing-concept-healthy-female-hands.webm"
        />

        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
      </div>
    </Layout>
  );
};

export default Home;
