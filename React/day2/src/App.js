//Input N number and print square of it.
import './App.css';
import { useState } from 'react';

function App() {


  const [number,setNum]=useState(0);

  return (
    <div className="App">
      <h1><center>Square of a number</center></h1>
      <input type="text" placeholder='Enter the number' onChange={(e)=>setNum(e.target.value*e.target.value)}/>
      <br/>
      <br/>
      <button>Submit</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
