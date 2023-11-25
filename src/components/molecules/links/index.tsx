import { Box, Flex, Text } from "@chakra-ui/react";
import { Links} from "../../atoms/link";
import { ILinks } from "../../../models/interfaces/links";
import Fb from "../../../../public/images/Facebook.webp";
import Tw from "../../../../public/images/twitter.png";
import Goo from "../../../../public/images/google.png";

const links: ILinks[] = [
  {
    link: "/Fb",
    src: Fb,
    alt: "facebook",
  },
  {
    link: "/Tw",
    src: Tw,
    alt: "Twitter",
  },
  {
    link: "/Goo",
    src: Goo,
    alt: "Google",
  },
];

export const Link = () => {
  return (
    <Box mt={10}>
      <Text textAlign='center'>Or Sign Up Using</Text>
      <Flex ml='29%' mt={5}>
        {links.map((link, index) => (
          <Links key={index} {...link} />
        ))}
      </Flex>
    </Box>
  );
};
