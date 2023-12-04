// UserPage.tsx
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useTasks } from "./useTasks";
import DeleteButton from "../../atoms/button/delete";

const UserPage = () => {
  const { tasks, loading, error } = useTasks();
  const [isTasksVisible, setTasksVisible] = useState(false);

  const toggleTasksVisibility = () => {
    setTasksVisible(!isTasksVisible);
  };

  return (
    <>
      <button onClick={toggleTasksVisibility} disabled={loading}>
        {isTasksVisible ? "Скрыть" : "Показать"}
      </button>

      {loading && <p>Идет загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isTasksVisible && tasks.length > 0 && (
        <Box display="flex" flexWrap="wrap" w="100%" gap={5} justifyContent='center'>
          {tasks.map((task, index) => (
            <Box key={index} w="200px" height="100px" borderWidth="1px" p="4" position='relative'>
              <DeleteButton taskId={task.id} />
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
//       "description": "Martinn",
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
