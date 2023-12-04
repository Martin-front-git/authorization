import axios from 'axios';

const baseURL = 'http://116.203.128.127:5680/api/v1/';

const instance = axios.create({
  baseURL,
});

export const deleteTaskById = async (taskId: number, token: string) => {
  try {
    await instance.delete(`tasks/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
