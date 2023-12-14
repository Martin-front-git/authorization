import { Routes } from "react-router-dom";
import AuthRoutes from "../../../routes/authRoutes";
import UnAuthRoutes from "../../../routes/unAuthRoutes";
import { Box, useColorModeValue } from "@chakra-ui/react";
import alps from '../../../../public/alps.jpg';
import darkImage from '../../../../public/darkImage.jpg';


export const Authorization = () => {
  const bgImage = useColorModeValue(alps, darkImage);
  return (
    <Box style={{ backgroundImage: `url(${bgImage})`,backgroundSize: 'cover'}} h='100vh' overflow='auto'>
      <Routes>
      {AuthRoutes}
      {UnAuthRoutes}
    </Routes>
    </Box>
  );
};
