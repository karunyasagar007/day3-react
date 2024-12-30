import { TextField } from '@mui/material'
import React, { useState } from 'react'


const StateBasics = () => {
    var [name, Setname] = useState("Ayisha Fasna")
  const HandleInput = (e) => {
    console.log(e.target.value)
    Setname(e.target.value)
    
  }
      var [val, setval] = useState()
  const HandleButton = () => {
    console.log("c")
        setval(name)
    }
  return (
      <div>
          <h1>My name is {val}</h1>
      <TextField label="Enter your name" onChange={HandleInput} />
      <button onClick={HandleButton}>click</button>
      
    </div>
  )
}

export default StateBasics 