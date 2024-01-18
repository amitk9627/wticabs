import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
export const AddRoutes = () => {
  const [start, SetStart] = useState("");
  const [end, setEnd] = useState("");
  const handleDriver = () => {
    console.log(start, end);
  };
  const handleClear = () => {
    setEnd("");
    SetStart("");
  };
  return (
    <div className="p-4 flex flex-col gap-10 justify-center">
      {/* title */}
      <div>
        <p className="text-center font-bold text-4xl text-gray-500">Add Route Details</p>
      </div>
      {/* form */}
      <div className="grid grid-rows-2 gap-8 justify-center ">
        <TextField
          id="Start Point"
          label="Start Point"
          variant="outlined"
          value={start}
          onChange={(e) => SetStart(e.target.value)}
          className="w-96"
        />
        <TextField
          id="End Point"
          label="End Point"
          variant="outlined"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-96"
        />
      </div>
      {/* button */}
      <div className="flex gap-4 justify-center">
        <Button variant="contained" onClick={() => handleDriver()}>
          Add Route
        </Button>
        <Button variant="outlined" color="error" onClick={() => handleClear()}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
