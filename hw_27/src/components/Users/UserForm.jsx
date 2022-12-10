import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUser from "./../../hooks/useUser";

function UserForm({ createUser }) {
  const { userId } = useParams();
  const {
    user,
    changeInput,
    createUser: create,
    changeUser: change,
  } = useUser(userId);
  const changeFormInput = (e) => changeInput(e.target.name, e.target.value);
  const navigation = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    createUser ? await create() : await change();
    navigation("/");
  };

  const cancelBtn = () => navigation("/");

  return (
    <form onSubmit={submitForm}>
      <label>
        Name{" "}
        <input
          type="text"
          name="name"
          defaultValue={user.name}
          onBlur={changeFormInput}
        />
      </label>
      <label>
        Email{" "}
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          onBlur={changeFormInput}
        />
      </label>
      <label>
        Address{" "}
        <input
          type="text"
          name="address"
          defaultValue={user.address}
          onBlur={changeFormInput}
        />
      </label>
      <label>
        Phone{" "}
        <input
          type="phone"
          name="phone"
          defaultValue={user.phone}
          onBlur={changeFormInput}
        />
      </label>
      <div>
        <button>{createUser ? `Create user` : `Save changes`}</button>
        <button type="button" onClick={cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UserForm;
