import {
  useDisclosure,
  Text,
  Box,
  Button,
  chakra,
  shouldForwardProp,
  Container,
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
    <Container isOpen={isOpen} width={"100vw"} height={"100vw"}>
      <ChakraBox
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
        {isOpen ? (
          <ChakraBox
            width={"300px"}
            height={"100px"}
            bg={"yellow"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Text>Menu Item 1</Text>
            <Text>Menu Item 2</Text>
            <Text>Menu Item 3</Text>
            <Button>Watch</Button>
          </ChakraBox>
        ) : (
          ""
        )}
      </ChakraBox>
    </Container>
  );
}
