import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [count, setCount] = useState(0)
  const handleIncrement = () => {
    // console.log("v")
    setCount(count+1)
  }
  const handleDecrement = () => {
    // console.log("b")
    setCount(count -1)
  }
  return (
    <div>
      <h1>count { count }</h1>
      <Button variant='contained' color='info' onClick={handleIncrement}> + </Button>  &nbsp;
       <Button variant='contained' color='info' onClick={handleDecrement}> - </Button>
      
    </div>
  )
}

export default Counter