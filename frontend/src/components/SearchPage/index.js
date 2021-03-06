import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './SearchPage.css';
import ProfileButton from '../Navigation/ProfileButton';
import shelfIcon from '../IconPics/shelf.png';
import GrabRatings from '../GrabRatings';
import { FaRegCommentDots } from 'react-icons/fa';
import magnify from '../IconPics/mag.png';
import noResults from '../IconPics/no-results.gif';

function SearchPage({isLoaded}) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector(state => Object.values(state.business));
    const searchTerm = useParams();
    const reviews = useSelector((state) => Object.values(state.review));
    const [search, setSearch] = useState('');

    let catBusinesses;
    if(searchTerm.searchTerm === 'all') {
        catBusinesses = businesses;
    } else {
        catBusinesses = businesses.filter((business) => business.category.toLowerCase() === searchTerm.searchTerm.toLowerCase() || business.title.toLowerCase().indexOf(searchTerm.searchTerm.toLowerCase()) > -1);

    };

    const searching = (e) => {
        e.preventDefault();
        if(search.length === 0) {
            history.push(`/search/all`)

        } else {
            history.push(`/search/${search}`)
        }
    };

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

    const specificBizReview = (num) => {
        const thisReview = reviews.filter((review) => review.businessId === num);
        return (<p>{thisReview[0]?.post}</p>);

    };

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return(
        <div className="search-pg-container">
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
                    {sessionUser ?
                        <p style={{color: 'grey'}}>{`Hello, ${sessionUser?.firstName}`}!</p>

                    : ''}
                    {/* <NavLink className="navbar-links" to="/businesses">Businesses</NavLink> */}
                    {isLoaded && sessionLinks}

                </div>
            </div>

            <div className="search-pg-contents-div">
                <h3 className="all-results-title">{`Search results for ${searchTerm.searchTerm}`}</h3>
                {catBusinesses.length === 0 ?
                    <div>
                        <div className="no-results-div">
                            <img className="no-results-gif"src={noResults} alt="no-results-gif"/>
                            <p>Sorry, we couldn't find any results for your search :( <br/> Try searching by category name (Modern, Traditional, Family-owned, Rustic, Other...) or by business name for best results</p>
                        </div>
                    </div> : ''}
                {catBusinesses.map((business) => (
                    <div key={business.id} className="search-business-info-cont">
                        <div className="search-biz-info">
                            <img onClick={() => history.push(`/business/${business.id}`)}className="search-business-pic"src={business.imageUrls[0]} alt="search-business"/>
                            <div className="search-biz-title-rating-review">
                                <h2 className="all-these-biz-titles">{business.title}</h2>
                                <div className="star-rating-all-div">
                                    <GrabRatings businessId={business.id}/>

                                </div>
                                <button className="all-biz-cat-btn">{business.category}</button>
                                <div className="search-biz-info-holder">
                                    <p>{business.address}</p>
                                    <p>{business.city} {business.state}</p>
                                    <div className="rev-preview-search-pg">
                                        <FaRegCommentDots style={{fontSize: '30px', width: '5%'}}/><div className="below-svg">{specificBizReview(business.id)}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}



export default SearchPage;
