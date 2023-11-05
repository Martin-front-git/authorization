import { Box } from "@chakra-ui/react";
import { Password } from "../../atoms/password/main";
import { Username } from "../../atoms/username/main";

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
