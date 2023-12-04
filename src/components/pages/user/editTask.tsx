import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { updateTask } from "../../../store/slices/tasksSlice";

interface TaskEditProps {
  taskId: number;
  title: string;
  description: string;
  onSave: () => void;
  onCancel: () => void;
}

const TaskEditLogic: React.FC<TaskEditProps> = ({ taskId, title, description, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const dispatch = useDispatch();

  const saveEditedTask = async () => {
    try {
      const token = tokenCookie.get("token");
      await axios.patch(
        `http://116.203.128.127:5680/api/v1/tasks/${taskId}`,
        {
          title: editedTitle,
          description: editedDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(updateTask({ id: taskId, title: editedTitle, description: editedDescription }));
      onSave();
    } catch (error) {
      console.error("Произошла ошибка при отправке PATCH-запроса:", error);
    }
  };

  return (
    <Box>
      <Input placeholder="Title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      <Textarea placeholder="Description" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
      <Button onClick={saveEditedTask}>Сохранить</Button>
      <Button onClick={onCancel}>Отменить</Button>
    </Box>
  );
};

export default TaskEditLogic;
