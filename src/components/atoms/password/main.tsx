import {
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";

export const Password = () => {
  return (
    <>
      <FormControl isRequired textAlign="right">
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Type your password" border='none' borderBottom='1px'/>
        <Link color="teal.500" href="#">
          Forgot password?
        </Link>
      </FormControl>
    </>
  );
};
