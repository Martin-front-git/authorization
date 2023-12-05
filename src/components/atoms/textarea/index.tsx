import { Textarea } from "@chakra-ui/react"
import { ITextarea } from "../../../models/interfaces/textarea"


export const Textareaa = ({placeholder,value,onchange}:ITextarea) => {
  return (
    <Textarea placeholder={placeholder} value={value} onChange={onchange}/>
  )
}