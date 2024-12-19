//extracting the user service
//connecting with backend mosh
import apiClient from "./services/apiClient";
import { CanceledError } from "./services/apiClient";

import { useEffect, useState } from "react";
import userService, { Users } from "./services/userService";

const Axios3 = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAllUsers();
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

  const deleteUser = (user: Users) => {
    //optimistic update: update the ui then update the server

    //updating ui
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    // updating server
    apiClient
      //ADDED FORWAD SLASH AT THE URL END IN DELETE REQUEST
      .delete("/users/" + user.id)
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
    apiClient
      .post("/users", newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };

  const modifyUser = (user: Users) => {
    //updating ui
    const origonalUsers = [...users];
    const modUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? modUser : u)));
    //reflecting changes in the server
    apiClient.patch("/users/" + user.id, modUser).catch((err) => {
      setErrors(err.message);
      setUsers(origonalUsers);
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
            <div>
              <button
                className="btn btn-outline-danger mx-3"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => modifyUser(user)}
              >
                Modify
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Axios3;
