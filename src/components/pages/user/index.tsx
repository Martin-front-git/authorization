import  { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import DeleteButton from "../../atoms/button/delete";
import { NewTask } from "./newTask";
import { useTasks } from "../../../hooks/useTasks";
import TaskEditLogic from "./editTask";

const UserPage = () => {
  const { tasks, loading, error, fetchTasksList } = useTasks();
  const [isTasksVisible, setTasksVisible] = useState(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const toggleTasksVisibility = () => {
    setTasksVisible(!isTasksVisible);
  };

  const startEditTask = (taskId: number) => {
    setEditTaskId(taskId);
  };

  const cancelEditTask = () => {
    setEditTaskId(null);
  };

  return (
    <>
      <Flex>
        <NewTask onSave={fetchTasksList} />
        <Button onClick={toggleTasksVisibility} disabled={loading}>
          {isTasksVisible ? "Скрыть" : "Показать"}
        </Button>
      </Flex>

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
                <>
                  <p>{task.id}</p>
                  <p>{task.title}</p>
                  <p>{task.description}</p>
                  <Button onClick={() => startEditTask(task.id)}>Редактировать</Button>
                </>
              )}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default UserPage;
