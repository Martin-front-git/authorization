import { Box, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTasks, getTasks } from "../../../store/slices/fetchContent";
import { AppDispatch } from "../../../store/store";

export default function NewTask() {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const onPost = () => {
    if (title && description) {
      const task = {
        title,
        description,
        dueDate: formattedDate,
        status: "To Do",
      };
      dispatch(addTasks(task)).then(() => {
        dispatch(getTasks());
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Box>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Заголовок"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Описание"
      />
      <Button onClick={onPost}>Отправить</Button>
    </Box>
  );
}
