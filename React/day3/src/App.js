import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [phy,setPhy]=useState(0);
  const [chem,setChem]=useState(0);
  const [maths,setMaths]=useState(0);
  const [total,setTotal]=useState(0);
  const [per,setPer]=useState(0);
  const show=()=>{
    const t=Number(phy)+Number(chem)+Number(maths)
    setTotal(t);
    setPer(t/3);
    
  }
  return (
    <div className="App">
      <h1>
        <center>Scorecard</center>
      </h1>
      <br/>
      <br/>
      <input type="text" placeholder="Phy" style={{marginLeft:'20px'}} onChange={(e) => setPhy(e.target.value)} size={4}/>
      <br/>
      <br/>
      <input type="text" placeholder="Chem" style={{marginLeft:'20px'}} onChange={(e) => setChem(e.target.value)} size={4}/>
      <br/>
      <br/>
      <input type="text" placeholder="Maths" style={{marginLeft:'20px'}} onChange={(e) => setMaths(e.target.value)} size={4}/>
      <br/>
      <br/>
      <button onClick={show}>Check Now</button>
      {total!==0 && <p>Your Score:{total}</p>}     
      {/* //Conditional rendering */}
      {per!==0 && <p>Your Percentage:{per.toFixed(2)}%</p>}
      {per!==0 && (per>=60 ? <p>Pass</p> : <p>Fail</p>)}
    </div>
  );
}

export default App;
