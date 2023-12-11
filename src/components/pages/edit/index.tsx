import { useLocation} from "react-router-dom";
import { Links } from "../../atoms/link"
import { Box, Button, Input, Select } from "@chakra-ui/react";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { editTasks, getTasks } from "../../../store/slices/fetchContent";
import { useState } from "react";

export const EditTask = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const task = location.state.task;
    const [status, setStatus] = useState(task.status);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const editTask = {
        name: "<- go back",
        link: "/user",
    };

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const currentDate = new Date();
    const dueDate = formatDate(currentDate);

    const onPost = () => {
        if (title && description) {
            const updatedTask = {
                id: task.id,
                title,
                description,
                dueDate: dueDate,
                status: status,
            };  
            dispatch(editTasks(updatedTask)).then(() => {
                dispatch(getTasks());
            });
            setTitle("");
            setDescription("");
            setStatus("To Do");
        }
    };
    
    return (
        <>
        <Links {...editTask}/>
        <Box>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Заголовок" />
            <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Описание" />
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </Select>
            <Button onClick={onPost}>Отправить</Button>
        </Box>
    </>
    )
}
