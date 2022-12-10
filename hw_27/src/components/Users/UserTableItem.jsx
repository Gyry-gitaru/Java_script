import React from "react";
import { Link } from "react-router-dom";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

function UserTableItem({ user, deleteUser }) {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to={`/${user.id}`}
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default UserTableItem;
