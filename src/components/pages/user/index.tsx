// UserPage.tsx
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { NewTask } from "../../../hooks/newTask";
import { useTasks } from "../../../hooks/useTasks";
import TaskEditLogic from "../../../hooks/editTask";
import DeleteButton from "../../../hooks/deleteTask";
import { Buton } from "../../atoms/button/button";
import style from "./user.module.scss";
import {
  fetchTasksListAsync,
  selectTasks,
} from "../../../store/slices/fetchTaskList";

const UserPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const { loading, error, fetchTasksList } = useTasks();
  const [isTasksVisible, setTasksVisible] = useState(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const startEditTask = (taskId: number) => {
    setEditTaskId(taskId);
  };

  const cancelEditTask = () => {
    setEditTaskId(null);
  };

  const handleToggleVisibility = () => {
    setTasksVisible((prevIsTasksVisible) => !prevIsTasksVisible);
  };
  
  const handleShowTasks = () => {
    if (isTasksVisible) {
      dispatch(fetchTasksListAsync());
    }
  };

  useEffect(() => {
    if (isTasksVisible) {
      fetchTasksList();
    }
  }, [isTasksVisible, fetchTasksList]);

  return (
    <>
      <Box className={style.navbar}>
        <Box className={style.button}>
          <NewTask onSave={fetchTasksList} />
        </Box>
        <Box className={style.button}>
          <Buton
            onClick={handleToggleVisibility}
            disabled={loading}
            text={isTasksVisible ? "Hide" : "Show"}
          />
        </Box>
      </Box>

      <Box mt={10}>
        {isTasksVisible && tasks.length > 0 && (
          <Box
            display="flex"
            flexWrap="wrap"
            w="100%"
            gap={5}
            justifyContent="center"
          >
            {tasks.map((task, index) => (
              <Box
                key={index}
                w="30%"
                height="250px"
                borderWidth="1px"
                p="4"
                position="relative"
              >
                <DeleteButton taskId={task.id} />
                {editTaskId === task.id ? (
                  <TaskEditLogic
                    taskId={task.id}
                    title={task.title}
                    description={task.description}
                    onSave={() => {
                      setEditTaskId(null);
                      fetchTasksList();
                    }}
                    onCancel={cancelEditTask}
                  />
                ) : (
                  <Box>
                    <Text>{task.id}</Text>
                    <Text>{task.title}</Text>
                    <Text>{task.description}</Text>
                    <Box position="absolute" bottom={2} left="35%">
                      <Buton
                        onClick={() => startEditTask(task.id)}
                        text={"Edit"}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
            {/* <Box display='flex' justifyContent='center'>
          {tasks.length > 0 && (
            <Box mt={5} display="flex" justifyContent="center">
              <Buton onClick={() => handlePageChange(page - 1)} text="Previous" disabled={page === 1} />
              <Text mx={2}>{page}</Text>
              <Buton onClick={() => handlePageChange(page + 1)} text="Next" />
            </Box>
          )}
          </Box> */}
          </Box>
        )}
      </Box>
      {loading && <p>Идет загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default UserPage;

// import { useCallback, useState } from "react";
// import { Box, Text } from "@chakra-ui/react";
// import { NewTask } from "../../../hooks/newTask";
// import { useTasks } from "../../../hooks/useTasks";
// import TaskEditLogic from "../../../hooks/editTask";
// import DeleteButton from "../../../hooks/deleteTask";
// import { Buton } from "../../atoms/button/button";
// import style from './user.module.scss';

// const UserPage = () => {
//   const { tasks, loading, error, fetchTasksList, page, handlePageChange } = useTasks();
//   const [isTasksVisible, setTasksVisible] = useState(false);
//   const [editTaskId, setEditTaskId] = useState<number | null>(null);

//   const toggleTasksVisibility = useCallback(() => {
//     setTasksVisible((prevIsTasksVisible) => !prevIsTasksVisible);
//   }, []);

//   const startEditTask = (taskId: number) => {
//     setEditTaskId(taskId);
//   };

//   const cancelEditTask = () => {
//     setEditTaskId(null);
//   };

//   const handleToggleVisibility = () => {
//     toggleTasksVisibility();
//     if (!isTasksVisible) {
//       fetchTasksList();
//     }
//   };

//   return (
//     <>
//       <Box className={style.navbar}>
//         <Box className={style.button}><NewTask onSave={fetchTasksList}/></Box>
//         <Box className={style.button}><Buton onClick={handleToggleVisibility} disabled={loading} text={isTasksVisible ? "Hide" : "Show"} /></Box>
//       </Box>

//       <Box mt={10}>
//       {isTasksVisible && tasks.length > 0 && (
//         <Box display="flex" flexWrap="wrap" w="100%" gap={5} justifyContent="center">
//           {tasks.map((task, index) => (
//             <Box key={index} w="30%" height="250px" borderWidth="1px" p="4" position="relative" >
//               <DeleteButton taskId={task.id} />
//               {editTaskId === task.id ? (
//                 <TaskEditLogic
//                   taskId={task.id}
//                   title={task.title}
//                   description={task.description}
//                   onSave={() => {
//                     setEditTaskId(null);
//                     fetchTasksList();
//                   }}
//                   onCancel={cancelEditTask}
//                 />
//               ) : (
//                 <Box >
//                   <Text>{task.id}</Text>
//                   <Text>{task.title}</Text>
//                   <Text>{task.description}</Text>
//                   <Box position='absolute' bottom={2} left='35%'>
//                     <Buton onClick={() => startEditTask(task.id)} text={'Edit'}/>
//                   </Box>

//                 </Box>
//               )}
//             </Box>
//           ))}
//           <Box display='flex' justifyContent='center'>
//           {tasks.length > 0 && (
//             <Box mt={5} display="flex" justifyContent="center">
//               <Buton onClick={() => handlePageChange(page - 1)} text="Previous" disabled={page === 1} />
//               <Text mx={2}>{page}</Text>
//               <Buton onClick={() => handlePageChange(page + 1)} text="Next" />
//             </Box>
//           )}
//           </Box>
//         </Box>
//       )}
//       </Box>
//       {loading && <p>Идет загрузка...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </>
//   );
// };

// export default UserPage;
