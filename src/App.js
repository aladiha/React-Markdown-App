import './App.css';
import React, {useState} from 'react';
import Editor from './Components/Editor/editor'
import Previewer from './Components/Previewer/previewer'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  
  const [value, setValue] = useState("");

  const onIdit = (val) => {
    setValue(val);
    console.log(value)
  }
  
  return (
    <div className="container">
      <h1 id="header">React <span className="mark">Markdown</span> Previewr</h1>
      <div className="App">
        <Editor onIdit={onIdit}/>
        <Previewer markdown={value}/>
      </div>
      <p className="aladin"><FontAwesomeIcon icon={faFire}/> By Aladin</p>
    </div>
  );
}

export default App;
