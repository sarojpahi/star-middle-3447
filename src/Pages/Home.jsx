import { Box, Heading } from "@chakra-ui/react";
import greatdeals from "../Components/HomeComponents/Data/greatdeal.json";
import spaData from "../Components/HomeComponents/Data/SmartPhoneAcc.json";
import teData from "../Components/HomeComponents/Data/TrendingElec.json";
import tyData from "../Components/HomeComponents/Data/TyoharData.json";
import ffData from "../Components/HomeComponents/Data/FastandFeast.json";
import dmData from "../Components/HomeComponents/Data/Dhamaka.json";
import { MultiItemSlideCarousel } from "../Components/HomeComponents/MultiItemSlideCarousel";
import smartphonebyprice from "../Components/HomeComponents/Data/smartphonebyprice.json";
import { SingleSlideCarousel } from "../Components/HomeComponents/SingleSlideCarousel";
import { SimpleCarusel } from "../Components/HomeComponents/SimpleCarusel";
import { BestOfElectronics } from "../Components/HomeComponents/BestOfElectronics";
import { Tyhor } from "../Components/HomeComponents/Tyhor";
import { Dhamaka } from "../Components/HomeComponents/Dhamaka";
import { Navratri } from "../Components/HomeComponents/Navratri";
export const Home = () => {
  return (
    <>
      <SingleSlideCarousel />
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
      <Box my={2} p="4">
        <Box my={"20px"} ml="8px">
          <Box
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Great Deals on Great Brands
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Never Before Seen Prices
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Smartphones For Every Budget
            </Heading>
            <SimpleCarusel data={smartphonebyprice} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Bestselling Smartphones
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Smartphone Accessories
            </Heading>
            <SimpleCarusel data={spaData} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Trending Electronics
            </Heading>
            <SimpleCarusel data={teData} />
          </Box>
        </Box>
      </Box>
      <BestOfElectronics />
      <Box my={2} p="4">
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Electronics Bestsellers
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Tyohar Ready Deals
            </Heading>
            <SimpleCarusel data={tyData} />
          </Box>
        </Box>
      </Box>
      <Tyhor />
      <Box ml={6}>
        <Box
          display={["none", "none", "none", "block", "block", "block"]}
          my={"20px"}
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} mb="3">
            Dhamaka Deals
          </Heading>
          <SimpleCarusel data={dmData} />
        </Box>
        <Box
          display={["none", "none", "none", "block", "block", "block"]}
          my={"20px"}
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} mb="3">
            Fast & Feast
          </Heading>
          <SimpleCarusel data={ffData} />
        </Box>
      </Box>
      <Dhamaka />
      <Navratri />
    </>
  );
};
