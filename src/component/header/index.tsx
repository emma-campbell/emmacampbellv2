import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import GradientDivider from "../divider";
import Search from "../search";
import ThemeSwitcher from "../theme-switcher";

const Header = () => {
  return (
    <>
      <Box>
        <Flex
          py={{ base: 2 }}
          align={{ base: "center" }}
          justifyContent={{ base: "space-between" }}
        >
          <Flex justify={{ base: "center" }} direction="column">
            <Heading fontWeight={{ base: "black" }}>Emma Campbell</Heading>
            <Text noOfLines={3}>software engineer.</Text>
          </Flex>
          <Flex justify={{ base: "end" }}>
            <Stack direction={{ base: "row" }}>
              <Search />
              <ThemeSwitcher />
              <IconButton aria-label="menu" icon={<HamburgerIcon/>} borderRadius="full"/>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <GradientDivider />
    </>
  );
};

export default Header;
