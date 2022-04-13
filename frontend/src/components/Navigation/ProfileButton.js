import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUsersFirstName = useSelector(state => Object.values(state.session.user.firstName))
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
  };

  return (
    <>
      {currentUsersFirstName ?
        <p>Welcome <button className="welcome-demo-btn"onClick={openMenu}>{currentUsersFirstName}</button></p>
      : ''}
      {showMenu && (
        <div className="profile-dropdown">
          <button onClick={goToProfile}>Profile</button>

          <button onClick={logout}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
