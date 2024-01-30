import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './Login.css'; // Create a separate CSS file and import it

function LoginForm() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-options">
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="form-options">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </div>
  );
}

export default LoginForm;
