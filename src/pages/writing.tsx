import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import Filter from "../component/filter";
import Layout from "../component/layout";
import Preview from "../component/preview";

const Writing = () => {
  return (
    <>
      <Layout>
        <Box py={5}>
          <Heading>Writing</Heading>
          <Text>
            the best "soft skill" any engineer can have is the ability to
            communicate their thoughts. check out some of my articles below!
          </Text>
        </Box>
        <Box>
          <Filter />
          <SimpleGrid columns={2} spacing={10} overflowY="scroll">
            <Preview
              title="setting up a portfolio in react"
              published={new Date("2020-01-01")}
              preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt faucibus tortor. Morbi faucibus ut nisl malesuada imperdiet. Integer tristique maximus purus, ac egestas mauris imperdiet in. Nunc mollis sed sapien quis mattis. Nam vehicula massa nunc, non varius velit mattis eu. Etiam viverra ligula felis, sit amet ultricies nulla facilisis id. Curabitur sed rhoncus mi. Vestibulum nibh justo, volutpat nec vestibulum ac, sagittis non libero. Nunc at eros tempor, tempor elit faucibus, maximus ipsum. Suspendisse sapien erat, elementum vitae nunc id, auctor dictum lacus."
              tags={["react", "portfolio"]}
            />
            <Preview
              title="Example Title"
              published={new Date("2020-01-01")}
              preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt faucibus tortor. Morbi faucibus ut nisl malesuada imperdiet. Integer tristique maximus purus, ac egestas mauris imperdiet in. Nunc mollis sed sapien quis mattis. Nam vehicula massa nunc, non varius velit mattis eu. Etiam viverra ligula felis, sit amet ultricies nulla facilisis id. Curabitur sed rhoncus mi. Vestibulum nibh justo, volutpat nec vestibulum ac, sagittis non libero. Nunc at eros tempor, tempor elit faucibus, maximus ipsum. Suspendisse sapien erat, elementum vitae nunc id, auctor dictum lacus."
            />
            <Preview
              title="Example Title"
              published={new Date("2020-01-01")}
              preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt faucibus tortor. Morbi faucibus ut nisl malesuada imperdiet. Integer tristique maximus purus, ac egestas mauris imperdiet in. Nunc mollis sed sapien quis mattis. Nam vehicula massa nunc, non varius velit mattis eu. Etiam viverra ligula felis, sit amet ultricies nulla facilisis id. Curabitur sed rhoncus mi. Vestibulum nibh justo, volutpat nec vestibulum ac, sagittis non libero. Nunc at eros tempor, tempor elit faucibus, maximus ipsum. Suspendisse sapien erat, elementum vitae nunc id, auctor dictum lacus."
            />
          </SimpleGrid>
        </Box>
      </Layout>
    </>
  );
};

export default Writing;
