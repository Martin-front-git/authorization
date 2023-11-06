import { Box, Flex } from "@chakra-ui/react";
import { Facebook } from "../../atoms/links/facebook";
import { Google } from "../../atoms/links/google";
import { SignUpInfoText } from "../../atoms/texts/signUpInfoText";
import { Twitter } from "../../atoms/links/twitter";

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
