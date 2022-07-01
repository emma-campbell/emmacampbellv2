import React from "react";
import { Container, Grid, GridItem, useColorMode } from "@chakra-ui/react";

import Header from "../header";

import Topography from "../../assets/topography.svg";

interface LayoutProps {
  children?: React.ReactNode;
  landing?: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "purple.700";

  return (
    <>
      <Container
        backgroundRepeat={{ base: "repeat" }}
        backgroundImage={{ base: Topography }}
        maxWidth="100%"
        height={["100vh", "100vh", "100vh", "100vh", "100vh"]}
      >
        <Container
          maxWidth="70%"
          height={["100vh", "100vh", "100vh", "100vh", "100vh"]}
          zIndex={1}
          bg={bgColor}
          px={10}
          py={4}
          boxShadow="lg"
        >
          <Grid>
            <GridItem paddingBottom={4}>
              <Header />
            </GridItem>
            <GridItem>{children}</GridItem>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
