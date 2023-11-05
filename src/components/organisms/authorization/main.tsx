import { Box } from "@chakra-ui/react";
import { Title } from "../../atoms/title/main";
import { Inputs } from "../../molecules/inputs/main";
import { Submit } from "../../atoms/submit/main";
import { Usings } from "../../molecules/usings/main";
import { SignUp } from "../../atoms/signUp/main";

export const Authorization = () => {
  return (
    <>
      <Box w='400px' h='600px' border='1px' m='0px auto' mt='10px' borderRadius={10}>
        <Title />
        <Inputs />
        <Submit />
        <Usings />
        <SignUp />
      </Box>
    </>
  );
};
