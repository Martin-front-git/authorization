import { Image, Link } from "@chakra-ui/react";
import FB from "../../../../../public/images/Facebook.webp";

export const Facebook = () => {
  return (
    <>
      <Link>
        <Image w={10} src={FB} alt="facebook" mx={2}/>
      </Link>
    </>
  );
};
