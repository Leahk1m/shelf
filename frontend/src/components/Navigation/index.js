import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import shelfIcon from '../IconPics/shelf.png';
// import magnify from '../IconPics/mag.png';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }){
  const pathName = window.location.pathname;
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
      <div>
        <button className="home-nav-all-biz-btn"onClick={() => history.push('/login')}>Log in</button>
      </div>
        <button className="signup-home-btn" onClick={() => history.push('/signup')}>Sign up</button>
      </>
    );
  }

   const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <div className="navbar-container">
      <NavLink className="navbar-links" exact to="/"> <img src={shelfIcon} alt="shelf-icon"/></NavLink>

    {pathName !== '/' ?
      <div className="search-container">
        <input className="search-input"
        type="text"
        />
      </div>
    : ''}

    {pathName == '/' && sessionUser?
      <div>
        {/* <NavLink className="home-nav-all-biz-btn" exact to="/host">Add Business</NavLink> */}
        <NavLink className="home-nav-all-biz-btn" exact to="/profile">Profile</NavLink>
        <button className="home-nav-all-biz-btn"onClick={logout}>Log Out</button>

      </div>

    : ''}



      <div className="main-nav-links">
        {/* <NavLink className="navbar-links" to="/businesses">Businesses</NavLink> */}
        {isLoaded && sessionLinks}

      </div>
    </div>


  );
}

export default Navigation;
