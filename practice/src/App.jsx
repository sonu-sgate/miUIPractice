import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mycontext } from './ContextApi/ContentProvider'
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';

function App() {

const {handlechange,change,count}=useContext(Mycontext)
// console.log(change,"change")
  return (
    <>
      <h1>Count App </h1>
      <Stack space={3}>
        <Button variant={"outlined"} onClick={() => handlechange(1)}>
          Inc.
        </Button>
        {count}
        <Button variant="contained" onClick={() => handlechange(-1)}>
          Dec.
        </Button>
      </Stack>
    </>
  );
}

export default App
