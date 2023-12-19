import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mycontext } from './ContextApi/ContentProvider'
import Button from "@mui/material/Button";
import { ButtonGroup, Stack} from '@mui/material';
import Autocomp from './Components/AutoComplete/Autocomplete';
import RadioComponent from './Components/RadioGroup/Radio';
import Buttoncomp from './Components/Buttoncomp/Buttoncomp';
import Checkboxcomp from './Components/Checkbox/Checkbox';

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
        {count < 10
          ? "😊"
          : count >= 10 && count < 20
          ? "😁"
          : count >= 20 && count < 30
          ? "🤨"
          : count >= 300 && count < 40
          ? "😒"
          : "👿"}
        <Button variant="contained" onClick={() => handlechange(-1)}>
          Dec.
        </Button>
      </Stack>
      {/* auto complete */}
      <Autocomp />
      {/* RadioGroup */}
      <RadioComponent />
      {/* testing buttons */}
<Buttoncomp/>
{/* testing Checkbox feature */}
<Checkboxcomp/>
    </>
  );
}

export default App
