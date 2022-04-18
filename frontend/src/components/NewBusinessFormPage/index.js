import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
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
    const [imageUrls, setImageUrls] = useState([]);
    const ownerId = useSelector((state) => state.session?.user?.id)
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [passedImgsLength, setPassedImgsLength] = useState(false);
    const [imgInputError, setImgInputError] = useState(false);

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
        await dispatch(businessActions.addNewBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrls }))
            .then(() => history.push('/profile'))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors)
                }
            })
    };

    const updateFiles = (e) => {
        const files = e.target.files;
        if(files.length !== 3) {
            setImgInputError(true);
        } else {
            setPassedImgsLength(true);
            setImageUrls(files);
        }
    };

    const preventRefresh = (e) => {
        e.preventDefault();
        setImgInputError(true);
    };

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

            <h1 className="add-biz-title-h1">Let's add your business</h1>
            <p className="lets-add-biz-info-p">Add information about your business below. Once your business is set up, <br/>it will appear in the search results and your business page <br/>will be available for views and reviews!</p>
            <div className="new-biz-form-input-container">
                <p className="new-biz-directions">Let's start with a title</p>
                <form className="new-biz-form" onSubmit={ passedImgsLength ? handleSubmit : preventRefresh }>
                    <input className="new-biz-input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    />
                    <div className="new-biz-addy-info">
                        <p className="new-biz-directions">Let's get your business address</p>
                        <input className="new-biz-addy-input"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        />
                        <input className="new-biz-addy-input"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        />
                        <input className="new-biz-addy-input"
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        />
                        <input className="new-biz-addy-input"
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Zip code"
                        />
                    </div>
                    <p className="new-biz-directions" id="vibes">What's the vibe like?</p>
                    <select className="new-biz-category-input"defaultValue="Select category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="Traditional">Traditional</option>
                        <option value="Health-conscious">Health-conscious</option>
                        <option value="Modern">Modern</option>
                        <option value="Rustic">Rustic</option>
                        <option value="Other">Other</option>
                    </select>
                    <p className="new-biz-directions">Tell us more about your business - its hours, what inspired it, or whatever you want customers to know</p>
                    <textarea className="new-biz-text-area"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    />
                    <p className="new-biz-directions">Finally, show off your place with three photos!</p>

                    <label className="add-photo-new-biz-btn">
                        Upload photos
                        <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                    </label>

                    <button className="add-business-btn"type="submit">I'm ready to add my business!</button>
                </form>
                {/* : <p>Please log in to add a new business</p>} */}
            </div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                {imgInputError ?
                    <p>
                        Please submit 3 photos of your business
                    </p>
                : ''}
            </ul>
        </div>
    );
}

export default NewBusinessFormPage;
