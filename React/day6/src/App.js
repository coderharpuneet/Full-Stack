import './App.css';
import {useRef} from 'react';
function App() {
  const input1=useRef(); //useRef is same as document.getElementById in JS.
  const input2=useRef();
  const input3=useRef();
  const input4=useRef();
  const sub=useRef();
  const handleChange=(e,nextInput)=>{
     if(e.target.value.length===1){
      nextInput.current.focus();
     }
     
  }
  
  const handleBackspace = (e, prevRef) => {
    if (e.key === "Backspace" && !e.target.value && prevRef) {
      prevRef.current.focus();
    }
  };
    
 
  return (
    <div className="App">
      <h1 className="heading"><center>OTP Screen</center></h1>
      <hr style={{width:'50%'}}/>
      <div className='otp'>

      <input type="text" maxLength='1'  placeholder='Code' style={inputStyle} onChange={(e)=>handleChange(e,input2,)} onKeyDown={(e)=>handleBack(e,null)} ref={input1}/>
      <input type="text" maxLength='1' placeholder='Code' style={inputStyle} onChange={(e)=>handleChange(e,input3)} onKeyDown={(e)=>handleBack(e,input1)} ref={input2}/>
      <input type="text" maxLength='1' placeholder='Code' style={inputStyle} onChange={(e)=>handleChange(e,input4)} onKeyDown={(e)=>handleBack(e,input2)} ref={input3}/>
      <input type="text" maxLength='1' placeholder='Code' style={inputStyle} onChange={(e)=>handleChange(e,sub)} onKeyDown={(e)=>handleBack(e,input3)} ref={input4}/>
      </div>
      <input type='submit' value={'Submit'} ref={sub}></input>
      {/* {<p className='one'>OTP Matched</p>} */}
    </div>

  );
}




const inputStyle={
  height:'100px',
  width:'150px',
  fontSize:'20px',
  textAlign:'center',
  margin:'5px',

}
export default App;
