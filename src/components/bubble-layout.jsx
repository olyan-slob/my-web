import { Divider, Flex } from "@chakra-ui/react";
import { CircleUI } from "../components/heading";

export const BubbleLayout = ({ children }) => {
  return (
    <Flex flexDir="column" alignItems="center" pos="relative" mb="20" w="100%">
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <CircleUI zIndex="1" size="105px" bg="#FFBFBF" top="20px" left="200px" />
      {children}
      <CircleUI
        zIndex="1"
        size="120px"
        bg="#FFC3F9"
        bottom="20px"
        right="200px"
      />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
    </Flex>
  );
};
