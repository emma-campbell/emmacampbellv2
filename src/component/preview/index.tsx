import { Box, Button, Flex, Heading, Tag, Text, Stack } from "@chakra-ui/react";

interface PreviewProps {
  title?: string;
  id?: string;
  published?: Date;
  preview?: string;
  tags?: string[];
}

const Preview = ({ title, id, published, preview, tags }: PreviewProps) => {
  function formatDate(date: Date | undefined) {
    if (!date) {
      return null;
    }
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  }

  return (
    <Box>
      <Flex direction="column" paddingBottom={5}>
        <Flex
          align={{ base: "center" }}
          justifyContent={{ base: "space-between" }}
          py={{ base: 2 }}
        >
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{formatDate(published)}</Text>
        </Flex>

        <Stack direction="row">
          {tags
            ? tags.map((tag) => {
                return <Tag key={tag}>{tag}</Tag>;
              })
            : null}
        </Stack>
      </Flex>
      <Flex direction={{ base: "column" }}>{preview}</Flex>
      <Flex justifyContent={{ base: "flex-end" }}>
        <Button>read more &#8594;</Button>
      </Flex>
    </Box>
  );
};

export default Preview;
