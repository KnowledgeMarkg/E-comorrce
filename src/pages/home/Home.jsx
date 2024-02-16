import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import CarouselDarkVariant from "../../components/heroSection/Carousel";
const Home = () => {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <Layout>
      <div  style={{
                  backgroundColor: mode === "dark" ? "#031525" : "",
                  color: mode === "dark" ? "#FAFBFF" : "",
                }}>
        <HeroSection />
        {/* <CarouselDarkVariant/> */}
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial/>
      </div>
    </Layout>
  );
};

export default Home;
