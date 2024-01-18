import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
export const AddConductor = () => {
  const [conName, setConName] = useState("");
  const [conNumber, setConNumber] = useState("");
  const [conDocument, setConDocument] = useState("");
  const [conAddress, setConAddress] = useState("");
  const handleCondunctor = () => {
    console.log(conAddress, conDocument, conName, conNumber);
  };
  const handleClear = () => {
    setConAddress("");
    setConDocument("");
    setConName("");
    setConNumber("");
  };
  return (
    <div className="p-4 flex flex-col gap-10  justify-center ">
      {/* title */}
      <div>
        <p className="text-center font-bold text-4xl">Conductor's Details</p>
      </div>
      {/* form */}
      <div className="grid grid-cols-2 gap-8">
        <TextField
          type="text"
          id="Conductor's Name"
          label="Conductor's Name"
          variant="outlined"
          value={conName}
          onChange={(e) => setConName(e.target.value)}
        />
        <TextField
          type="tel"
          pattern="[0-9]{10}"
          id="Conductor's Mobile Number"
          label="Conductor's Mobile Number"
          variant="outlined"
          value={conNumber}
          onChange={(e) => setConNumber(e.target.value)}
        />
        <TextField
          id="Conductor's Document"
          label="Conductor's Document"
          variant="outlined"
          value={conDocument}
          onChange={(e) => setConDocument(e.target.value)}
        />
        <TextField
          id="Conductor's Address"
          label="Conductor's Address"
          variant="outlined"
          value={conAddress}
          onChange={(e) => setConAddress(e.target.value)}
        />
      </div>
      {/* button */}
      <div className="flex gap-4 justify-center">
        <Button variant="contained" onClick={handleCondunctor}>
          Add Conductor
        </Button>
        <Button variant="outlined" color="error" onClick={handleClear}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
