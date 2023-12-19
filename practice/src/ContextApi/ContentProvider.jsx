import React, { createContext, useState } from 'react'

let Mycontext=createContext()
export default function ContentProvider({children}) {
    const [change,setChange]=useState(false)
const handlechange=()=>{
    setChange(!change)
}

  return (
    <Mycontext.Provider value={{handlechange,change}}>
      {children}
    </Mycontext.Provider>
  )
}
