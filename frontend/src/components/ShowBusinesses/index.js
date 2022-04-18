import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import * as businessActions from '../../store/business';
import './ShowBusinesses.css';
import ProfileButton from '../Navigation/ProfileButton';
import shelfIcon from '../IconPics/shelf.png';

function ShowBusinesses({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    // const userProfilePhoto = sessionUser.profilePhoto;
    const businesses = useSelector(state => Object.values(state.business));
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
                   <NavLink to={`/business/${business.id}`}><img className="explore-biz-pic" src={business.imageUrls[0]} alt="explore-pics"/></NavLink>
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
