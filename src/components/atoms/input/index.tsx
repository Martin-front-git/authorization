import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { InputsProps } from '../../../models/interfaces/form';


export function Inputs({ register, label, name }: InputsProps) {
  return (
    <FormControl>
      <FormLabel ml={12}>{label}</FormLabel>
      <Input {...register(name)} w='80%' ml={10}/>
    </FormControl>
  );
}
