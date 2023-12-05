import { useCallback, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { NewTask } from "../../../hooks/newTask";
import { useTasks } from "../../../hooks/useTasks";
import TaskEditLogic from "../../../hooks/editTask";
import DeleteButton from "../../../hooks/deleteTask";
import { Buton } from "../../atoms/button/button";

const UserPage = () => {
  const { tasks, loading, error, fetchTasksList, page, handlePageChange } = useTasks();
  const [isTasksVisible, setTasksVisible] = useState(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const toggleTasksVisibility = useCallback(() => {
    setTasksVisible((prevIsTasksVisible) => !prevIsTasksVisible);
  }, []);

  const startEditTask = (taskId: number) => {
    setEditTaskId(taskId);
  };

  const cancelEditTask = () => {
    setEditTaskId(null);
  };

  const handleToggleVisibility = () => {
    toggleTasksVisibility();
    if (!isTasksVisible) {
      fetchTasksList();
    }
  };

  return (
    <>
      <Box m={5}>
        <NewTask onSave={fetchTasksList} />
        <Buton onClick={handleToggleVisibility} disabled={loading} text={isTasksVisible ? "Hide" : "Show"} />
      </Box>

      {loading && <p>Идет загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isTasksVisible && tasks.length > 0 && (
        <Box display="flex" flexWrap="wrap" w="100%" gap={5} justifyContent="center">
          {tasks.map((task, index) => (
            <Box key={index} w="200px" height="100px" borderWidth="1px" p="4" position="relative">
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
                  <Buton onClick={() => startEditTask(task.id)} text={'Edit'}/>
                </Box>
              )}
            </Box>
          ))}
          {tasks.length > 0 && (
            <Box mt={5} display="flex" justifyContent="center">
              <Buton onClick={() => handlePageChange(page - 1)} text="Previous" disabled={page === 1} />
              <Text mx={2}>{page}</Text>
              <Buton onClick={() => handlePageChange(page + 1)} text="Next" />
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default UserPage;
