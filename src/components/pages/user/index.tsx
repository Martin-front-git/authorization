import { useDispatch, useSelector } from "react-redux";
import { deleteTasks, getTasks } from "../../../store/slices/fetchContent";
import { AppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Delete } from "../../atoms/button/delete";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: any) => state.tasks.contents) || [];
  const isLoading = useSelector((state: any) => state.tasks.isLoading);
  const error = useSelector((state: any) => state.tasks.error);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  console.log(tasks);

  const onDelate = (id: string) => {
    dispatch(deleteTasks(id)).then(() => {
      dispatch(getTasks());
    });
  };

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return error;
  }
  return (
    <Box mt={10} display="flex" flexWrap="wrap" gap={1} w="100%">
      {tasks.map((task: any) => (
        <Box
          key={task.id}
          w="32%"
          h={300}
          border="1px solid"
          m="0px auto"
          position="relative"
        >
          <Box onClick={() => navigate('/user/edit', { state: { task } })}>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <Delete onClick={() => onDelate(task.id)} text={"X"} />
            </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserPage;
