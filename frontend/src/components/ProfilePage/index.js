import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, NavLink, Link } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
import './ProfilePage.css';
import shelfIcon from '../IconPics/shelf.png';
import GrabRatings from '../GrabRatings';
import { IoMdBusiness } from 'react-icons/io';
import { MdOutlineRateReview } from 'react-icons/md';
import magnify from '../IconPics/mag.png';

function ProfilePage({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const myBusinesses = businesses.filter((business) => business.ownerId === +sessionUser.id);
    const reviews = useSelector(state => Object.values(state.review));
    const history = useHistory();
    const [search, setSearch] = useState('');

    const myReviews = reviews.filter((review) => review.id === +sessionUser.id);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <button className="home-nav-all-biz-btn"onClick={() => history.push('/login')}>Log in</button>
            <button className="signup-home-btn" onClick={() => history.push('/signup')}>Sign up</button>
        </>
        );
    }

     const searching = (e) => {
        if(search.length === 0) {
            history.push(`/search/all`)

        } else {
            history.push(`/search/${search}`)
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="user-prof-cont">
            <div className="navbar-container">
            <NavLink className="navbar-links" exact to="/"> <img src={shelfIcon} alt="shelf-icon"/></NavLink>

            <form className="double-search-not-home">
                <p className="find-near-p-nh">Find</p>
                <input className="find-name-nh"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Family-owned, Traditional, Rustic stores..."
                />

                <p className="find-near-p-nh">Near</p>
                <input className="find-location-nh"
                type="text"
                placeholder="Bay Area, CA ONLY for now"
                readOnly = {true}
                />
                <button onClick={searching}className="magnifying-nh"><img className="mag-glass-icon-nh"src={magnify} alt="mag-glass"/></button>

            </form>

            <div className="main-nav-links">
                {/* {sessionUser ?
                <NavLink className="navbar-links" exact to="/host">Add Business</NavLink>
                : ''} */}
                <p style={{color: 'grey'}}>{`Hello, ${sessionUser.firstName}`}!</p>
                {/* <NavLink className="navbar-links" to="/businesses">Businesses</NavLink> */}
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
                    {myBusinesses.length > 0 ?
                        <div className="fat-prof-div">
                            {myBusinesses.reverse().map(business => (
                                <div className="my-prof-biz-info" key={business.id}>
                                    <img onClick={() => history.push(`/business/${business.id}`)}className="prof-business-photo"src={business.imageUrls[0]} alt="prof-biz-to-show"/>
                                    <div className="prof-biz-info-div">
                                        <h2 className="prof-biz-title"onClick={() => history.push(`/business/${business.id}`)}>{business.title}</h2>
                                        <div className="for-prof">
                                            <GrabRatings businessId={business.id}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                    <div className="you-have-no-biz-div">
                        <p>You have no businesses listed yet <br/> If you would like to share your business on shelf click <Link className="link-to-host"to="/host">here</Link> to get started</p>

                    </div>
                    }


                    {/* {myReviews ?
                        <div>
                            {myReviews.map(review => (
                                <div>
                                    <p>{review.rating}</p>
                                    <p>{review.post}</p>
                                </div>
                            ))}
                        </div>
                    : <p>You have no reviews</p>} */}
            </div>
        </div>
    );

}


export default ProfilePage;
