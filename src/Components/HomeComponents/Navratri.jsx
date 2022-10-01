import { Flex, Image } from "@chakra-ui/react";
import { Carousel3slide } from "./Carousel3slide";
import { v4 as uuidv4 } from "uuid";
import data from "./Data/TyoharReadyDeals.json";
export const Navratri = () => {
  return (
    <>
      <Flex
        key={uuidv4()}
        my="10px"
        display={["flex", "flex", "flex", "none", "none", "none"]}
        w={["33.3%", "50%", "full", "full", "full", "full"]}
        flexDirection={"column"}
      >
        <Flex w="full" align="center" m="auto" key={uuidv4()}>
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008647_1.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008656_2.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008665_3.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto" key={1184}>
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008700_4.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008708_5.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008719_6.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto" key={uuidv4()}>
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008751_7.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008763_8.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008769_9.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto" key={uuidv4()}>
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008802_10.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008812_11.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008825_12.jpg"
          />
        </Flex>
      </Flex>
      <Carousel3slide data={data} />
    </>
  );
};
