import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';
import largeShelfLogo from '../IconPics/large-shelf.png';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import LoginFormModal from '../LoginFormModal';

function HomePage({isLoaded}) {
    const sessionUser = useSelector(state => state.session.user);
    const [search, setSearch] = useState('');

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <LoginFormModal />
            <NavLink className="splash-navbar-links" to="/signup">Sign Up</NavLink>
        </>
        );
    }

    return(
        <div>
            <div className="splash-search-container">
                <div className="splash-navbar-container">
                    {/* <NavLink className="navbar-links" exact to="/"> <img src={shelfIcon} alt="shelf-icon"/></NavLink> */}

                    <NavLink className="splash-navbar-links" to="/businesses">Businesses</NavLink>
                    <div className="splash-main-nav-links">
                        {sessionUser ?
                        <NavLink className="splash-navbar-links" exact to="/host">Add Business</NavLink>
                        : ''}
                        {isLoaded && sessionLinks}

                    </div>
                </div>
                <div className="splash-nav-logo-container">
                    <img className="home-pg-shelf-logo"src={largeShelfLogo}/>

                    <div className="double-search">
                        <p className="find-near-p">Find</p>
                        <input className="find-name"
                        type="text"
                        placeholder="Rustic, traditional, modern stores..."
                        />

                        <p className="find-near-p">Near</p>
                        <input className="find-location"
                        type="text"
                        placeholder="Bay Area, CA ONLY for now"
                        />
                        <button className="magnifying">🔍</button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default HomePage;
