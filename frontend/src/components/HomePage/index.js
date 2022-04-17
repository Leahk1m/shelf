import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';
import largeShelfLogo from '../IconPics/new-shelf.png';
import { NavLink, useHistory } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import LoginFormModal from '../LoginFormModal';
import magnify from '../IconPics/mag.png';

function HomePage({isLoaded}) {
    const sessionUser = useSelector(state => state.session.user);
    const [search, setSearch] = useState('');
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
            {/* <NavLink className="splash-navbar-links" to="/signup">Sign Up</NavLink> */}
        </>
        );
    }

    return(
        <div>
            <div className="splash-search-container">
                <div className="splash-navbar-container">
                   <button className="home-nav-all-biz-btn"onClick={() => history.push('/businesses')}>Businesses</button>

                    {/* <NavLink className="splash-navbar-links" to="/businesses">Businesses</NavLink> */}
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
                        readOnly = {true}
                        />
                        <button className="magnifying"><img className="mag-glass-icon"src={magnify}/></button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default HomePage;
