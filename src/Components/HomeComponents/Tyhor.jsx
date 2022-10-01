import { Flex, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export const Tyhor = () => {
  return (
    <Flex
      key={uuidv4()}
      display={["flex", "flex", "flex", "none", "none", "none"]}
      w={["33.3%", "50%", "full", "full", "full", "full"]}
      flexDirection={"column"}
    >
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436277_Tyohaar-Ready-sale_01.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436319_Tyohaar-Ready-sale_02.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436333_Tyohaar-Ready-sale_03.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436349_Tyohaar-Ready-sale_04.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436365_Tyohaar-Ready-sale_05.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436379_Tyohaar-Ready-sale_06.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436401_Tyohaar-Ready-sale_07.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664539822_Audi_gears.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664539868_Kitchen_appliances.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436466_Tyohaar-Ready-sale_10.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436488_Tyohaar-Ready-sale_11.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436539_Tyohaar-Ready-sale_12.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436563_Tyohaar-Ready-sale_13.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436585_Tyohaar-Ready-sale_14.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436606_Tyohaar-Ready-sale_15.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436628_Tyohaar-Ready-sale_16.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436648_Tyohaar-Ready-sale_17.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664436668_Tyohaar-Ready-sale_18.jpg"
        />
      </Flex>
    </Flex>
  );
};
