import { Text, Divider, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { Heading, CircleUI } from "../components/heading";

export const AboutMePage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="About Me" />
      <Divider
        zIndex="1"
        borderWidth="0,75px"
        borderColor="black"
        opacity="1"
        w="50%"
      />
      <CircleUI size="105px" bg="#FFBFBF" top="460px" left="190px" />
      <Text zIndex="2" w="40%" my="20">
        Javascript developer with experience of designing and building
        responsive web apps. Proficient with HTML/CSS and React. Have knowledge
        of UX and UI using Figma/Sketch/Adobe Products for creating mockups.
      </Text>
      <Text zIndex="2" fontSize="2xl" my="10">
        Contacts
      </Text>
      <Text zIndex="2" mb="4">
        olgaslobodchuk@gmail.com
      </Text>
      <Link
        zIndex="2"
        mb="4"
        href="https://github.com/olyan-slob?tab=repositories"
        isExternal
      >
        GitHub
        <ExternalLinkIcon mx="2px" />
      </Link>
      <Link
        zIndex="2"
        mb="20"
        href="https://www.linkedin.com/in/olga-slobodchuk/"
        isExternal
      >
        LinkedIn
        <ExternalLinkIcon mx="2px" />
      </Link>
      <CircleUI
        zIndex="1"
        size="120px"
        bg="#FFC3F9"
        top="850px"
        right="200px"
      />
      <Divider
        borderWidth="0,75px"
        borderColor="black"
        opacity="1"
        w="50%"
        mb="20"
      />
    </Flex>
  );
};
