import { Flex, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
export const Puja = () => {
  return (
    <Flex
      key={uuidv4()}
      mt="5px"
      display={["flex", "flex", "flex", "none", "none", "none"]}
      w={["33.3%", "50%", "full", "full", "full", "full"]}
      flexDirection={"column"}
    >
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747310_TRS_Puja-Needs_UI-01.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747357_TRS_Puja-Needs_UI-02.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747393_TRS_Puja-Needs_UI-03.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747432_TRS_Puja-Needs_UI-04.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747464_TRS_Puja-Needs_UI-05.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747478_TRS_Puja-Needs_UI-06.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747507_TRS_Puja-Needs_UI-07.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747532_TRS_Puja-Needs_UI-08.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663941252_TRS_Puja-Needs_UI-09_Tile.jpg"
        />
      </Flex>
      <Flex w="full" align="center" m="auto" key={uuidv4()}>
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747667_TRS_Puja-Needs_UI-10.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747743_TRS_Puja-Needs_UI-11.jpg"
        />
        <Image
          key={uuidv4()}
          w="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663747764_TRS_Puja-Needs_UI-12.jpg"
        />
      </Flex>
    </Flex>
  );
};
