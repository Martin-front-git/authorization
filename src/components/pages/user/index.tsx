//import  { useEffect } from "react";
import axios from "axios";

const UserPage = () => {
    const userTask = async () =>{
        try{
        const response = await axios.get("http://116.203.128.127:5680/api/v1/tasks?take=10&skip=0",{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        });
        return response;
      }
      catch(error){
        console.error('Error fetching tasks:', error);
        throw error;
      }
      }
      userTask();
  return <div>user page</div>;
};

export default UserPage;
