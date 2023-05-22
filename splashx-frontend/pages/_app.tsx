import "@/styles/globals.css";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/700.css";
import "@fontsource/figtree/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
  smartWallet,
  localWallet,
} from "@thirdweb-dev/react";

import { FACTORY_ADDRESS, TH_API_KEY } from "@/const/addresses";

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#000000",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  colors: {
    brand: {
      black: "#000000",
      white: "#f2f2f2",
      pink: "#DF3285",
      darkBlue: "#3D89E5",
      gray: "#888888",
    },
    textStyles: {
      header: {
        fontSize: ["200px"],
      },
      h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
      h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      supportedWallets={[
        metamaskWallet(),
        // walletConnect(),
        smartWallet({
          factoryAddress: FACTORY_ADDRESS,
          thirdwebApiKey: TH_API_KEY,
          gasless: true,
          personalWallets: [
            metamaskWallet(),
            walletConnect(),
            localWallet({ persist: true }),
          ],
        }),
      ]}
    >
      <ChakraProvider resetCSS theme={chakraTheme}>
        <Layout title="SplashX - Earn by Creating & Watching AI-generated Anime">
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}
