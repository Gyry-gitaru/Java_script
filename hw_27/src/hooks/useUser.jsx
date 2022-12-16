import { useState, useEffect } from "react";
import { getUser, updateUser, addNewUser } from "./../services/userService";

function useUser(userId) {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (userId) {
        setLoading(true);
        setUser(await getUser(userId));
        setLoading(false);
      }
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

  return { user, changeInput, changeUser, createUser, isLoading };
}

export default useUser;
