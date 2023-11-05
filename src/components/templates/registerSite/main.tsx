import { Box } from "@chakra-ui/react";
import { ThemeToggle } from "../../atoms/themeToggle/main";
import { Authorization } from "../../organisms/authorization/main";

export const RegisterSite = () => {
  return (
    <>
      <Box position="absolute" right="10px" top='10px'>
        <ThemeToggle />
      </Box>
      <Authorization />
    </>
  );
};
