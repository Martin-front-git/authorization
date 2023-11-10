import { FormLabel, Input } from "@chakra-ui/react";
import { IInputs } from "../../../models/interfaces/inputs";
import { Form } from "react-hook-form";

export const Inputs: React.FC<IInputs> = (props) => {
  return (
    <>
        <FormLabel>{props.labelText}</FormLabel>
        <Input
          type={props.type}
          placeholder={props.placeholder}
          border="none"
          borderBottom="1px"
        />
      <Form>
      </Form>
    </>
  );
};
