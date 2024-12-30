import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';



import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Link to="/log">
              <Button variant="contained" color="info">
                Login
              </Button>
            </Link>{" "}
            <Link to="/signup">
              <Button variant="contained" color="info">
                SignUp
              </Button>
            </Link>
            <Link to="/signup1">
              <Button variant="contained" color="info">
                Admin
              </Button>
            </Link>{" "}
            <Link to="/s">
              <Button variant="contained" color="info">
                State
              </Button>
            </Link>
            <Link to="/count">
              <Button variant="contained" color="info">
                Counter
              </Button>
            </Link>
            <Link to="/file">
              <Button variant="contained" color="info">
                name
              </Button>
            </Link>
            <Link to="/api">
              <Button variant="contained" color="info">
                Api
              </Button>
            </Link>
            <Link to="/poke">
              <Button variant="contained" color="info">
                pokemon
              </Button>
            </Link>
            <Link to="/grid">
              <Button variant="contained" color="info">
                grid
              </Button>
            </Link>
            <Link to="/poke2">
              <Button variant="contained" color="info">
                poke2
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar