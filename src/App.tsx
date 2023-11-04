import { Box } from "@chakra-ui/react";
import "./App.css";
import { ThemeToggle } from "./components/atoms/themeToggle/main";
function App() {
  return (
    <>
      <Box position='absolute' right='10px'>
        <ThemeToggle />
      </Box>
    </>
  );
}

export default App;
