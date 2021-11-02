import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import {BsPlus} from "react-icons/bs"
import Graphic from "./Graphic"

import Fab from '@mui/material/Fab';


function App() {

  return (
    <div className="App">
      <h1>Analytics.js</h1>
      <h2>Click the + button to add a new dataset</h2>

      <input id="input" type = "file" onChange = {(e)=>{
        let files = e.target.files;
        files.item(0).text().then((data)=>alert(data))
      }}>

      </input>
      <Fab onClick = {()=>{document.getElementById("input").click()}} color="primary" aria-label="add">
        <BsPlus size="100%"></BsPlus>
      </Fab>

      <Graphic></Graphic>
    </div>
  );
}

export default App;
