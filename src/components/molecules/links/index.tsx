import { Box, Flex, Text } from "@chakra-ui/react";
import { SignUpLink } from "../../atoms/link";
import { ILinks } from "../../../models/interfaces/links";
import Fb from "../../../../public/images/Facebook.webp";
import Tw from "../../../../public/images/twitter.png";
import Goo from "../../../../public/images/google.png";

const links: ILinks[] = [
  {
    href: "#",
    src: Fb,
    alt: "facebook",
  },
  {
    href: "#",
    src: Tw,
    alt: "Twitter",
  },
  {
    href: "#",
    src: Goo,
    alt: "Google",
  },
];

export const Links = () => {
  return (
    <Box mt={10}>
      <Text textAlign='center'>Or Sign Up Using</Text>
      <Flex ml='29%' mt={5}>
        {links.map((link, index) => (
          <SignUpLink key={index} {...link} />
        ))}
      </Flex>
    </Box>
  );
};
