import { Box, Flex, Image } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";

export default function AnimePlayer() {
  return (
    <Flex justifyContent={"center"} w={"auto"} h={"full"}>
      {/* <Image src="/images/player-image.svg" /> */}
      <MediaRenderer src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X" />
    </Flex>
  );
}
