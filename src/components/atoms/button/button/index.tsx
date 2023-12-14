import { Button } from "@chakra-ui/react";
import { IButton } from "../../../../models/interfaces/button";

export const Buton = ({ text, onClick ,width}: IButton) => {
  return (
    <Button
      bgGradient="linear(to-r, cyan.400, pink.600)"
      _hover={{
        bgGradient: 'linear(to-l, #7928CA, #FF0080)',
      }}
      transition="background-color 1s"
      w={width === undefined ? '100px' : width}
      type="submit"
      onClick={onClick}
      className="buton"
      color='white'
      fontFamily={"cursive"}
    >
      {text}
    </Button>
  );
};
