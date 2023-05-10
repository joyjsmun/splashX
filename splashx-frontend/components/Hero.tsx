import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"90vh"}
      backgroundImage="url('/images/Hero-bg.svg')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"md"}
        justify={"center"}
        align={"flex-start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6} pl={10} pt={10}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "6xl", md: "7xl" })}
          >
            Hero
          </Text>
          <Text
            color={"brand.gray"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          >
            For someone who was temporarily given the job of being a shinigami
            (death god), Ichigo has done pretty well for himself. He has trained
            in martial arts since he was young and continued to grow as he’s
            learned about his new powers. He masters advanced techniques
          </Text>

          <Button
            bg={"brand.pink"}
            rounded={"lg"}
            color={"white"}
            _hover={{ bg: "blue.500" }}
          >
            Watch Anime
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
