import { Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


export const Footer = () => {
  return (
    <Box w='100%' h={100} bg='red' mt={10}>

    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/tasks'}>Tasks</NavLink>
    <NavLink to={'/tasks/create'}>newTask</NavLink>
    <NavLink to={'/user'}>UserPage</NavLink>
    </Box>
  )
}
