import { Image, Link } from "@chakra-ui/react";
import { ILinks } from "../../../models/interfaces/links";


export const SignUpLink:React.FC<ILinks> = (props) => {
  return (
    <>
      <Link href={props.href}>
        <Image w={10} src={props.src} alt={props.alt} mx={2}/>
      </Link>
    </>
  );
};
