import axios, { CanceledError } from "axios";

import { useEffect, useState } from "react";

interface Users {
  name: string;
  id: number;
}
const Axios = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");
  //THIS IS FOR SHOWING A LOADER
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
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

    return () => controller.abort();
    /*When the component unmounts:
The AbortController cancels the request by calling controller.abort().
This prevents Axios from trying to update state after the component is unmounted.*/
  }, []);

  const deleteUser = (user: Users) => {
    //optimistic update: update the ui then update the server

    //updating ui
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    // updating server
    axios
      //ADDED FORWAD SLASH AT THE URL END IN DELETE REQUEST
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setErrors(err);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    //hardcoded data inputs
    const newUser = { id: 0, name: "pratham" };
    const originalUsers = [...users];
    //ui update
    setUsers([...users, newUser]);
    //serverUpdate
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Axios;
