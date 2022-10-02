import { Box, Heading } from "@chakra-ui/react";
import greatdeals from "../Components/HomeComponents/Data/greatdeal.json";
import electbestseller from "../Components/HomeComponents/Data/ElelctronicsBestSeller.json";
import neverbefore from "../Components/HomeComponents/Data/Neverseenbefore.json";
import spaData from "../Components/HomeComponents/Data/SmartPhoneAcc.json";
import teData from "../Components/HomeComponents/Data/TrendingElec.json";
import tyData from "../Components/HomeComponents/Data/TyoharData.json";
import ffData from "../Components/HomeComponents/Data/FastandFeast.json";
import dmData from "../Components/HomeComponents/Data/Dhamaka.json";
import osData from "../Components/HomeComponents/Data/OneShop.json";
import ElecBestDealData from "../Components/HomeComponents/Data/ElecBestdealCarousel.json";
import mangdeep from "../Components/HomeComponents/Data/mangdeep.json";
import dcData from "../Components/HomeComponents/Data/DeepClean.json";
import cleanData from "../Components/HomeComponents/Data/Clean.json";
import lmbData from "../Components/HomeComponents/Data/LastMinBuy.json";
import household from "../Components/HomeComponents/Data/Household.json";
import { MultiItemSlideCarousel } from "../Components/HomeComponents/MultiItemSlideCarousel";
import smartphonebyprice from "../Components/HomeComponents/Data/smartphonebyprice.json";
import { SingleSlideCarousel } from "../Components/HomeComponents/SingleSlideCarousel";
import { SimpleCarusel } from "../Components/HomeComponents/SimpleCarusel";
import { BestOfElectronics } from "../Components/HomeComponents/BestOfElectronics";
import { Tyhor } from "../Components/HomeComponents/Tyhor";
import { Dhamaka } from "../Components/HomeComponents/Dhamaka";
import { Navratri } from "../Components/HomeComponents/Navratri";
import { Puja } from "../Components/HomeComponents/Puja";
import { Carousel3slide } from "../Components/HomeComponents/Carousel3slide";
import { DeepClean } from "../Components/HomeComponents/DeepClean";
import { LastMinBuy } from "../Components/HomeComponents/LastMinBuy";
import { v4 as uuidv4 } from "uuid";
export const Home = () => {
  return (
    <Box w="full" mt="130px">
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
      <Box my={2} p={["0", "4"]}>
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
            <MultiItemSlideCarousel data={neverbefore} />
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
      <Box my={2} p={["0", "4"]}>
        <Box ml="8px">
          <Box
            mt={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Electronics Bestsellers
            </Heading>
            <MultiItemSlideCarousel data={electbestseller} />
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
      <Box px="4">
        <Box ml={"8px"}>
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
      </Box>
      <Carousel3slide data={ElecBestDealData} />
      <Tyhor />
      <Dhamaka />
      <Navratri />
      <Puja />
      <Box my={2} p={["0", "4"]}>
        <Box ml={"8px"}>
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              One Shop For All Your Aarti Needs
            </Heading>
            <SimpleCarusel data={osData} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
      </Box>
      <Carousel3slide data={mangdeep} />
      <Box my={2} p={["0", "4"]}>
        <Box ml={"8px"}>
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Deep Clean Your Home
            </Heading>
            <SimpleCarusel data={dcData} />
          </Box>
        </Box>
      </Box>
      <DeepClean />
      <Carousel3slide data={cleanData} />
      <LastMinBuy />
      <Box my={2} p={["0", "4"]}>
        <Box ml={"8px"}>
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Last Minute Festive Buys
            </Heading>
            <SimpleCarusel data={lmbData} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
      </Box>
      <Carousel3slide data={household} />
      <Box
        key={uuidv4()}
        m="10px auto"
        w="98%"
        display={["none", "none", "none", "block", "block", "block"]}
      >
        <img
          style={{ width: "100%" }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663832288_TRS_Gift_Banner_1680-X-320_100kb.jpg"
          alt=""
        />
      </Box>
      <Box
        key={uuidv4()}
        m="10px auto"
        w="full"
        display={["block", "block", "block", "none", "none", "none"]}
      >
        <img
          style={{ width: "100%" }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774041_TRS_Gift_Banner_100kb.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
};
