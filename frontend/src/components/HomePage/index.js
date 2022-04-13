import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';
import pantry from '../IconPics/pantry.jpeg';
import shelfLogo from '../IconPics/shelf.png';

function HomePage() {
    const [search, setSearch] = useState('');
    return(
        <div>
            <div>
                <img className="pantry-img" src={pantry} alt="home-pg-pantry"/>

                <img className="home-pg-shelf-logo"src={shelfLogo}/>

            </div>
        </div>

    );
}


export default HomePage;
