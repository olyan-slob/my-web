import { Text, Divider, Flex } from "@chakra-ui/react";

import { Heading, CircleUI } from "../components/heading";

export const AboutMePage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="About Me" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <CircleUI size="105px" bg="#FFBFBF" top="460px" left="190px" />
      <Text w="40%" my="20">
        Javascript developer with experience of designing and building
        responsive web apps. Proficient with HTML/CSS and React. Have knowledge
        of UX and UI using Figma/Sketch/Adobe Products for creating mockups.
      </Text>
      <Text fontSize="2xl" my="10">
        Contacts
      </Text>

      <CircleUI size="120px" bg="#FFC3F9" top="540px" right="200px" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
    </Flex>
  );
};
