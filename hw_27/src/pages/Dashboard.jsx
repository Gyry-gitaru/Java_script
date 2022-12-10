import React from "react";
import UsersTable from "../components/Users/UsersTable";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

function Dashboard() {
  return (
    <>
      <h1>Users</h1>
      <Button sx={{ mb: 2 }} component={Link} to="/create" variant="contained">
        Create User
      </Button>
      <UsersTable />
    </>
  );
}

export default Dashboard;
