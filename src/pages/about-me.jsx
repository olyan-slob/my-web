import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BubbleLayout } from "../components/bubble-layout";
import { Heading } from "../components/heading";

export const AboutMePage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="About Me" />
      <Text mb="2" fontSize="2xl">
        Olga Slobodchuk
      </Text>
      <BubbleLayout>
        <Text zIndex="2" w="40%" my="20">
          Javascript developer with experience of designing and building
          responsive web apps. Proficient with HTML/CSS and React. Have
          knowledge of UX and UI using Figma/Sketch/Adobe Products for creating
          mockups.
        </Text>
        <Text zIndex="2" w="40%" mb="20">
          As a college student, I prefer flexible work-schedule. I enjoyed
          working on a freelance platforms and willing to join remote-developer
          team. Also I have a personal mentor, who significantly increases my
          productivity. You can check out technologies I know{" "}
          <Link as={RouterLink} to="/tech-stack" color="grey">
            here
          </Link>
          , visit menu-bar for more info about me.
        </Text>
        <Text zIndex="2" fontSize="2xl" my="10">
          Contacts
        </Text>
        <Link
          zIndex="2"
          mb="4"
          isExternal
          href="mailto:olgaslobodchuk@gmail.com"
        >
          Email
          <ExternalLinkIcon mx="2px" />
        </Link>
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
      </BubbleLayout>
    </Flex>
  );
};
