import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Create a separate CSS file and import it

function LoginForm() {
  return (
    <div className="login-container">
      <h2>LOGIN</h2>

      <form className="login-form">
        
        <div className="mb-3">
          <input type="text" id="username" name="username" placeholder='Username...' required />
        </div>
        <div className="mb-3">
          <input type="password" id="password" name="password" placeholder='Password...'  required />
        </div>
        <div>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label id="rememberMe">Remember me</label>
        </div>
        <div className="mb-3">
          <button type="submit" id="submitbtn">LOGIN</button>
        </div>
        <div className="form-options">
          <div id="forgot" >
            <a href="#">Forgot password?</a>
          </div>
          <div id="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </div>
        
      </form>

      
    </div>
  );
}

export default LoginForm;
