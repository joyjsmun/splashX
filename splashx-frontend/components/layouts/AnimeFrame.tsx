import { GridItem } from "@chakra-ui/react";

interface AnimeFrameProps {
  fileName: string;
}

export default function AnimeFrame(props: AnimeFrameProps) {
  return (
    <GridItem
      bg={"white"}
      w="20vw"
      backgroundImage={`url('/images/animeList/${props.fileName}')`}
      backgroundSize={"cover"}
      backgroundPosition={"top center"}
    ></GridItem>
  );
}
