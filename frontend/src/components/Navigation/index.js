import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

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
    <div>
      <div>
        {sessionUser ?
          <NavLink className="navbar-links" exact to="/add-business">Add Business</NavLink>
        : ''}

      </div>

      <div>
        <NavLink className="navbar-links" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>


  );
}

export default Navigation;
