import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addTasks, getTasks } from "../../../store/slices/fetchContent";
import { AppDispatch } from "../../../store/store";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./newTask.module.scss";
import { Links } from "../../atoms/link";

export default function NewTask() {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const bgColor = useColorModeValue('rgba(255, 255, 255,1)','rgba(255, 255, 255, 0.100)');
  const textColor = useColorModeValue('rgba(0, 0, 0, 1)','rgba(255, 255, 255, 1)');
  const onPost = () => {
    if (title && description) {
      const task = {
        title,
        description,
        dueDate: dueDate.toISOString().split("T")[0],
        status: "To Do",
      };
      dispatch(addTasks(task)).then(() => {
        dispatch(getTasks());
      });
      setTitle("");
      setDescription("");
      setDueDate(new Date());
    }
  };
  const editTask = {
    name: "<- go back",
    link: "/user",
  };

  return (
    <Box className={style.areaBlock} shadow='dark-lg' >
      <Box  className={style.backLink} ><Links {...editTask} /></Box>
      <Box className={style.title}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Заголовок"
        />
      </Box>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
        className={style.textarea}
      />

      <Box className={style.calendarBlock} display="flex" justifyContent="space-between">
        <Menu>
          <MenuButton as={Button} colorScheme="blue" bgColor={bgColor} textColor={textColor}>
            Calendar
          </MenuButton>
          <MenuList>
            <Box className={style.reactCalendar}>
            <Calendar
            className={style.calendar}
              onChange={(value) => {
                if (value instanceof Date) {
                  setDueDate(value);
                }
              }}
              value={dueDate}
            />
            </Box>
          </MenuList>
        </Menu>
        <Button onClick={onPost}>Отправить</Button>
      </Box>
    </Box>
  );
}
