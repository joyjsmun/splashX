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
    <Flex
      pb={10}
      width={"full"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Flex
        flexDirection={"row-reverse"}
        h={"auto"}
        width={"80%"}
        m={0}
        py={20}
        gap={"10vw"}
        color={"brand.white"}
        justifyItems={"center"}
      >
        <VStack width={"full"}>
          <Text>Main Image Thumbnail</Text>
          <Box
            width={"80%"}
            height={"50vh"}
            border={"2px dashed gray"}
            padding={"3vw"}
          >
            <Image></Image>
          </Box>
        </VStack>
        <Flex
          flexDirection={"column"}
          width={"full"}
          height={"full"}
          gap={"2vw"}
        >
          <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
            <Text>Title</Text>
            <Input placeholder="Anime Title"></Input>
          </VStack>
          <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
            <Text>NFT Minting</Text>
            <HStack width={"full"}>
              <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
                <Text>Max Supply</Text>
                <Input placeholder="1000"></Input>
              </VStack>
              <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
                <Text>Price Per NFT(Matic)</Text>
                <Input placeholder="1000"></Input>
              </VStack>
            </HStack>
            <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
              <Text>Description</Text>
              <Input placeholder="Please put describe about the anime."></Input>
            </VStack>
            <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
              <Text>Upload Anime Video</Text>
              <Input placeholder="1000"></Input>
            </VStack>
          </VStack>
        </Flex>
      </Flex>
      <Box width={"30%"}>
        <Button>Upload & Generate NFT</Button>
      </Box>
    </Flex>
  );
}
