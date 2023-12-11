import { Button } from "@chakra-ui/react";
import { IButton } from "../../../../models/interfaces/button";

export const Buton = ({ text, onClick ,width}: IButton) => {
  return (
    <Button
      bgGradient="linear(to-r, cyan.400, pink.600)"
      _hover={{
        bgGradient: 'linear(to-l, #7928CA, #FF0080)',
      }}
      
      w={width === undefined ? '100px' : width}
      type="submit"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
