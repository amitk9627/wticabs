import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

export const AddBus = () => {
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleBus = () => {};
  const handleClear = () => {};
  return (
    <div className="p-4 flex flex-col gap-10  justify-center">
      {/* title */}
      <div>
        <p className="text-center font-bold text-4xl">Bus Details</p>
      </div>
      {/* form */}
      <div className="grid grid-cols-3 gap-8">
        <TextField
          id="Bus No."
          label="Bus No."
          variant="outlined"
        />
         <TextField
          id="Bus Capacity"
          label="Bus Capacity"
          variant="outlined"
        />
         

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Driver Id</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="Driver Id"
            
          >
            <MenuItem >Mini</MenuItem>
            <MenuItem >Medium</MenuItem>
            <MenuItem >Large</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="Category"
            
          >
            <MenuItem >Small</MenuItem>
            <MenuItem >Medium</MenuItem>
            <MenuItem >Large</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Vendor Id</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="Vendor Id"
            
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Conductor Id</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="Conductor Id"
            
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="Fuel Type"
            
          >
            <MenuItem >Petrol</MenuItem>
            <MenuItem >Deseil</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">TabletIMEI</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="TabletIMEI"
            
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Passenger Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            label="Passenger Type"
            
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
        </FormControl>

       
        
      </div>
      {/* button */}
      <div className="flex gap-4 justify-center">
        <Button variant="contained">Add Bus</Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </div>
    </div>
  );
};
