import {
  Flex,
  Grid,
  GridItem,
  Box,
  Text,
  useDisclosure,
  Stack,
  HStack,
  Button,
  chakra,
  shouldForwardProp,
  Container,
  Image,
} from "@chakra-ui/react";
import { animate, isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
interface ImageInfo {
  image: string;
  info: string;
}

const images: ImageInfo[] = [];

const imageContext = require.context(
  "../public/images/animeList",
  false,
  /\.(png|jpe?g|svg)$/
);

const ImageLinks: { image: string; info: string }[] = imageContext
  .keys()
  .map((key: string) => ({
    image: key.replace("./", ""),
    info: `${key.replace("./", "").replace(".svg", "")}`,
  }));

export default function AnimeList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredImageIndex(index);
    onOpen();
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(-1);
    onClose();
  };

  return (
    <Box>
      <Text
        color={"brand.white"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        pb={4}
        pl={6}
      >
        This Week Trending Animes
      </Text>
      <Flex w={"full"} h={"95vh"} justifyContent={"center"}>
        <Grid
          templateRows="repeat(3,1fr)"
          templateColumns="repeat(5,1fr)"
          px={8}
        >
          {ImageLinks.map((image, index) => (
            <ChakraBox
              key={index}
              bg={"white"}
              w="20vw"
              backgroundImage={`url('/images/animeList/${image.image}')`}
              backgroundSize={"cover"}
              backgroundPosition={"top center"}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              position={"relative"}
            >
              {hoveredImageIndex === index && (
                <ChakraBox
                  position={"absolute"}
                  width={"full"}
                  height={"0.25fr"}
                  padding={4}
                  bottom={2}
                  color={"white"}
                  bg={"rgba(0, 0, 0, 0.8)"}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1, translateY: "7%" }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <Text fontWeight={700} fontSize={"2xl"} pb={2}>
                    {image.info}
                  </Text>
                  <HStack>
                    <HStack>
                      <Image src="/images/eye.png" boxSize={"fit-content"} />
                      <Text fontSize={"0.7rem"}> 2,410,198 Views</Text>
                    </HStack>
                    <HStack>
                      <Image src="/images/globe.png" boxSize={"fit-content"} />
                      <Text fontSize={"0.7rem"}> Updated 3 days ago</Text>
                    </HStack>
                  </HStack>
                  <Stack alignItems={"flex-end"}>
                    <Button
                      size={"md"}
                      bgGradient="linear(to-l, #7928CA, brand.pink)"
                      rounded={"lg"}
                      color={"white"}
                      fontWeight={700}
                      _hover={{ bg: "pink.400" }}
                      mt={4}
                    >
                      Watch
                    </Button>
                  </Stack>
                </ChakraBox>
              )}
            </ChakraBox>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
