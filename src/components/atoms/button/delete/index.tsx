import { Button } from "@chakra-ui/react";
import { IButton } from "../../../../models/interfaces/button";

export const Delete = ({ text, onClick }: IButton) => {
  return (
    <Button
      bg='tomato'
      w={1}
      top={0}
      right={0}
      position={"absolute"}
      type="submit"
      onClick={onClick}
      zIndex={1}
    >
      {text}
    </Button>
  );
};
