import { Image, Link } from "@chakra-ui/react";
import TW from "../../../../../public/images/twitter.png";


export const Twitter = () => {
  return (
    <>
      <Link>
        <Image w={10} src={TW} alt="twitter" mx={2}/>
      </Link>
    </>
  );
};
