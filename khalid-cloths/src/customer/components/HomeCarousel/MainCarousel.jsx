import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const items = mainCarouselData.map((item) => (
  <img
    src={item.image}
    alt="dress"
    className=" cursor-pointer bg-cover "
    role=" presentation"
  />
));

const MainCarousel = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      controlsStrategy="alternate"
    />
  );
};

export default MainCarousel;
