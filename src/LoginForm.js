
import React from 'react';  // here we see our import React from `reac

const LoginForm = () => {   //creating our login form right here 
  return (
    <div className="login-form">
      <h3> Login </h3>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" />
      </div>
    </div>
  );
};

export default LoginForm;
