import React from "react";

import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";

function UserFormField({
  type = "text",
  label,
  name,
  value,
  isLoading,
  changeFormInput,
}) {
  return !isLoading ? (
    <TextField
      required
      label={label}
      name={name}
      type={type}
      defaultValue={value}
      onBlur={changeFormInput}
    />
  ) : (
    <Skeleton variant="rectangular" width={210} sx={{ m: 1 }} height={60} />
  );
}

export default UserFormField;
