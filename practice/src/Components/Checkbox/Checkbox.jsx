import React, { useEffect, useState } from 'react'
import { Checkbox } from '@mui/material'
export default function Checkboxcomp() {
    const [category,setCategory]=useState([])

  const handledata = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
    //   console.log(e.target.value, "hi");
newCategory= newCategory.filter((el, index) =>
       el!=e.target.value
      );
    //   console.log(newdata, "newdata");
    //   setCategory(newdata);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
    // console.log(newCategory,"newcategory")
    useEffect(()=>{
console.log(category,"category")
    },[category])
  return (
    <div>
      <Checkbox name="cat" value="obc" onChange={(e) => handledata(e)} />
      <Checkbox name="cat" value="Bca" onChange={(e) => handledata(e)} />
      <Checkbox name="cat" value="Bcb" onChange={(e) => handledata(e)} />
    </div>
  );
}
