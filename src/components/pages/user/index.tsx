import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../../store/slices/fetchContent";
import { AppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: any) => state.tasks.contents) || [];
  const isLoading = useSelector((state:any) => state.tasks.isLoading);
  const error = useSelector((state:any) => state.tasks.error);
  
  useEffect(() => {
     dispatch(getTasks());
     
  }, [dispatch]);
  
  if (isLoading) {
    return 'loading...'
  }
  
  if (error) {
    return error
  }
  
  return (
    <Box mt={10}>
      {tasks.map((task: any) => (
          <Box key={task.id}>
             <p>{task.title}</p>
              <p>{task.description}</p>
          </Box>
        ))}
    </Box>
  );
};

export default UserPage;
