import { Flex, Grid, GridItem, Box, Text } from "@chakra-ui/react";
import AnimeFrame from "./layouts/AnimeFrame";

const ImageLinks: string[] = [];

for (let i = 1; i <= 15; i++) {
  const imageName = `image_${i}.svg`;
  ImageLinks.push(imageName);
}

export default function AnimeList() {
  return (
    <Box>
      <Text color={"brand.white"}>This Week Trending Animes</Text>
      <Flex w={"full"} h={"95vh"} justifyContent={"center"}>
        <Grid
          templateRows="repeat(3,1fr)"
          templateColumns="repeat(5,1fr)"
          px={8}
        >
          {ImageLinks.map((image) => (
            <AnimeFrame fileName={image} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
