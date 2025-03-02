import './App.css';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';

function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [msg,setMsg]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault(); // <!--Stop form from being submitted.-->
    if(email==="admin" && password==="admin"){
      setMsg("You are admin.");
    }
    else{
      setMsg("Sorry, Invalid Credentials!");
    }

  }
  return (
    <div style={{width:"300px",margin:'50px',textAlign:'center'}}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{position:'relative',marginBottom:'10px'}}>
        <FontAwesomeIcon icon={faUser} style={{position:'absolute',top:'50%',left:'10px', transform:'translateY(-50%)'}}/>
        <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} style={{paddingLeft:'30px',width:'100%',height:'30px'}}></input>
        </div>





        <div style={{position:'relative',marginBottom:'10px'}}>
        <FontAwesomeIcon icon={faLock} style={{position:'absolute',top:'50%',left:'10px', transform:'translateY(-50%)'}}/>
        <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} style={{paddingLeft:'30px',width:'100%',height:'30px'}}></input>
        </div>


        <button type="submit" style={{cursor:'pointer',width:'110%', height:'35px'}}>Submit</button>
      </form>




      {msg && <p style={{color: msg==='You are admin.' ? 'green' : 'red'}}>{msg}</p>}
    </div>
  );
}

export default App;
