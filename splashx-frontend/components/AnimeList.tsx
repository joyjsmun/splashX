import { Flex, Grid, GridItem, Box, Text } from "@chakra-ui/react";

const ImageLinks = ["Dashboard", "Projects", "Team"];
// 15 images**

export default function AnimeList() {
  return (
    <Box>
      <Text color={"brand.white"}>This Week Trending Animes</Text>
      <Flex w={"full"} h={"85vh"} justifyContent={"center"}>
        <Grid templateRows="repeat(3,1fr)" templateColumns="repeat(5,1fr)">
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
          <GridItem bg={"white"} w="20vw">
            1
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
