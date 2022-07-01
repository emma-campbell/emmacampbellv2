import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        aria-label="theme-switcher"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        color={colorMode === "light" ? "gray.900" : "alphaWhite.900"}
        borderRadius="full"
      ></IconButton>
    </>
  );
};

export default ThemeSwitcher;
