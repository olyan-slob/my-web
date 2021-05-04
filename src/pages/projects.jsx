import { AspectRatio, Divider, Flex, Text } from "@chakra-ui/react";
import { Heading } from "../components/heading";

export const ProjectsPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading headingName="Projects" />
      <Divider borderWidth="0,75px" borderColor="black" opacity="1" w="50%" />
      <Text fontSize="34" mt="10">
        Monsters Rolodex
      </Text>
      <Text w="50%" mt="7">
        This is the educational project, which covers React basics (such as
        state, props, function/class components, data fetching, JSX and CSS
        styling).
      </Text>
      <AspectRatio w="70%" ratio={10 / 7} my="10">
        <iframe
          src="https://olyan-slob.github.io/monsters-rolodex/"
          title="Monster Rolodex"
          allowFullScreen
        />
      </AspectRatio>
      <Text fontSize="34">Uploader</Text>
      <Text w="50%" mt="7">
        Plain JavaScript photo uploader with progress animation and photo
        preview. Used Firebase for storing images.
      </Text>
      <AspectRatio w="70%" ratio={10 / 4} my="10">
        <iframe
          src="https://olyan-slob.github.io/upload-files/"
          title="Monster Rolodex"
          allowFullScreen
        />
      </AspectRatio>
      <Text fontSize="34">Design</Text>
      <Text w="50%" mt="7">
        Here you can find some parts of my design projects. Each mockup is
        mobile oriented. First one is sports-centers discovery app. Second one
        is food delivery app. And third one is vintage clothes shop.
      </Text>
      <AspectRatio w="70%" ratio={10 / 4} my="10">
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsSVWNXFJQDTbpGOyZcrDsw%2Fportfolio%3Fnode-id%3D0%253A1"
          title="Figma Design"
          allowFullScreen
        />
      </AspectRatio>
    </Flex>
  );
};
