import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const File = () => {
  var [name, setName] = useState()
  const handleFileChange = () => { 
    
    setName("fasna")
  }
  const handleFileChange1 = () => {
    
    setName("drishya")
  }
  const handleFileChange2 = () => {
    
    setName("manal")
  }
  const handleFileChange3 = () => {
    setName("Yamuna");
  };
  useEffect(() => {
    handleFileChange()
  },[])
  return (
    <div>
      <Typography variant='h4' fontFamily={'fantasy'} color='secondary'>The name is {name}</Typography> <br/>
      <Button variant="outlined" color="secondary" onClick={handleFileChange}>
        Fasna
      </Button>
      &nbsp;
      <Button variant="outlined" color="secondary" onClick={handleFileChange1}>
        drishya
      </Button>
      &nbsp;
      <Button variant="outlined" color="secondary" onClick={handleFileChange2}>
        manal
      </Button>
      &nbsp;
      <Button variant="outlined" color="secondary" onClick={handleFileChange3}>
        yamuna
      </Button>
      &nbsp;
    </div>
  );
}

export default File