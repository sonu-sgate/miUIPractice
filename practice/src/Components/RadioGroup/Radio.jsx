import React, { useState } from 'react'
import { FormControl,RadioGroup,FormControlLabel,FormLabel,Radio } from '@mui/material';
export default function RadioComponent() {
    const [radiovalue,setRadiovalue]=useState("")
    const handleradio=(e)=>{
      setRadiovalue(e.target.value)
    }
    console.log(radiovalue,"radiovalue")
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleradio}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
