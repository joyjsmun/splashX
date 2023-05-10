import {
  Box,
  Image,
  Link,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("black", "gray.900")}
      color={useColorModeValue("brand.gray", "gray.200")}
    >
      <Box py={4}>
        <Flex justifyContent={"center"} gap={2}>
          <Link>Twitter</Link>
          <Text>|</Text>
          <Link>Telegram</Link>
        </Flex>
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          ⓒ 2023 SplashX. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
