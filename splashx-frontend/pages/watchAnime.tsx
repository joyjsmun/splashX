import AnimeInfo from "@/components/AnimeInfo";
import AnimePlayer from "@/components/layouts/AnimePlayer";
import MintNFT from "@/components/MintNFT";
import NextAnime from "@/components/NextAnime";
import TrendingAnime from "@/components/TreandingAnime";
import { Box } from "@chakra-ui/react";

export default function watchAnime() {
  return (
    <Box pb={10}>
      <AnimePlayer />
      <AnimeInfo />
      <MintNFT />
      <NextAnime />
      <TrendingAnime />
    </Box>
  );
}
