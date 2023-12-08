import axios from 'axios';
import { useDispatch } from 'react-redux';
import { tokenCookie } from './tokenCookie';
import { deleteTask } from '../store/slices/tasksSlice';
import { IDeleteButton } from '../models/interfaces/deleteButton';
import { Delete } from '../components/atoms/button/delete';

const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({baseURL});

const DeleteButton: React.FC<IDeleteButton> = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = async () => {
    try {
      const token = tokenCookie.get("token");

      if (token !== null) {
        await instance.delete(`tasks/${taskId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        dispatch(deleteTask(taskId));
      } else {
        console.error('Token is null');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };

  return <Delete onClick={handleDeleteTask} text={'X'}/>
};

export default DeleteButton;
