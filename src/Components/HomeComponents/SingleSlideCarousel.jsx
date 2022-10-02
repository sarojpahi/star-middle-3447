import { Box } from "@chakra-ui/react";
import data from "./Data/topc.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { v4 as uuidv4 } from "uuid";
import { settings1 } from "./Data/setting";
export const SingleSlideCarousel = () => {
  return (
    <Box mx="auto" pt="20px" w="full" className="single" key={uuidv4()}>
      <Slider {...settings1}>
        {data.map((el) => (
          <img
            style={{ height: "320px" }}
            src={el.image}
            key={uuidv4()}
            alt=""
          />
        ))}
      </Slider>
    </Box>
  );
};
