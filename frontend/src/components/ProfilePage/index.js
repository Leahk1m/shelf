import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import './ProfilePage.css';
import * as sessionActions from '../../store/session';

function ProfilePage() {
    const sessionUser = useSelector((state) => state.session.user);
    return(
        <div>
            <h1>{sessionUser.firstName}</h1>
            <p>From {sessionUser.city}</p>
        </div>
    );

}


export default ProfilePage;
