import { Text, Divider, Flex } from "@chakra-ui/react";

import { Heading, CircleUI } from "../components/heading";

export const TechStackPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="Tech Stack" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <CircleUI zIndex="1" size="105px" bg="#FFBFBF" top="480px" left="200px" />
      <Text zIndex="2" mt="20" mb="4">
        React Javacript Typescript
      </Text>
      <Text zIndex="2" my="4">
        Figma Adobe GitHub Git
      </Text>
      <Text zIndex="2" mt="4" mb="20">
        Sketch HTML CSS Slack
      </Text>
      <CircleUI
        zIndex="1"
        size="120px"
        bg="#FFC3F9"
        top="610px"
        right="200px"
      />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
    </Flex>
  );
};
