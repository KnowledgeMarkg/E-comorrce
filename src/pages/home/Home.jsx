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
          content="It's a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory."
          category="MOBA"
          title="LEAGUE OF LEGENDS"
          url="#"
          videoSrc="https://www.leagueoflegends.com/static/hero-3e934348790824f4b800524f96a93020.mp4"
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
