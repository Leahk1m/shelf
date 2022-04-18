import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './SearchPage.css';
import ProfileButton from '../Navigation/ProfileButton';
import shelfIcon from '../IconPics/shelf.png';

function SearchPage({isLoaded}) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const searchTerm = useParams();
    const catBusinesses = businesses.filter((business) => business.category.toLowerCase() == searchTerm.searchTerm);

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


    return(
        <div>
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

            {catBusinesses.map((business) => (
                <div className="search-business-info-cont">
                    <div className="search-biz-info">
                        <img  onClick={() => history.push(`/business/${business.id}`)}className="search-business-pic"src={business.imageUrls[0]} alt="search-business"/>
                        <p>{business.title}</p>

                    </div>

                </div>
            ))}

        </div>
    );
}



export default SearchPage;
