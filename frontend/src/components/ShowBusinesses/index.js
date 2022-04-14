import React, { useEffect, useState } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import './ShowBusinesses.css';
import ProfileButton from '../Navigation/ProfileButton';
import LoginFormModal from '../LoginFormModal';
import shelfIcon from '../IconPics/shelf.png';

function ShowBusinesses({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));

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
        <div className="all-biz-cont">
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

           {businesses.map(business => (
               <div className="indiv-biz-container"key={business.id}>
                   <NavLink to={`/business/${business.id}`}><img className="explore-biz-pic" src={business.imageUrl} alt="explore-pics"/></NavLink>
                   <div className="indiv-biz-description">
                       <h1>{business.title}</h1>
                        <p>
                            {business.address}
                        </p>
                   </div>
               </div>
           ))}
        </div>
    );
}


export default ShowBusinesses;
