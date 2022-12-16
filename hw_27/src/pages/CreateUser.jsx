import React from 'react';
import UserForm from '../components/Users/UserForm';

function CreateUser() {
    return (
      <div>
        <h1>Create User</h1>
        <UserForm createUser />
      </div>
    );
}

export default CreateUser;