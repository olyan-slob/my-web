import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

import { MenuUI } from "./menu";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      px="5"
      pt="4"
      pos="sticky"
      top="0"
      right="0"
      zIndex="1"
    >
      <Link to="/">
        <Text fontSize="24" fontFamily="heading">
          home
        </Text>
      </Link>
      <MenuUI />
    </Flex>
  );
};
