import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Users {
  name: string;
  id: number;
}
const Axios2 = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get<Users[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setErrors((err as AxiosError).message);
      }
    };

    fetchUser();
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

export default Axios2;
