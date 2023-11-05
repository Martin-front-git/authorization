import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const Username = () => {
  return (
    <>
      <FormControl isRequired my={5}>
        <FormLabel>Username</FormLabel>
        <Input type="text" placeholder=" Type your username" border='none' borderBottom='1px'/>
      </FormControl>
      
    </>
  );
};
