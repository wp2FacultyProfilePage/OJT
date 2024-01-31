import React, { useState } from 'react';
import './Signin.css'; // Create a separate CSS file and import it

const SignIn = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Form submitted:', formData);
    };
return (
    <div className="signin-container">
      <h2>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" id="username" name="username" value={formData.username}
            onChange={handleChange} placeholder='Username...' required/>
        </div>
        <div className="mb-3">
          <input type="password" id="password" name="password" value={formData.password}
            onChange={handleChange} placeholder='Password...' required/>
        </div>
        <div className="mb-3">
          <button type="submit" id="signinbtn">SIGN IN</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
