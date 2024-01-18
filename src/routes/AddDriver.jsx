import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
export const AddDriver = () => {
  const[drivername] =useState("");
  return (
    <div className="p-4 flex flex-col gap-10  justify-center">
      {/* title */}
      <div>
        <p className="text-center font-bold text-4xl">Driver's Detials</p>
      </div>
      {/* form */}
      <div className="grid grid-cols-2 gap-8">
        <TextField
          id="Driver's Name"
          label="Driver's Name"
          variant="outlined"
          
        />
        <TextField
          id="Driver's Mobile Number"
          label="Driver's Mobile Number"
          variant="outlined"
        />
        <TextField
          id="Driver's Document"
          label="Driver's Document"
          variant="outlined"
        />
        <TextField
          id="Driver's Address"
          label="Driver's Address"
          variant="outlined"
        />
      </div>
      {/* button */}
      <div className="flex gap-4">
        <Button variant="contained">Save</Button>
        <Button variant="outlined" color="error">Cancel</Button>
      </div>
      
    </div>
  );
};
