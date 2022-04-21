import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import * as businessActions from '../../store/business';
import './ShowBusinesses.css';
import ProfileButton from '../Navigation/ProfileButton';
import shelfIcon from '../IconPics/shelf.png';
import GrabRatings from '../GrabRatings';
import magnify from '../IconPics/mag.png';

function ShowBusinesses({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const reviews = useSelector((state) => Object.values(state.review));
    const history = useHistory();
    const [search, setSearch] = useState('');


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
        <div className="all-biz-cont">
            <div className="navbar-container">
                <NavLink className="navbar-links" exact to="/"> <img src={shelfIcon} alt="shelf-icon"/></NavLink>

                <div className="double-search-not-home">
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

                </div>

                    <div className="main-nav-links">
                        {/* {sessionUser ?
                        <NavLink className="navbar-links" exact to="/host">Add Business</NavLink>
                        // : ''} */}
                        <NavLink className="navbar-links" to="/businesses">Explore all</NavLink>
                        {isLoaded && sessionLinks}
                </div>
            </div>

            <div className="search-pg-contents-div">
                <h3 className="all-results-title">All Businesses on shelf</h3>
                {businesses.map((business) => (
                    <div key={business.id} className="search-business-info-cont">
                        <div className="search-biz-info">
                            <img onClick={() => history.push(`/business/${business.id}`)}className="search-business-pic"src={business.imageUrls[0]} alt="search-business"/>
                            <div className="search-biz-title-rating-review">
                                <h2 className="all-these-biz-titles">{business.title}</h2>
                                <div className="star-rating-all-div">
                                    <GrabRatings businessId={business.id}/>

                                </div>
                                <button className="all-biz-cat-btn">{business.category}</button>
                                <div>
                                    <p>{business.address}</p>
                                    <p>{business.city} {business.state}</p>
                                    <p className="all-biz-desc-search">{business.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}


export default ShowBusinesses;
