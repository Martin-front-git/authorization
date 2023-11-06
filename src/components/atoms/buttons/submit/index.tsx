import { Button } from "@chakra-ui/react"
import style from './submit.module.scss';

export const Submit = () => {
  return (
    <>
        <Button className={style.submit} bgGradient='linear(to-r, cyan.400, pink.600)' >
            LOGIN
        </Button>
    </>
  )
}
