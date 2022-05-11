import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import './LoginForm.css';
// import Typewriter from 'typewriter-effect';
import shelfIcon from '../IconPics/new-shelf.png';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const demoLogin = async(e) => {
    e.preventDefault();
    dispatch(sessionActions.login({
      credential: 'demo@aa.io',
      password: 'password'
    }));
  }

  return (
    <div className="login-form-container">
      <div className="signup-red-nav">
        <NavLink className="shelf-signup-navlink" to="/"> <img className="signup-nav-shelf-icon"src={shelfIcon} alt="shelf-icon"/></NavLink>
      </div>

      <div className="log-in-container-form">
        <h1 className="login-to-shelf-title">Log in to shelf</h1>
        <h3 className="new-to-shelf">New to shelf? <NavLink className="login-pg-signup-nav-link" to="/signup">Sign up</NavLink></h3>
        <p className="by-logging-in-p">By logging in, you agree to shelf's Terms of Service and Privacy Policy</p>

        <form className="login-form"onSubmit={handleSubmit}>
          <ul style={{listStyle: "none"}}>
            {errors.map((error, idx) => (
              <li className="error-msg" key={idx}>{error}</li>
            ))}
          </ul>

          <div className="login-form-input-cont">
            <input className="login-form-input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              placeholder="E-mail"
            />

            <input className="login-form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button className="login-form-login-btn"type="submit">Log In</button>
        </form>

        <div className="or-divider-container">
          <p className="or-p">OR</p>
          <div className="line-divider-div"/>
        </div>
        <button className="demo-login-btn"onClick={demoLogin}>Continue as Demo User</button>
        {/* <button className="demo-login-btn" onClick={ <Typewriter onInit={(typewriter) => typewriter.typeString('hello').start()}/>}>Demo User</button> */}

      </div>

    </div>
  );
}

export default LoginFormPage;
