import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Delete } from "../../atoms/button/delete";
import { useNavigate } from "react-router-dom";
import style from "./user.module.scss";
import { AppDispatch } from "../../../store/store";
import { deleteTasks, getTasks } from "../../../store/slices/fetchContent";
import Pagination from "../../organisms/pagination";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: any) => state.tasks.isLoading);
  const error = useSelector((state: any) => state.tasks.error);
  const navigate = useNavigate();
  const tasks = useSelector((state: any) => state.tasks.contents) || [];
  const totalTasksCount = useSelector((state: any) => state.tasks.totalCount);
  
  const take = 10; 
  const pageCount = Math.ceil(totalTasksCount / take);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const skip = currentPage * take; 
    dispatch(getTasks({ skip }));
  }, [dispatch, currentPage, take]);

  const onDelete = (id: string) => {
    const skip = currentPage * take;
    dispatch(deleteTasks(id)).then(() => {
      dispatch(getTasks({ skip }));
    });
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const bgColor = useColorModeValue('rgba(255, 255, 255, .366)','rgba(0, 0, 0, 0.400)');
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box className={style.taskBlock}>
      <Box className={style.taskDiv}>
        {Array.isArray(tasks) && tasks.map((task: any) => (
          <Box position='relative' key={task.id} className={style.tasks} bgColor={bgColor}>
            <Box><Delete onClick={() => onDelete(task.id)} text="X"/></Box>
            <Box onClick={() => navigate(`/tasks/${task.id}/update`, { state: { task } })}>
              <Text className={style.title}>{task.title}</Text>
              <Text className={style.post}>{task.description}</Text>
              <Text className={style.post}>{task.status}</Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};


export default UserPage;

