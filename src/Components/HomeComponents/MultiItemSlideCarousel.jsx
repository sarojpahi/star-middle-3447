import Slider from "react-slick";
import { Box, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { settings2 } from "./Data/setting";
import { NumberConvert } from "./Data/NumberConvert";
import { v4 as uuidv4 } from "uuid";

export const MultiItemSlideCarousel = ({ data }) => {
  return (
    <Box className="multi" key={uuidv4()}>
      <Slider {...settings2}>
        {data.map((el) => (
          <Box key={uuidv4()} bg={"white"}>
            <Box
              key={uuidv4()}
              border={["none", "1px solid rgba(111,114,132,.25)"]}
              borderRadius="5px"
              p="2"
              mr="10px"
            >
              <Box
                key={uuidv4()}
                position={"absolute"}
                w="50px"
                h="50px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                zIndex="5"
                bgImage={
                  "https://www.jiomart.com/assets/version1664452279/jiomsite/images/icons/offer_bg.svg"
                }
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize={"cover"}
              >
                <Text
                  color={"white"}
                  fontSize="12px"
                  textAlign={"center"}
                  w="40px"
                >
                  {el.off}
                  <span style={{ fontSize: "10px" }}>%</span> OFF
                </Text>
              </Box>
              <Box p={2}>
                <img src={el.img2} className="ImageItem" alt=""></img>
              </Box>
              <Box>
                <Text fontSize={15} fontWeight={"bold"}>
                  {el.title}
                </Text>
                <Text fontSize={17} fontWeight={"bold"}>
                  ₹ {NumberConvert(el.price)}
                </Text>
                <Text fontSize={12}>
                  M.R.P: <del>₹ {NumberConvert(el["M.R.P"])}</del>
                </Text>
                <Text fontSize={10} color={"green"}>
                  Save ₹ {NumberConvert(el.Save)}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
