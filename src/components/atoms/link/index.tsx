import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ILinks } from "../../../models/interfaces/links";

export const Links = ({ src, alt, name, link}: ILinks) => {
  if (link === undefined) {
    return null;
  }
  return (
    <>
      <NavLink to={link}>
        <Image w={10} src={src} alt={alt} mx={2}/>
        {name}
      </NavLink>
    </>
  );
};
