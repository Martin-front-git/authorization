import { Image, Link } from "@chakra-ui/react";
import GG from "../../../../public/images/google.png";


export const Google = () => {
  return (
    <>
      <Link>
        <Image w={10} src={GG} alt="google" mx={2}/>
      </Link>
    </>
  );
};
