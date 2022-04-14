import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, NavLink } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './ProfilePage.css';
import * as sessionActions from '../../store/session';
import shelfIcon from '../IconPics/shelf.png';

function ProfilePage({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

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
    return(
        <div className="user-prof-cont">
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

            <div className="user-profile-info">
                <h1>{sessionUser.firstName}</h1>
                <p>From {sessionUser.city}</p>


            </div>
        </div>
    );

}


export default ProfilePage;
