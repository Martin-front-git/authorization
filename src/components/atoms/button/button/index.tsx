import { Button } from "@chakra-ui/react";
import { IButton } from "../../../../models/interfaces/button";

export const Buton = ({ text, onClick }: IButton) => {
  return (
    <Button
      bgGradient="linear(to-r, cyan.400, pink.600)"
      w="100px"
      type="submit"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
