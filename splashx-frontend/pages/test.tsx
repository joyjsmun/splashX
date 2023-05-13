import {
  useDisclosure,
  Text,
  Stack,
  HStack,
  Button,
  chakra,
  shouldForwardProp,
  Container,
  Image,
} from "@chakra-ui/react";
import { animate, isValidMotionProp, motion } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // @ts-ignore no problem in operation, although type error appears.
    <Container isOpen={isOpen} width={"100vw"} height={"100vw"}>
      <ChakraBox
        // @ts-ignore no problem in operation, although type error appears.
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg={"white"}
        width={"300px"}
        height={"300px"}
        border={"solid 2px black"}
        textStyle={"header"}
      >
        More{" "}
      </ChakraBox>
      {isOpen ? (
        <ChakraBox
          width={"305px"}
          height={"0.25fr"}
          padding={4}
          bottom={0}
          color={"white"}
          bg={"rgba(0, 0, 0, 0.8)"}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1, translateY: "-100%" }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Text fontWeight={700} fontSize={"2xl"} pb={2}>
            Man In Mars
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
      ) : (
        ""
      )}
    </Container>
  );
}
