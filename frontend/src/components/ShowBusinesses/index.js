import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import './ShowBusinesses.css';

function ShowBusinesses() {
    const businesses = useSelector(state => Object.values(state.business));
    return(
        <div>
           {businesses.map(business => (
               <div>
                   {business.title}
                   <img src={business.imageUrl} style={{width: '200px', height:'200px'}} alt="explore-pics"/>
               </div>
           ))}
        </div>
    );
}


export default ShowBusinesses;
