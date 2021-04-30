import { Text, Divider, AspectRatio, Flex } from "@chakra-ui/react";

import { Heading } from "../components/heading";

export const ProjectsPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="Projects" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <Text fontSize="34" mt="10">
        Monster Rolodex
      </Text>
      <AspectRatio w="70%" ratio={10 / 7} my="10">
        <iframe
          src="https://olyan-slob.github.io/monsters-rolodex/"
          frameborder="0"
          title="Monster Rolodex"
          allowFullScreen
        />
      </AspectRatio>
      <Text fontSize="34">Uploader</Text>
      <AspectRatio w="70%" ratio={10 / 4} my="10">
        <iframe
          src="https://olyan-slob.github.io/upload-files/"
          frameborder="0"
          title="Monster Rolodex"
          allowFullScreen
        />
      </AspectRatio>
    </Flex>
  );
};
