import { useState, useEffect } from "react";
import { getUser, updateUser, addNewUser } from "./../services/userService";

function useUser(userId) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      userId && setUser(await getUser(userId));
    })();
  }, []);

  const changeInput = (name, value) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const changeUser = async () => {
    await updateUser(user.id, user);
  };

  const createUser = async () => {
    await addNewUser(user);
  };

  return { user, changeInput, changeUser, createUser };
}

export default useUser;
