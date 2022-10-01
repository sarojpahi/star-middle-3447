import { Flex, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export const LastMinBuy = () => {
  return (
    <Flex
      key={uuidv4()}
      mb={"15px"}
      display={["flex", "flex", "flex", "none", "none", "none"]}
      w={["33.3%", "50%", "full", "full", "full", "full"]}
      flexDirection={"column"}
    >
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774927_1.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774965_2.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774980_3.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774537_4.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774566_5.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663849422_Msite_6.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774631_7.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774652_8.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774676_9.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774707_10.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774729_11.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663774749_12.jpg"
        />
      </Flex>
    </Flex>
  );
};
