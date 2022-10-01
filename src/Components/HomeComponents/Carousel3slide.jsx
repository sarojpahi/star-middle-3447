import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings3 } from "./Data/setting";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { v4 as uuidv4 } from "uuid";
export const Carousel3slide = ({ data }) => {
  return (
    <Box my="5px" mx="auto" w="98%" px="2" className="multi1" key={uuidv4()}>
      {data[0].filterimage ? (
        <Slider {...settings3}>
          {data.map((el) => (
            <Box key={uuidv4()}>
              <Box
                key={uuidv4()}
                className="multi1ImageBox"
                display={["none", "none", "none", "block", "block", "block"]}
              >
                <Image
                  key={uuidv4()}
                  className="multi1Image"
                  src={[el.filterimage]}
                  alt=""
                />
              </Box>
              <Box
                key={uuidv4()}
                display={["block", "block", "block", "none", "none", "none"]}
              >
                <Image
                  key={uuidv4()}
                  className="multi1Image"
                  src={[el.filterimage2]}
                  alt=""
                />
              </Box>
            </Box>
          ))}
        </Slider>
      ) : (
        <Box
          key={uuidv4()}
          display={["block", "block", "block", "none", "none", "none"]}
        >
          <Slider {...settings3}>
            {data.map((el) => (
              <Box
                key={uuidv4()}
                display={["block", "block", "block", "none", "none", "none"]}
              >
                <Image
                  key={uuidv4()}
                  className="multi1Image"
                  src={[el.filterimage2]}
                  alt=""
                />
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};
