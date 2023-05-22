import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export default function generateAnime() {
  return (
    <Box pb={10}>
      <Flex
        flexDirection={"row-reverse"}
        h={"auto"}
        width={"80%"}
        m={0}
        py={20}
        color={"brand.white"}
        gap={10}
        justifyContent={"center"}
      >
        <VStack width={"full"}>
          <Text>Main Image Thumbnail</Text>
          <Box width={"full"} height={"50vh"} border={"2px solid yellow"}>
            <Image></Image>
          </Box>
        </VStack>
        <VStack width={"full"}>
          <VStack width={"full"}>
            <Text>Title</Text>
            <Input placeholder="Anime Title"></Input>
          </VStack>
          <VStack width={"full"}>
            <Text>NFT Minting</Text>
            <HStack width={"full"}>
              <VStack width={"full"}>
                <Text>Max Supply</Text>
                <Input placeholder="1000"></Input>
              </VStack>
              <VStack width={"full"}>
                <Text>Price Per NFT(Matic)</Text>
                <Input placeholder="1000"></Input>
              </VStack>
            </HStack>
            <VStack width={"full"}>
              <Text>Description</Text>
              <Input placeholder="1000"></Input>
            </VStack>
            <VStack width={"full"}>
              <Text>Anime Video</Text>
              <Input placeholder="1000"></Input>
            </VStack>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
}
