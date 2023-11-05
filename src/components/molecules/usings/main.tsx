import { Box, Flex } from "@chakra-ui/react";
import { Facebook } from "../../atoms/facebook/main";
import { Google } from "../../atoms/google/main";
import { SignUpInfoText } from "../../atoms/signUpInfoText/main";
import { Twitter } from "../../atoms/twitter/main";

export const Usings = () => {
  return (
    <>
      <Box textAlign={"center"} py={10}>
        <SignUpInfoText />
        <Box ml='28%' mt='2%'>
        <Flex >
          <Facebook />
          <Twitter />
          <Google />
        </Flex>
        </Box>
      </Box>
    </>
  );
};
