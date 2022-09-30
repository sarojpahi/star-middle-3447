import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import { settings2 } from "./Data/setting";
export const SimpleCarusel = ({ data }) => {
  return (
    <Box className="multi">
      <Slider {...settings2}>
        {data.map((el) => (
          <Box key={el.id} bg={"white"}>
            <Box p={2}>
              <img src={el.filterimage} className="ImageItem" alt=""></img>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
