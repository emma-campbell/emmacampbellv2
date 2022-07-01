import React from "react";
import colors from "../../theme/colors";

import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const Filter = () => {
  const red = colors.red[700];
  const yellow = colors.yellow[700];
  const green = colors.green[700];
  const bgColor = `linear-gradient(to right, ${red}, ${yellow}, ${green}) border-box`;
  
  return (
    <>
      <IconButton
        variant="outline"
        border="2px solid"
        aria-label="filter_results"
        icon={<AddIcon />}
        borderRadius="full"
        _hover={{
            bg: `${bgColor}`,
        }} 
      />
    </>
  );
};

export default Filter;
