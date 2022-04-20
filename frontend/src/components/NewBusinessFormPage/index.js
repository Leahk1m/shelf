import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
import './NewBusinessFormPage.css';
import * as businessActions from '../../store/business'
import shelfIcon from '../IconPics/shelf.png';
import { FcCheckmark } from 'react-icons/fc';

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
    const [imgLoaded, setImgLoaded] = useState(false);


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

    const errorChecks = () => {
        const frontErrors = [];
        if(title.length === 0) frontErrors.push('Please provide a title')
        if(title.length < 4 || title.length > 20) frontErrors.push('Title must be between 4-20 characters')
        if(description.length === 0) frontErrors.push('Please provide a description')
        if(description.length < 10) frontErrors.push('Description must be at least 10 characters long')
        if(city.length === 0) frontErrors.push('Please provide a city')
        if(city.length < 4) frontErrors.push('City must have at least 4 characters')
        if(state.length === 0) frontErrors.push('Please provide a state')
        if(state.length < 4) frontErrors.push('State must have at least 4 characters')
        if(zipCode.length < 5) frontErrors.push('Please provide a zip code')
        if(category.length === 0) frontErrors.push('Please provide a category')

        setErrors(frontErrors);

    };

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
        let files = e.target.files;
        if(files.length !== 3) {
            setImgInputError(true);
            setPassedImgsLength(false);
            setImgLoaded(false);
            errorChecks();
        } else {
            setImgInputError(false);
            setPassedImgsLength(true);
            setImageUrls(files);
            setImgLoaded(true);
        }
    };

    const preventRefresh = (e) => {
        e.preventDefault();
        setImgInputError(true);
        errorChecks();
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
                    <select className="new-biz-category-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option disabled="disabled">Select category...</option>
                        <option value="Traditional">Traditional</option>
                        <option value="Family-owned">Family-owned</option>
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

                    <div>
                        <label className="add-photo-new-biz-btn">
                            Upload photos
                            <input
                            type="file"
                            multiple
                            onChange={updateFiles} />
                        </label>
                        {imgLoaded ?
                            <FcCheckmark />
                        : ''}

                    </div>

                    <button className="add-business-btn"type="submit">I'm ready to add my business!</button>
                </form>
                {/* : <p>Please log in to add a new business</p>} */}
            </div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                {imgInputError || errors.length > 0 ?
                    <p>
                        Please submit 3 photos of your business
                    </p>
                : ''}
            </ul>
        </div>
    );
}

export default NewBusinessFormPage;
