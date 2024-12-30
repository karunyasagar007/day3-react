import React, { useState } from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from 'axios';

const Poke2 = () => {
    var [poke, setpoke] = useState([])
    axios.get("// https://dummyapi.online/api/pokemon")
        .then((response) =>{
            console.log(response.data)
            setpoke(response.data)
    })

  return (
    <div>
          <Grid container spacing={2}>
              {poke.map((val) => {
                      return (
              <Grid item xs={8} >
                  
                           <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                  sx={{ height: 140 }}
                                  image= {val.image_url}
                                  title="green iguana"
                              />
                              <CardContent></CardContent>
                               <CardActions>
                                  <Button size="small">Share</Button>
                                  <Button size="small">Learn More</Button>
                              </CardActions>
                            <Card/>
                                  <Grid />
                                  )
              })}
        <Grid/>
    
    </div>
  );
}

export default Poke2
