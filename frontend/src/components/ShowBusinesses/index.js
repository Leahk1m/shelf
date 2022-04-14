import React, { useEffect, useState } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import './ShowBusinesses.css';

function ShowBusinesses() {
    const businesses = useSelector(state => Object.values(state.business));
    return(
        <div>
           {businesses.map(business => (
               <div key={business.id}>
                   {business.title}
                   <NavLink to={`/business/${business.id}`}><img className="explore-biz-pic" src={business.imageUrl} alt="explore-pics"/></NavLink>
               </div>
           ))}
        </div>
    );
}


export default ShowBusinesses;
