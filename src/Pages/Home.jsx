import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import data from "../Components/Data/topc.json";
import greatdeals from "../Components/Data/greatdeal.json";
import { settings1, settings2 } from "../Components/Data/setting";
export const Home = () => {
  return (
    <>
      <Box margin="20px auto" w="95%">
        <Slider {...settings1}>
          {data.map((el) => (
            <img src={el.image} key={el.id} alt="" />
          ))}
        </Slider>
      </Box>
      <Box w="95%" m="auto">
        <img
          style={{ width: "100%" }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448196_Slim_Banner.jpg"
          alt=""
        />
      </Box>
      <Box w="full" m="auto">
        <img
          style={{ width: "100%" }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448249_Bank_Banner.jpg"
          alt=""
        />
      </Box>
      <Box w="99%" m="auto">
        <img
          style={{ width: "100%" }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448687_Image_3.jpg"
          alt=""
        />
      </Box>
      <Box>
        <Heading>Great Deals on Great Brands</Heading>
        <Flex my={"20px"}>
          <Box w="95%" mx={"auto"}>
            <Slider {...settings2}>
              {greatdeals.map((el) => (
                <Box key={el.id} border="1px solid red" bg={"white"} p="2">
                  <Box
                    position={"absolute"}
                    w="50px"
                    h="50px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
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
                    <Image w="full" src={el.img2}></Image>
                  </Box>
                  <Box>
                    <Text>{el.title}</Text>
                    <Text>{el.price}</Text>
                    <Text>{el["M.R.P"]}</Text>
                    <Text>{el.Save}</Text>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
