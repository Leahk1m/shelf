import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import * as businessActions from '../../store/business';
import './ShowBusinesses.css';
import ProfileButton from '../Navigation/ProfileButton';
import shelfIcon from '../IconPics/shelf.png';
import GrabRatings from '../GrabRatings';

function ShowBusinesses({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const reviews = useSelector((state) => Object.values(state.review));
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

            <div className="search-pg-contents-div">
                {/* {console.log(thisBizRatings)}
                {console.log(thisBusinessId)} */}
                <h3 className="all-results-title">All Businesses on shelf</h3>
                {businesses.map((business) => (
                    <div className="search-business-info-cont">
                        <div className="search-biz-info">
                            <img onClick={() => history.push(`/business/${business.id}`)}className="search-business-pic"src={business.imageUrls[0]} alt="search-business"/>
                            <div className="search-biz-title-rating-review">
                                <p>{business.title}</p>
                                <GrabRatings businessId={business.id}/>
                                <p>{business.address}</p>
                                <p>{business.city} {business.state}</p>
                                <p>{business.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}


export default ShowBusinesses;
