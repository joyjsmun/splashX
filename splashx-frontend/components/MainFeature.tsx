import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { ReactElement } from "react";

export default function MainFeature() {
  return (
    <Flex
      height={"50vw"}
      justifyContent={"center"}

      // fontSize={useBreakpointValue({ base: "7xl", md: "8xl" })}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
      >
        <Heading
          color={"white"}
          fontWeight={900}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "7xl", sm: "8xl" })}
        >
          <Flex flexDirection={"row"} gap={4}>
            <Text bgGradient="linear(to-l,  #fad60a,#e94f08,)" bgClip="text">
              Earn
            </Text>{" "}
            by{" "}
            <Text
              bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
              bgClip="text"
            >
              Creating
            </Text>{" "}
            &{" "}
            <Text bgGradient="linear(to-l, #7928CA, brand.pink)" bgClip="text">
              Watching
            </Text>
          </Flex>
        </Heading>

        <Heading
          color={"white"}
          fontWeight={900}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "6xl", md: "8xl" })}
        >
          AI-generated Anime
        </Heading>
        <Button
          size={"lg"}
          bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
          rounded={"lg"}
          color={"white"}
          mt={2}
          fontWeight={700}
          _hover={{ bg: "blue.400", shadow: "md" }}
        >
          Generate Anime
        </Button>
      </Flex>
    </Flex>
  );
}
