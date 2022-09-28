import {
  Center,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const Groceries = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Groceries {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            display={"flex"}
            borderRadius="0"
            justifyContent={"center"}
            bg={`#ececed`}
            transition="all .2s"
          >
            <MenuOptionGroup w="50%">
              <MenuItem _hover={{ bg: "white" }}>
                Fruits &amp; Vegetables
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Dairy &amp; Bakery</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Staples</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Snacks &amp; Branded Foods
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Beverages</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Personal Care</MenuItem>
            </MenuOptionGroup>
            <Center w={2}>
              <Divider orientation="vertical" w={"1px"} bg="grey" />
            </Center>
            <MenuOptionGroup w="50%">
              <MenuItem _hover={{ bg: "white" }}>Home Care</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Home &amp; Kitchen</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Mom &amp; Baby Care</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Pets</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Beauty</MenuItem>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
const PremiumFruits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Premium Fruits {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            display={"flex"}
            borderRadius="0"
            justifyContent={"center"}
            bg={`#ececed`}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            transition="all .2s"
          >
            <MenuOptionGroup w="50%">
              <MenuItem _hover={{ bg: "white" }}>Apples & Pears</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Avocado, Peach, Plum</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Banana, Melons & Coconut
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Cherries, Berries & Exotic Fruits
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Citrus, Mango & Grapes
              </MenuItem>
            </MenuOptionGroup>
            <Center w={2}>
              <Divider orientation="vertical" w={"1px"} bg="grey" />
            </Center>
            <MenuOptionGroup w="50%">
              <MenuItem _hover={{ bg: "white" }}>Dates</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Gift, Assorted & XL Packs
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Pomegranate, Papaya & Pineapple
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Seasonal & Minor Fruits
              </MenuItem>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
const HomeKitchen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Home & Kitchen {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            display={"flex"}
            borderRadius="0"
            justifyContent={"center"}
            bg={`#ececed`}
            transition="all .2s"
          >
            <MenuOptionGroup w="50%">
              <MenuItem _hover={{ bg: "white" }}>Kitchenware</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Dining</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Furnishing</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Home Decor</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Furniture</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Home Appliances</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Toys, Games & Fitness
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Electrical</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Bathroom & Laundry Accessories
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Disposables</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Stationery</MenuItem>
            </MenuOptionGroup>
            <Center w={2}>
              <Divider orientation="vertical" w={"1px"} bg="grey" />
            </Center>
            <MenuOptionGroup w="50%">
              <MenuItem _hover={{ bg: "white" }}>
                Bags & Travel Luggage
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Mops, Brushes & Scrubs
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Auto Care</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Garden & Outdoor</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Carpentry & work accessories
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Pooja Needs</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Bathroom & Laundry</MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Industrial & Scientific Supplies
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Home Safety & Automation
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>
                Kitchen & Bath Fixtures
              </MenuItem>
              <MenuItem _hover={{ bg: "white" }}>Power & Hand Tools</MenuItem>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
const Fashion = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Fashion {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            borderRadius="0"
            bg={`#ececed`}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            transition="all .2s"
          >
            <MenuItem _hover={{ bg: "white" }}>Men</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Women</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Boys</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Girls</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Infants</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

const Electronics = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Electronics {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            borderRadius="0"
            bg={`#ececed`}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            transition="all .2s"
          >
            <MenuItem _hover={{ bg: "white" }}>Mobiles & Tablets</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>TV & Speaker</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Home Appliances</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Computers</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Cameras</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Kitchen Appliances</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>
              Personal Care & Grooming
            </MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Smart Devices</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Gaming</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Accessories</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Accessories</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Office Products</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Health Care Devices</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>
              Electronic Musical Instruments
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
const Beauty = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Beauty {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            borderRadius="0"
            bg={`#ececed`}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            transition="all .2s"
          >
            <MenuItem _hover={{ bg: "white" }}>Make-Up</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Hair</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Skin Care</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Fragrances</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Personal Care</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Mom & Baby</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Men's Grooming</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Tools & Appliances</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Covid Essentials</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Wellness</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Fitness</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Ayush</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
const Jewellery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      {({ isOpen }) => (
        <>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} h="full">
            Jewellery {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList
            mt={-2}
            borderRadius="0"
            bg={`#ececed`}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            transition="all .2s"
          >
            <MenuItem _hover={{ bg: "white" }}>Fine Jewellery</MenuItem>
            <MenuItem _hover={{ bg: "white" }}>Jewellery</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export {
  Groceries,
  PremiumFruits,
  HomeKitchen,
  Fashion,
  Electronics,
  Beauty,
  Jewellery,
};
