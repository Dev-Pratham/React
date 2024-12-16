import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  name: string;
  id: number;
}
const Axios = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users1")
      .then((res) => setUsers(res.data))
      .catch((err) => setErrors(err.message));
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
