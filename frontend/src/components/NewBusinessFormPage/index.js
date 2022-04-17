import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import ProfileButton from "../Navigation/ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './NewBusinessFormPage.css';
import * as businessActions from '../../store/business'
import shelfIcon from '../IconPics/shelf.png';

function NewBusinessFormPage({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageUrlTwo, setImageUrlTwo] = useState("");
    const [imageUrlThree, setImageUrlThree] = useState("");
    const ownerId = useSelector((state) => state.session.user.id)
    const history = useHistory();
    const [errors, setErrors] = useState([]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(businessActions.addNewBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrl, imageUrlTwo, imageUrlThree}))
            .then(() => history.push('/profile'))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors)
                }
            })

    }

    return(
        <div className="new-business-form-container">
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

            <h1>Let's add your business</h1>
            <p className="lets-add-biz-info-p">Add information about your business below. Once your business is set up, it will appear in the search results and your business page will be available for views and reviews!</p>
            <div className="new-biz-form-input-container">
                {/* {sessionUser ? */}
                <form className="new-biz-form" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    />
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    />
                    <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    />
                    <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    />
                    <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    />
                    <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Zip code"
                    />
                    <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    />
                    {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Traditional"></option>
                        <option value="Industrial"></option>
                        <option value="Modern"></option>
                        <option value="Rustic"></option>
                        <option value="Other"></option>
                    </select> */}
                    <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image Url"
                    />
                    <input
                    type="text"
                    value={imageUrlTwo}
                    onChange={(e) => setImageUrlTwo(e.target.value)}
                    placeholder="Second Image Url"
                    />
                    <input
                    type="text"
                    value={imageUrlThree}
                    onChange={(e) => setImageUrlThree(e.target.value)}
                    placeholder="Third Image Url"
                    />

                    <button type="submit">Let's add your spot!</button>
                </form>
                {/* : <p>Please log in to add a new business</p>} */}
            </div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        </div>
    );
}

export default NewBusinessFormPage;
