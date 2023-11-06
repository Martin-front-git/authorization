import { Box } from "@chakra-ui/react";
import { Password } from "../../atoms/inputs/password";
import { Username } from "../../atoms/inputs/username";

export const Inputs = () => {
  return (
    <>
      <Box w='300px' m='0px auto' py={10}>
        <Username />
        <Password />
      </Box>
    </>
  );
};
