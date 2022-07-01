import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./colors";
import { fonts, fontWeights } from "./fonts";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "dark",
  cssVarPrefix: "emmacampbell",
};

const theme = extendTheme({
  styles,
  config,
  colors,
  fonts, 
  fontWeights,
});

export default theme;
