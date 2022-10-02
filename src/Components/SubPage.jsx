import { Flex } from "@chakra-ui/react";
import React from "react";
import { CategoriesSideBar } from "./SubPages/CategoriesSideBar";
import { DataSection } from "./SubPages/DataSection";
export const SubPage = ({ headerImage, menudata, cartdata }) => {
  return (
    <Flex w="full" bg={"blackAlpha.100"}>
      <CategoriesSideBar menudata={menudata} />
      <DataSection headerImage={headerImage} cartdata={cartdata} />
    </Flex>
  );
};
