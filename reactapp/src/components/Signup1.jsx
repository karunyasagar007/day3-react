import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup1 = () => {
  return (
      <div>
          <h1>Sign Up</h1>
          <TextField label='Username' variant='outlined' /> <br /><br/>
          <TextField label='Password' variant='outlined' /> <br /> <br/>
          <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup1