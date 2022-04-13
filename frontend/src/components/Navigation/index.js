import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import shelfIcon from '../IconPics/shelf.png';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
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
          <NavLink className="navbar-links" exact to="/add-business">Add Business</NavLink>
        : ''}
        <NavLink className="navbar-links" to="/business">Businesses</NavLink>
        {isLoaded && sessionLinks}

      </div>

    </div>


  );
}

export default Navigation;
