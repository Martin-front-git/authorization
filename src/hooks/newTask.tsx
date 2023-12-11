import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { tokenCookie } from "./tokenCookie";
import { addTask } from "../store/slices/tasksSlice";
import { NewTaskProps } from "../models/interfaces/tasks";
import { Buton } from "../components/atoms/button/button";
import { Textareaa } from "../components/atoms/textarea";

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
        `${import.meta.env.VITE_BASE_URL}tasks`,
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
      dispatch(addTasks(response.data));
      onSave();
      toggleForm();
    } catch (error) {
      console.log("Произошла ошибка:", error);
    }
  };

  return (
    <Box display='flex' width='100%' h="80px" alignItems='center'>
      <Box><Buton onClick={toggleForm} text={"New task"} /></Box>
      {isOpen && (
        <Box display='flex' justifyContent='center' alignItems='center' w="97%">
          <Textareaa
            placeholder="Title"
            value={title}
            onchange={(e) => setTitle(e.target.value)}
          />
          <Textareaa
            placeholder="Description"
            value={description}
            onchange={(e) => setDescription(e.target.value)}
          />
          <Box>
            <Buton onClick={handleSave} text={'Save'}/>
          </Box>
        </Box>
      )}
    </Box>
  );
};
