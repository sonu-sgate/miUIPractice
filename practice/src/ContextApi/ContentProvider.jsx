import React, { createContext, useState } from 'react'

export const Mycontext=createContext()
export default function ContentProvider({children}) {
    const [change,setChange]=useState(false)
      const [count, setCount] = useState(0);
const handlechange=(value)=>{
    setChange(!change)
    setCount((pre)=>pre+value)
}

  return (
    <Mycontext.Provider value={{handlechange,change,count}}>
      {children}
    </Mycontext.Provider>
  )
}
