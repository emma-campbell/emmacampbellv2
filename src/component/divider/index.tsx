import React from "react";
import colors from "../../theme/colors";

import { Divider } from "@chakra-ui/react";

const GradientDivider = () => {
  const red = colors.red[700];
  const yellow = colors.yellow[700];
  const green = colors.green[700];
  const bgColor = `linear-gradient(to right, ${red}, ${yellow}, ${green}) border-box`;
  
  return (
    <Divider
      orientation="horizontal"
      bg={bgColor}
      border="solid 4px"
      opacity="1"
      borderRadius="full"
    />
  );
};

export default GradientDivider;
