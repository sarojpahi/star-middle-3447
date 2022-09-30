import { Box } from "@chakra-ui/react";
import data from "./Data/topc.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { settings1 } from "./Data/setting";
export const SingleSlideCarousel = () => {
  return (
    <Box margin="20px auto" w="full" className="single">
      <Slider {...settings1}>
        {data.map((el) => (
          <img style={{ height: "320px" }} src={el.image} key={el.id} alt="" />
        ))}
      </Slider>
    </Box>
  );
};
