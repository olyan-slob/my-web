import { Flex, Text, Circle } from "@chakra-ui/react";

export const CircleUI = ({ size, bg, top, bottom, right, left }) => {
  return (
    <Circle
      size={size}
      bg={bg}
      opacity="75%"
      position="absolute"
      top={top}
      bottom={bottom}
      right={right}
      left={left}
    ></Circle>
  );
};

export const Heading = ({ headingName }) => {
  return (
    <Flex position="relative" my="40">
      <CircleUI size="130px" bg="#EAD0FF" bottom="65px" right="180px" />
      <CircleUI size="50px" bg="#B6F2FF" bottom="87px" left="200px" />
      <CircleUI size="30px" bg="#FFA7E1" top="12px" right="275px" />
      <Text fontFamily="heading" fontSize="5xl" textAlign="center">
        {headingName}
      </Text>
      <CircleUI size="110px" bg="#FFE3CE" top="10px" left="240px" />
      <CircleUI size="45px" bg="#D9FFBB" top="80px" right="180px" />
    </Flex>
  );
};
