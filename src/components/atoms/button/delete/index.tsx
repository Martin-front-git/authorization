// DeleteButton.tsx
import { Button } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { tokenCookie } from "../../../../hooks/tokenCookie";
import { deleteTaskById } from "../../../pages/user/deleteTask";
import { deleteTask } from "../../../../store/slices/tasksSlice";

interface DeleteButtonProps {
  taskId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = async () => {
    try {
      const token = tokenCookie.get("token");

      if (token !== null) {
        await deleteTaskById(taskId, token);
        dispatch(deleteTask(taskId));
      } else {
        console.error('Token is null');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button colorScheme='red' size='sm' position='absolute' right={0} top={0} onClick={handleDeleteTask}>
      X
    </Button>
  );
};

export default DeleteButton;
