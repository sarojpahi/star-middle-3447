import { Box, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings3 } from "./Data/setting";
import data from "./Data/TyoharReadyDeals.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
export const Navratri = () => {
  return (
    <>
      <Box margin="20px auto" w="96%" className="multi1">
        <Slider {...settings3}>
          {data.map((el) => (
            <Box key={el.id} h="100px">
              <Image className="multi1Image" src={el.filterimage} alt="" />
            </Box>
          ))}
        </Slider>
      </Box>
      <Flex
        mt="18px"
        display={["flex", "flex", "flex", "none", "none", "none"]}
        w={["33.3%", "50%", "full", "full", "full", "full"]}
        flexDirection={"column"}
      >
        <Flex w="full" align="center" m="auto">
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008647_1.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008656_2.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008665_3.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto">
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008700_4.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008708_5.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008719_6.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto">
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008751_7.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008763_8.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008769_9.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto">
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008802_10.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008812_11.jpg"
          />
          <Image
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008825_12.jpg"
          />
        </Flex>
      </Flex>
    </>
  );
};
