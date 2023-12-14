import { Text } from "@chakra-ui/react";
interface IText {
  text: string
}
export const Title = ({text}:IText) => {
  return (
    <>
      <Text fontSize="xx-large" textAlign="center" fontFamily={"cursive"}>{text}</Text>
    </>
  );
};
