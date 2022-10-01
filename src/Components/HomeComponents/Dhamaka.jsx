import { Flex, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export const Dhamaka = () => {
  return (
    <>
      <Flex mt={"10px"} key={uuidv4()}>
        <Image
          display={["flex", "none", "none", "none", "none"]}
          src="https://www.jiomart.com/images/cms/section/images/1663759103_Header.jpg"
        />
      </Flex>

      <Flex
        key={uuidv4()}
        display={["flex", "flex", "flex", "none", "none", "none"]}
        w={["33.3%", "50%", "full", "full", "full", "full"]}
        flexDirection={"column"}
      >
        <Image
          key={uuidv4()}
          display={["none", "flex", "flex", "none", "none", "none"]}
          src="https://www.jiomart.com/images/cms/section/images/1663759103_Header.jpg"
        />
        <Flex w="full" align="center" m="auto" key={uuidv4()}>
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664009338_1.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664009347_2.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664009359_3.jpg"
          />
        </Flex>
        <Flex w="full" align="center" m="auto" key={uuidv4()}>
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664009393_4.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664009403_5.jpg"
          />
          <Image
            key={uuidv4()}
            w="100%"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664009412_6.jpg"
          />
        </Flex>
      </Flex>
    </>
  );
};
