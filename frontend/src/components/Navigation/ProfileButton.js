import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";
import './Navigation.css';

function ProfileButton({ user }) {
  const pathName = window.location.pathname;
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUsersFirstName = useSelector(state => state.session.user?.firstName);
  const currentUsersProfilePhoto = useSelector(state => state.session.user?.profilePhoto);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const goToProfile = () => {
    history.push('/profile')
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      {currentUsersFirstName ?
        <div>
          {pathName == '/' ?
            <div>
              <button className="home-nav-all-biz-btn"onClick={goToProfile}>Profile</button>

              <button className="home-nav-all-biz-btn"onClick={logout}>Log Out</button>
            </div>
            // <p onClick={openMenu}className="welcome-user-nav-title">{`Welcome, ${currentUsersFirstName}`}</p>
        :   <img className="nav-prof-icon"onClick={openMenu} src={currentUsersProfilePhoto} alt="user-prof-icon-nav"/>}

        </div>

      : ''}
      {showMenu && (
        <div className="profile-dropdown">
          <button className="prof-btn-nav"onClick={goToProfile}>Profile</button>
          <button className="prof-btn-nav" onClick={() => history.push('/host')}>Add Business</button>
          <button className="logout-btn-nav"onClick={logout}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
