import React,{useState} from 'react';
import './App.css';



function App() {
  const [num , setnum] = useState(0);
  const increase = (d)=>{
    setnum(num+100);
  }
  return (
    <div className="App">
      <h1>This is a dummy application for ci/cd pipeline</h1>
      <button type = "button" className = "btn btn-danger my-5" onClick = {increase}>Click Me</button>
      <h2>{num}</h2>
    </div>
  );
}
//what to do at which step will help us know what to do at what step
export default App;
