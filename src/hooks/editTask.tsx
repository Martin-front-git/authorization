import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { tokenCookie } from "./tokenCookie";
import { updateTask } from "../store/slices/tasksSlice";
import { TaskEditProps } from "../models/interfaces/tasks";
import { Buton } from "../components/atoms/button/button";
import { Textareaa } from "../components/atoms/textarea";

const TaskEditLogic: React.FC<TaskEditProps> = ({
  taskId,
  title,
  description,
  onSave,
  onCancel,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const dispatch = useDispatch();
  const saveEditedTask = async () => {
    try {
      const token = tokenCookie.get("token");
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}tasks/${taskId}`,
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

      dispatch(
        updateTask({
          id: taskId,
          title: editedTitle,
          description: editedDescription,
        })
      );
      onSave();
    } catch (error) {
      console.error("Произошла ошибка при отправке PATCH-запроса:", error);
    }
  };

  return (
    <Box>
      <Textareaa
        placeholder="Title"
        value={editedTitle}
        onchange={(e) => setEditedTitle(e.target.value)}
      />
      <Textareaa
        placeholder="Description"
        value={editedDescription}
        onchange={(e) => setEditedDescription(e.target.value)}
      />
      <Box position='absolute' left='25%' bottom={2}>
        <Buton onClick={saveEditedTask} text={"Save"} />
        <Buton onClick={onCancel} text={"Cancel"} />
      </Box>
    </Box>
  );
};

export default TaskEditLogic;
