import {   Button } from "@chakra-ui/react";
import { IButton } from "../../../../models/interfaces/button";

export const Submit = ({ text, width }: IButton) => {

  return (
    <Button
      bgGradient="linear(to-r, cyan.400, pink.600)"
      w={width === undefined ? "100px" : width}
      ml="12.5%"
      mt={10}
      type="submit"
      className="submit"
      color='white'
      _hover={{
        bgGradient: 'linear(to-l, #7928CA, #FF0080)',
      }}
    >
      {text}
    </Button>
  );
};
