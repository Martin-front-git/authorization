import { FormControl, Input } from "@chakra-ui/react";
import { IInputs } from "../../../models/interfaces/form";
import s from './input.module.scss';

export function Inputs({ register, placeholder, name, type }: IInputs) {
  return (
    <FormControl mt={5}>
      <Input
        border={"none"}
        borderBottom={"1px solid gray"}
        boxShadow='sm'
        _hover={{fontSize : "20px"}}
       className={s.input}
        borderRadius={0}
        placeholder={placeholder}
        {...register(name, { required: true })}
        type={type}
        w="80%"
        ml={10}
        fontFamily={"cursive"}
      />
    </FormControl>
  );
}
