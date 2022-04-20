import React from "react";
import { useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import './ProfilePage.css';
// import * as sessionActions from '../../store/session';
import shelfIcon from '../IconPics/shelf.png';
import GrabRatings from '../GrabRatings';
import { IoMdBusiness } from 'react-icons/io';
import { MdOutlineRateReview } from 'react-icons/md';

function ProfilePage({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const myBusinesses = businesses.filter((business) => business.ownerId === +sessionUser.id);
    const reviews = useSelector(state => Object.values(state.review));
    const history = useHistory();

    const myReviews = reviews.filter((review) => review.id === +sessionUser.id);

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
                <div className="prof-num-of-biz-and-revs">
                    <p><IoMdBusiness/> {`${myBusinesses.length} businesses`}</p>
                    <p><MdOutlineRateReview/> {`${myReviews.length} reviews`}</p>

                </div>
                <img className="my-prof-photo"src={sessionUser.profilePhoto} alt="prof-to-show"/>
            </div>

            <h1 className="my-businesses-prof-title">My Businesses</h1>
            <div className="user-prof-biz-list">
                    {myBusinesses ?
                        <div className="fat-prof-div">
                            {myBusinesses.reverse().map(business => (
                                <div className="my-prof-biz-info" key={business.id}>
                                    <div>
                                        <h2>{business.title}</h2>
                                        <div className="for-prof">
                                            <GrabRatings businessId={business.id}/>
                                        </div>
                                    </div>
                                    <img onClick={() => history.push(`/business/${business.id}`)}className="prof-business-photo"src={business.imageUrls[0]} alt="prof-biz-to-show"/>
                                </div>
                            ))}
                        </div>
                    : <p>You have no businesses</p>}


                    {myReviews ?
                        <div>
                            {myReviews.map(review => (
                                <div>
                                    <p>{review.rating}</p>
                                    <p>{review.post}</p>
                                </div>
                            ))}
                        </div>
                    : <p>You have no reviews</p>}
            </div>
        </div>
    );

}


export default ProfilePage;
