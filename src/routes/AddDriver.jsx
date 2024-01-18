import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
export const AddDriver = () => {
  const [drName,setDrName] = useState("");
  const [drNumber,setDrNumber] = useState("");
  const [drDocument,setDrDocument] = useState("");
  const [drAddress,setDrAddress] = useState("");
  const handleDriver=()=>{
    console.log(drAddress,drDocument,drName,drNumber);
  }
  const handleClear=()=>{
    setDrAddress("")
    setDrDocument("")
    setDrName("")
    setDrNumber("")
  }
  return (
    <div className="p-4 flex flex-col gap-10  justify-center">
      {/* title */}
      <div>
        <p className="text-center font-bold text-4xl">Driver's Details</p>
      </div>
      {/* form */}
      <div className="grid grid-cols-2 gap-8">
        <TextField
          id="Driver's Name"
          label="Driver's Name"
          variant="outlined"
          value={drName}
          onChange={(e)=>setDrName(e.target.value)}
        />
        <TextField
          id="Driver's Mobile Number"
          label="Driver's Mobile Number"
          variant="outlined"
          value={drNumber}
           onChange={(e)=>setDrNumber(e.target.value)}
        />
        <TextField
          id="Driver's Document"
          label="Driver's Document"
          variant="outlined"
          value={drDocument}
           onChange={(e)=>setDrDocument(e.target.value)}
        />
        <TextField
          id="Driver's Address"
          label="Driver's Address"
          variant="outlined"
          value={drAddress}
           onChange={(e)=>setDrAddress(e.target.value)}
        />
      </div>
      {/* button */}
      <div className="flex gap-4 justify-center">
        <Button variant="contained" onClick={()=>handleDriver()}>Add Driver</Button>
        <Button variant="outlined"  color="error" onClick={()=>handleClear()}>Cancel</Button> 
      </div>
    </div>
  );
};
