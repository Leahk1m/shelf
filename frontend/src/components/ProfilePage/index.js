import React from "react";
import { useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import './ProfilePage.css';
// import * as sessionActions from '../../store/session';
import shelfIcon from '../IconPics/shelf.png';

function ProfilePage({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const myBusinesses = businesses.filter((business) => business.ownerId === +sessionUser.id);
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
                <h1 className="prof-my-name">{sessionUser.firstName}</h1>
                <p className="user-prof-city-p">From {sessionUser.city}</p>
                <img className="my-prof-photo"src={sessionUser.profilePhoto} alt="prof-to-show"/>
            </div>

            <div className="user-prof-biz-list">
                <h1 className="my-businesses-prof-title">My Businesses</h1>
                    {myBusinesses ?
                        <div>
                            {myBusinesses.map(business => (
                                <div className="my-prof-biz-info" key={business.id}>
                                    <h2>{business.title}</h2>
                                    <p>{business.address}</p>
                                    <img className="prof-business-photo"src={business.imageUrl} alt="prof-biz-to-show"/>
                                </div>
                            ))}
                        </div>
                    : <p>You have no businesses</p>}
            </div>
        </div>
    );

}


export default ProfilePage;
