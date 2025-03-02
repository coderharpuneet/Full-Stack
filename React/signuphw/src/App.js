import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <h2 className='heading'>Sign In</h2>
        <p className='desc'>Sign in to your account to continue</p>
        <form>
          <label>Email</label>
          <input type="text" placeholder='Email' />
          <label>Password</label>
          <input type="text" placeholder='Password' />
          <p>Forgot Password?</p>
          <input type='checkbox' /> I'm not a robot
          {/* <img src={captcha} alt='captcha' className='captcha'/> */}
          <button className='signin'>Sign In</button>
          <button className='createAccount'>Create an Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
