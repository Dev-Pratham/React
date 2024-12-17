import axios, { CanceledError } from "axios";

import { useEffect, useState } from "react";

interface Users {
  name: string;
  id: number;
}
const Axios = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
    /*When the component unmounts:
The AbortController cancels the request by calling controller.abort().
This prevents Axios from trying to update state after the component is unmounted.*/
  }, []);

  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Axios;
