import { Button, FormControl } from "@chakra-ui/react"
import { ISubmit } from "../../../models/interfaces/submit"


export const Submit :React.FC<ISubmit>= (props) => {
  return (
    <FormControl>
      <Button  bgGradient='linear(to-r, cyan.400, pink.600)' w='300px' ml='12.5%' mt={10} type="submit">
            {props.text}
        </Button>
    </FormControl>
  )
}
