import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = async(e) => {
    e.preventDefault();
    dispatch(sessionActions.login({
      credential: 'demo@aa.io',
      password: 'password'
    }))
  }

  return (
    <div className="login-modal-container">
      <h1>Log in to shelf</h1>
      <h3>New to shelf?</h3> <NavLink to="/signup">Sign up</NavLink>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="login-modal-input-container">
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            placeholder="Email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

      </form>
        <div className="login-btns">
          <button type="submit">Log In</button>
          <div className="login-modal-demo-container">
            <button className="demo-login-btn" onClick={demoLogin}>Demo User</button>

          </div>
      </div>
    </div>
  );
}

export default LoginForm;
