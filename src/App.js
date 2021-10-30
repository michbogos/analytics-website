import logo from './logo.svg';
import './App.css';
import {BsPlusCircle} from "react-icons/bs"

function App() {
  return (
    <div className="App">
      <h1>Analytics.js</h1>
      <h2>Click the + button to add a new dataset</h2>

      <input id="input" type = "file"></input>
      <BsPlusCircle onClick = {() => {document.getElementsByTagName("input")[0].click()}} className = "AddButton" size = "3rem"></BsPlusCircle>
    </div>
  );
}

export default App;
