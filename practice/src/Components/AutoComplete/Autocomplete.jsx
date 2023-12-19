import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

export default function Autocomp() {
  const [autovalue, setAutovalue] = useState("");

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const handleAutovalue = (e, value) => {
    setAutovalue(value);
  };

  const getOptionSelected = (option, value) => option.label === value.label;

  return (
    <>
      <Autocomplete
        value={autovalue}
        onChange={handleAutovalue}
        getOptionSelected={getOptionSelected}
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300, margin: 10 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}
