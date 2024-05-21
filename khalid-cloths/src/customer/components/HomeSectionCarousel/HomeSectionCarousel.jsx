import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "@headlessui/react";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div  className=" relative px-4 lg:px-8 ">
      <div className=" relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          responsive={responsive}
        />
        <Button variant="contained"  className=" z-50" sx={{ position:" absolute", top:"8rem", right:"0rem"}} >
        <FaChevronLeft />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
