import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function NextAnime() {
  return (
    <Box mb={"3"}>
      <VStack alignItems={"flex-start"} pt={"20"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={4}>
          Next Episode
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem w="100%" h="max-content">
            <Image src="/images/episode-2.svg" boxSize={"fit-content"} />
          </GridItem>
          <GridItem w="100%" h="max-content">
            <Image src="/images/episode-3.svg" boxSize={"fit-content"} />
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}
