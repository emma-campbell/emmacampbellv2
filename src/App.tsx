import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import Writing from "./pages/writing";

import "@fontsource/archivo-black"
import "@fontsource/barlow-semi-condensed"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Writing />
  </ChakraProvider>
);
