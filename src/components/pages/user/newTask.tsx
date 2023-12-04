import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { addTask } from "../../../store/slices/tasksSlice";

interface NewTaskProps {
  onSave: () => void;
}

export const NewTask: React.FC<NewTaskProps> = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSave = async () => {
    try {
      const token = tokenCookie.get("token");
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      const response = await axios.post(
        "http://116.203.128.127:5680/api/v1/tasks",
        {
          title,
          description,
          dueDate: formattedDate,
          status: "To Do",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(addTask(response.data));
      onSave();
      toggleForm();
    } catch (error) {
      console.log("Произошла ошибка:", error);
    }
  };

  return (
    <Box>
      <Button onClick={toggleForm}>New task</Button>
      {isOpen && (
        <Box>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleSave}>Сохранить</Button>
        </Box>
      )}
    </Box>
  );
};