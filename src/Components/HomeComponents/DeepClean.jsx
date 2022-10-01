import { Flex, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export const DeepClean = () => {
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
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664007859_1.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664007897_2.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664007925_3.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664007955_4_1.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664007965_5.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664007975_6.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008010_7_1.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008018_8.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008029_9.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008060_10_1.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008069_11.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664008081_12.jpg"
        />
      </Flex>
    </Flex>
  );
};
