import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import shelfIcon from '../IconPics/shelf.png';
import magnify from '../IconPics/mag.png';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button onClick={() => history.push('/login')}>Log in</button>
        <button className="signup-home-btn" onClick={() => history.push('/signup')}>Sign up</button>
      </>
    );
  }

  return (
    <div className="navbar-container">
      <NavLink className="navbar-links" exact to="/"> <img src={shelfIcon} alt="shelf-icon"/></NavLink>

    <div className="search-container">
      <input className="search-input"
      type="text"
      />
    </div>

      <div className="main-nav-links">
        {sessionUser ?
          <NavLink className="navbar-links" exact to="/host">Add Business</NavLink>
        : ''}
        <NavLink className="navbar-links" to="/businesses">Businesses</NavLink>
        {isLoaded && sessionLinks}

      </div>

    </div>


  );
}

export default Navigation;
