import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { getTasks } from "../../../services/axios/getTasks";
import { setTasks, selectTasks } from "../../../store/slices/tasksSlice";
import { Box } from "@chakra-ui/react";
//import axios from 'axios'

const UserPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [isTasksVisible, setTasksVisible] = useState(false);

  const fetchTasksList = useCallback(async () => {
    const token = tokenCookie.get("token");
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await getTasks({ token });
      dispatch(setTasks(response.data));
    } catch (error) {
      setError("Произошла ошибка при загрузке задач.");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);

  const toggleTasksVisibility = () => {
    setTasksVisible(!isTasksVisible);
  };

  return (
    <>
      <button onClick={toggleTasksVisibility} disabled={loading}>
        {isTasksVisible ? "Скрыть задачи" : "Показать задачи"}
      </button>

      {loading && <p>Идет загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isTasksVisible && tasks.length > 0 && (
        <Box display="flex" flexWrap="wrap" w="100%">
          {tasks.map((task, index) => (
            <Box key={index} w="200px" height="200px" borderWidth="1px" p="4">
              <p>{task.id}</p>
              <p>{task.title}</p>
              <p>{task.description}</p>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default UserPage;




//======================================================================================//

//---------- POST ----------------//
// const token = tokenCookie.get("token");
//   try {
//     axios.post('http://116.203.128.127:5680/api/v1/tasks',
//     {
//       "title": "Privet",
//       "description": "Martinnhv",
//       "dueDate": "2023-12-03",
//       "status": "To Do"
//     }, {
//     headers: {
//         'Authorization' : `Bearer ${token}`,
//         'accept' : 'application/json',
//         'Content-Type': 'application/json'
//     }
// })
// .then(function (response) {
//     console.log(response);
// })
//   } catch (error) {
//     console.log("Произошла ошибка:", error);
//   }

//=====================================================================================//
///---------DELETE----------///

// try {
//   const token = tokenCookie.get("token");
//   const id = "75";
//   axios
//     .delete(`http://116.203.128.127:5680/api/v1/tasks/${id}`,{
//       headers: {
//         'Authorization': `Bearer ${token}`
//     }
//     })
//     .then(function (response) {
//       console.log(response);
//     });
// } catch (error) {
//   console.log(error);
// }

//=============================================================================================//
//-------------------------PATH(update)------------------------------------//
//   try {
//     const token = localStorage.getItem("accessToken");
// const id = '25';
// axios.patch(`http://116.203.128.127:5680/api/v1/tasks/${id}`, {
//   "title": "Hello",
//   "description": "Worlds",
//   "dueDate": "2023-12-03",
//   "status": "To Do"
// }, {
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// })
// .then(function (response) {
//     console.log(response);
// })
//   } catch (error) {
//     console.log(error);
//   }
