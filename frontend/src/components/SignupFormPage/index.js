import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import shelfIcon from '../IconPics/new-shelf.png';
import { FcCheckmark } from 'react-icons/fc';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState("");

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, profilePhoto, city, email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if(file) {
        setProfilePhoto(file);
    }
};

  return (
    <div className="signup-pg-container">
      <div className="signup-red-nav">
        <NavLink className="shelf-signup-navlink" to="/"> <img className="signup-nav-shelf-icon"src={shelfIcon} alt="shelf-icon"/></NavLink>
      </div>
      <h1 className="signup-for-shelf">Sign up for shelf</h1>
      <h3>Connect with great local businesses </h3>
      <div className="signup-msg">
        <p className="signup-msg-p">By continuing, you agree to shelf's Terms of Service and Privacy Policy</p>
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <div className="signup-input-container">
            <div className="signup-names-container">
              <input className="signup-name-input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />

              <input className="signup-name-input"
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Last name"
              />
            </div>

            <div className="signup-other-info-cont">
              <input className="signup-input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              />

              <input className="signup-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />

              <input className="signup-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />

              <input className="signup-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm password"
              />
            </div>
          </div>
          <label className="add-photo-new-user-btn">
            Image Upload
            <input
            type="file"
            onChange={updateFile} />
          </label>
          <button className="signup-btn"type="submit">Sign Up</button>
          <div className="back-to-login">
            <p className="already-on-shelf-p">Already on shelf? <NavLink className="changed-mind" to="/login">Log in</NavLink></p>
          </div>
        </form>
      </div>
      <ul style={{listStyle: "none"}}>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    </div>
  );
}

export default SignupFormPage;
