import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './HomePage.css';
import largeShelfLogo from '../IconPics/new-shelf.png';
import { NavLink, useHistory } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
// import LoginFormModal from '../LoginFormModal';
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
                    <img className="home-pg-shelf-logo"src={largeShelfLogo} alt="shelf-icon"/>

                    <div className="double-search">
                        <p className="find-near-p">Find</p>
                        <input className="find-name"
                        type="text"
                        placeholder="Family-owned, Health-conscious, Rustic stores..."
                        />

                        <p className="find-near-p">Near</p>
                        <input className="find-location"
                        type="text"
                        placeholder="Bay Area, CA ONLY for now"
                        readOnly = {true}
                        />
                        <button className="magnifying"><img className="mag-glass-icon"src={magnify} alt="mag-glass"/></button>
                    </div>
                </div>
            </div>

            <div className="explore-grocer-cont">
                <h2 className="find-best-grocer-p">Find the best artisanal grocers to restyle your pantry</h2>
                <div className="categories-div">
                    <div className="fam-owned-cont">
                        <img onClick={() => history.push('/search/family-owned')} className="cat-type-img"src='https://github.com/Leahk1m/shelf_app/blob/aws_time/frontend/src/components/IconPics/family.jpg?raw=true' alt="fam-owned"/>
                        <h3 className="categories-title">Family-owned</h3>
                    </div>

                    <div className="modern-cont">
                        <img onClick={() => history.push('/search/modern')} className="cat-type-img" src='https://github.com/Leahk1m/shelf_app/blob/aws_time/frontend/src/components/IconPics/new-modern.jpg?raw=true' alt="modern"/>
                        <h3 className="categories-title">Modern</h3>
                    </div>

                    <div onClick={() => history.push('/search/rustic')} className="rustic-cont">
                        <img className="cat-type-img"src='https://github.com/Leahk1m/shelf_app/blob/aws_time/frontend/src/components/IconPics/rustic.png?raw=true' alt="rustic"/>
                        <h3 className="categories-title">Rustic</h3>
                    </div>
                </div>
            </div>

            <div className="shelf-bay-area">
                <h2 className="shelf-bay-area-p">shelf Bay Area</h2>
                <p className="hot-and-new-businesses">Hot and New Businesses</p>
            </div>
        </div>
    );
}


export default HomePage;
