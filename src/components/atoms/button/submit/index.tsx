import { Button } from "@chakra-ui/react";
import { IButton } from "../../../../models/interfaces/button";

export const Submit = ({ text }: IButton) => {
  return (
    <Button
      bgGradient="linear(to-r, cyan.400, pink.600)"
      w="300px"
      ml="12.5%"
      mt={10}
      type="submit"
    >
      {text}
    </Button>
  );
};
