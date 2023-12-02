import React, { Component } from 'react';
import './App.css';

const loginFormStyle = {
 display: 'flex',
 flexDirection: 'column',
 width: '300px',
 margin: '0 auto',
};

const inputStyle = {
 marginBottom: '10px',
 padding: '5px',
};

const buttonStyle = {
 marginTop: '20px',
 padding: '5px',
 cursor: 'pointer',
};

class App extends Component {
 render() {
    return (
      <div className="App">
       
          <h1>Login</h1>
        <main>
          <form style={loginFormStyle}>
            <input type="email" placeholder="Email" required style={inputStyle} />
            <input type="password" placeholder="Password" required style={inputStyle} />
            <p style={{margin: '10px 0', color: 'blue'}}>Forgot password?</p>
          </form>
          <button type="submit" className="button" style={{width: '20%', backgroundColor: 'blue', color: 'white', padding: '10px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', textAlign: 'center'}}>Login</button>
          <p style={{margin: '10px 0', color: 'black'}}>Don't have an account? <a href="#" style={{color: 'blue'}}>Signup</a></p> 
          <p>Or</p>
         <button type="button" className="button fb" style={{width: '20%', margin: '5px 0',padding: '9px 20px'}}>Login with Facebook</button><br></br>
         <button type="button" className="button google" style={{width: '20%', margin: '5px 0',padding: '9px 20px'}}>Login with Google</button>
        </main>
      </div>
    );
 }
}

export default App;