import { FormControl, FormLabel, Input} from '@chakra-ui/react';
import { IInputs } from '../../../models/interfaces/form';


export function Inputs({ register, label, name, type}: IInputs) {
  return (
    <FormControl>
      <FormLabel ml={12}>{label}</FormLabel>
      <Input {...register(name, { required: true })} type={type} w='80%' ml={10}/>
    </FormControl>
  );
}
