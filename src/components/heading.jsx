import { Circle, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCircle = motion(Circle);

export const CircleUI = ({
  size,
  bg,
  top,
  bottom,
  right,
  left,
  animate,
  transition,
}) => {
  return (
    <MotionCircle
      zIndex={-1}
      size={size}
      bg={bg}
      opacity="75%"
      position="absolute"
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      animate={animate}
      transition={{ repeat: Infinity, ...transition }}
    />
  );
};

export const Heading = ({ headingName }) => {
  return (
    <Flex position="relative" my="40">
      <CircleUI
        animate={{ y: -240 }}
        transition={{ duration: 3, repeatType: "reverse" }}
        size="130px"
        bg="#EAD0FF"
        bottom="65px"
        right="180px"
      />
      <CircleUI
        animate={{ y: -200 }}
        transition={{ duration: 3, repeatType: "reverse" }}
        size="50px"
        bg="#B6F2FF"
        bottom="87px"
        left="200px"
      />
      <CircleUI
        animate={{ y: -255 }}
        transition={{ duration: 3, repeatType: "reverse" }}
        size="30px"
        bg="#FFA7E1"
        top="12px"
        right="275px"
      />
      <Text fontFamily="heading" fontSize="5xl" textAlign="center">
        {headingName}
      </Text>
      <CircleUI
        animate={{ y: -330 }}
        transition={{ duration: 3, repeatType: "reverse" }}
        size="110px"
        bg="#FFE3CE"
        top="10px"
        left="240px"
      />
      <CircleUI
        animate={{ y: -400 }}
        transition={{ duration: 3, repeatType: "reverse" }}
        size="45px"
        bg="#D9FFBB"
        top="80px"
        right="180px"
      />
    </Flex>
  );
};
