import { Box, Container, Stack } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import midjourney from "midjourney-client";
import { useState } from "react";

import Replicate from "replicate";

const auth = process.env.REPLICATE_API_TOKEN || ""; // use empty string if undefined
const replicate = new Replicate({
  auth,
});

export default function generateAnime() {
  const [inputPrompt, setInputPrompt] = useState("");

  const handleGenerateAnime = async () => {
    const prediction = await replicate.predictions.create({
      version:
        "9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",
      input: {
        prompt: `mdjrny-v4 ${inputPrompt}`,
      },
      webhook: "http://localhost:3000/generateAnime",
      webhook_events_filter: ["completed"],
    });
    console.log(prediction);
    // handle prediction result here
  };

  return (
    <Container width={"100vw"} height={"100vh"}>
      <Stack spacing={4}>
        <Input
          placeholder="Prompt Your Anime"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          color={"white"}
        />
      </Stack>
      <Button placeholder="Generate Anime" onClick={handleGenerateAnime}>
        Generate Anime
      </Button>
    </Container>
  );
}
