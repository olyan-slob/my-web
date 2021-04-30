import { Flex, Text, Divider, Box, Image } from "@chakra-ui/react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import Images from "../images";
import { Heading } from "../components/heading";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const HobbyPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="Hobby" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <Text w="40%" my="20">
        Javascript developer with experience of designing and building
        responsive web apps. Proficient with HTML/CSS and React. Have knowledge
        of UX and UI using Figma/Sketch/Adobe Products for creating mockups.
      </Text>
      <Box w="50%">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
        >
          <Image data-src={Images.panama1} />
          <Image data-src={Images.panama2} />
          <Image data-src={Images.panama3} />
          <Image data-src={Images.panama4} />
          <Image data-src={Images.panama5} />
        </AutoplaySlider>
      </Box>
      <Text w="40%" my="20">
        Javascript developer with experience of designing and building
        responsive web apps. Proficient with HTML/CSS and React. Have knowledge
        of UX and UI using Figma/Sketch/Adobe Products for creating mockups.
      </Text>
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
