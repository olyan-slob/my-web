import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Helmet } from "react-helmet";
import { Heading } from "../components/heading";
import Images from "../images";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const HobbyPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Helmet>
        <title>Hobby</title>
      </Helmet>
      <Heading headingName="Hobby" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <Text fontSize="34" mt="10">
        Crochet
      </Text>
      <Text w="40%" my="20">
        I started crocheting when I met the creator of the brand{" "}
        <Link
          href="https://www.etsy.com/shop/LizaXoroshoThings?ref=simple-shop-header-name&listing_id=958312290"
          isExternal
        >
          liza.xorosho
          <ExternalLinkIcon mx="2px" />
        </Link>
        . I quickly turned hobby into my part-time job. Now I work with Liza as
        a model and knitter.
      </Text>
      <Box w="50%">
        <AutoplaySlider play cancelOnInteraction={false} interval={2000}>
          <Image data-src={Images.panama1} />
          <Image data-src={Images.panama2} />
          <Image data-src={Images.panama3} />
          <Image data-src={Images.panama4} />
          <Image data-src={Images.panama5} />
        </AutoplaySlider>
      </Box>
      <Link
        mt="32"
        mb="4"
        href="https://www.etsy.com/shop/LizaXoroshoThings?ref=simple-shop-header-name&listing_id=958312290"
        isExternal
      >
        Etsy LizaXoroshoThings
        <ExternalLinkIcon mx="2px" />
      </Link>
      <Link mb="20" href="https://www.instagram.com/liza.xorosho/" isExternal>
        liza.xorosho instagram
        <ExternalLinkIcon mx="2px" />
      </Link>
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
