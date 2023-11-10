import { Button } from "@chakra-ui/react"
import { ISubmit } from "../../../models/interfaces/submit"


export const Submit :React.FC<ISubmit>= (props) => {
  return (
    <>
        <Button  bgGradient='linear(to-r, cyan.400, pink.600)' w='300px' ml='12.5%'>
            {props.text}
        </Button>
    </>
  )
}
