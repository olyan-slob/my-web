import { Flex, Text } from "@chakra-ui/react";
import { BubbleLayout } from "../components/bubble-layout";
import { Heading } from "../components/heading";

export const TechStackPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="Tech Stack"></Heading>
      <BubbleLayout>
        <Text fontSize="large" zIndex="2" mt="20" mb="4">
          React Javascript HTML5/CSS3 Bash
        </Text>
        <Text fontSize="large" zIndex="2">
          React-router React-Context React-hooks <br />
          styled-components chakra-ui material-ui
        </Text>
        <Text fontSize="large" zIndex="2" mt="4">
          Sketch Figma Adobe-Suite
        </Text>
        <Text fontSize="large" zIndex="2" my="4" mb="20">
          GitHub Git Firebase Webpack5 Slack
        </Text>
      </BubbleLayout>
    </Flex>
  );
};
