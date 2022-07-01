import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack, useDisclosure
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import colors from "../../theme/colors";


const Search = () => {
  const { isOpen, onToggle } = useDisclosure();

  const red = colors.red[700];
  const yellow = colors.yellow[700];
  const green = colors.green[700];
  const bgColor = `linear-gradient(to right, ${red}, ${yellow}, ${green}) border-box`;

  return (
    <>
      <Stack direction="row">
        <InputGroup>
          <Input
            as={motion.input}
            animate={{
              width: isOpen ? "0px" : "100%",
              border: isOpen ? "none" : `1px solid ${bgColor}`,
              borderRadius: isOpen ? "50%" : "full",
              opacity: isOpen ? 0 : 1,
            }}
            transition="1s ease-out"
            aria-label="search"
            borderRadius="full"
            initial={false}
          />
          <InputRightElement
            children={
              <IconButton
                as={motion.button}
                animate={{
                  background: isOpen ? "transparent" : "alphaWhite.300",
                }}
                onClick={onToggle}
                aria-label="search"
                borderRadius="full"
                icon={<SearchIcon />}
              />
            }
          ></InputRightElement>
        </InputGroup>
      </Stack>

      {/* <Stack direction="row">
        <InputGroup as={motion.div}>
          <InputLeftElement children={<SearchIcon />} />
          <Input variant="filled" borderRadius="full" />
        </InputGroup>
        <IconButton
          aria-label="close-search"
          variant="ghost"
          icon={<CloseIcon />}
          onClick={onToggle}
        />
      </Stack>

      <IconButton
        aria-label="search"
        icon={<SearchIcon />}
        borderRadius="full"
        onClick={onToggle}
      /> */}
    </>
  );
};

export default Search;
