import './App.css';
import React, {useState} from 'react';
import Editor from './Components/Editor/editor'
import Previewer from './Components/Previewer/previewer'



function App() {
  const [value, setValue] = useState("");

  const onIdit = (val) => {
    setValue(val);
  }
  
  return (
    <div className="App">
      <Editor onIdit={onIdit}/>
      <Previewer/>
    </div>
  );
}

export default App;
