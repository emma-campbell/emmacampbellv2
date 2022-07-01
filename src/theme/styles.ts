import { Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    "html, body": {
      fontFamily: "body",
      color: mode("black", "white")(props),
      bg: mode("white", "purple.700")(props),
      height: "100%",
    },
  }),
};

export default styles;
