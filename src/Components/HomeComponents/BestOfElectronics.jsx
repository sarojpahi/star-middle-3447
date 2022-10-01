import { Flex, Image } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";
export const BestOfElectronics = () => {
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
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431315_Best-of-Electronics-Appliances_01.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431458_Best-of-Electronics-Appliances_02.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431474_Best-of-Electronics-Appliances_03.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664472120_Best-of-Electronics--Appliances_04.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431556_Best-of-Electronics-Appliances_05.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431695_Best-of-Electronics-Appliances_06.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431728_Best-of-Electronics-Appliances_07.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664433134_Best-of-Electronics-Appliances_08.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664472103_Best-of-Electronics--Appliances_09.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431870_Best-of-Electronics-Appliances_10.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431894_Best-of-Electronics-Appliances_11.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664431926_Best-of-Electronics-Appliances_12.jpg"
        />
      </Flex>
    </Flex>
  );
};
