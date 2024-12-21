import { useEffect, useState } from "react";
import { Users } from "../services/httpService";
import userService from "../services/userService";
import { CanceledError } from "../services/apiClient";


const useUsers= ()=>{
    
 const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll<Users>();
    request
      .then((res) => {
        console.log(res);
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

     return { users,errors,isLoading,setIsLoading,setErrors,setUsers}
}

export default useUsers;