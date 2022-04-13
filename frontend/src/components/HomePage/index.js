import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';
import pantry from '../IconPics/pantry.jpeg';
import largeShelfLogo from '../IconPics/large-shelf.png';

function HomePage() {
    const [search, setSearch] = useState('');
    return(
        <div>
            <div className="splash-search-container">
                {/* <img className="pantry-img" src={pantry} alt="home-pg-pantry"/> */}
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

    );
}


export default HomePage;
