import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Signup1 from './components/Signup1'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import File from "./components/File";
import Api from './components/Api'
import Pokemon from './components/Pokemon'
import Grid from './components/Grid'
import Poke2 from './components/Poke2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar />
      <h1>Welcome React</h1>
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/s" element={<StateBasics />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/file' element={<File />} />
        <Route path='/api' element={<Api />} />
        <Route path='/poke' element={<Pokemon />} />
        <Route path='/grid' element={<Grid />} />
        <Route path='/poke2' element={<Poke2/>} />
      </Routes>
    </>
   
  );
}

export default App
