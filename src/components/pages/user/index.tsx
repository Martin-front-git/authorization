import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTasks, getTasks } from "../../../store/slices/fetchContent";
import { AppDispatch } from "../../../store/store";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Delete } from "../../atoms/button/delete";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../organisms/pagination";
import style from "./user.module.scss";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: any) => state.tasks.contents) || [];
  const isLoading = useSelector((state: any) => state.tasks.isLoading);
  const error = useSelector((state: any) => state.tasks.error);
  const navigate = useNavigate();
  console.log(tasks);
  
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const offset = currentPage * itemsPerPage;

  const displayedTasks = tasks.slice(offset, offset + itemsPerPage);

  const onPageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const onDelete = (id: string) => {
    dispatch(deleteTasks(id)).then(() => {
      dispatch(getTasks());
    });
  };
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.366)','rgba(0, 0, 0, 0.400)');
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box className={style.taskBlock}>
      <Box className={style.taskDiv}>
        {displayedTasks.map((task: any) => (
          <Box key={task.id} className={style.tasks} shadow="lg" bgColor={bgColor}>
            <Box
              position="relative"
              onClick={() => navigate("/user/edit", { state: { task } })}
            >
              <Delete onClick={() => onDelete(task.id)} text="X" />
              <Text className={style.title}>{task.title}</Text>
              <Text className={style.post}>{task.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Pagination
        tasks={tasks}
        onPageChange={onPageChange}
        pageCount={Math.ceil(tasks.length / itemsPerPage)}
      />
    </Box>
  );
};

export default UserPage;
