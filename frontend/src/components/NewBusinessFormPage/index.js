import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import ProfileButton from "../Navigation/ProfileButton";
import './NewBusinessFormPage.css';
import * as businessActions from '../../store/business'
import shelfIcon from '../IconPics/shelf.png';
import { FcCheckmark } from 'react-icons/fc';
import magnify from '../IconPics/mag.png';
import swal from 'sweetalert';

function NewBusinessFormPage({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    const ownerId = useSelector((state) => state.session?.user?.id)
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [passedImgsLength, setPassedImgsLength] = useState(false);
    const [imgInputError, setImgInputError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [search, setSearch] = useState('');
    // const [type, setType] = useState(options[0].value);
    const businesses = useSelector(state => Object.values(state?.business));

    const options = [
        {
            label: 'Traditional',
            value: 'Traditional'
        },
        {
            label: 'Family-owned',
            value: 'Family-owned'

        },
        {
            label: 'Modern',
            value: 'Modern'
        },
        {
            label: 'Rustic',
            value: 'Rustic'
        },
        {
            label: 'Other',
            value: 'Other'
        }
    ];

    const [category, setCategory] = useState(options[0].value);

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        if (businesses.filter(business => (business.title.toLowerCase() === title.toLowerCase() && business.address.toLowerCase() === address.toLowerCase() && business.city.toLowerCase() === city.toLowerCase() && business.state.toLowerCase() === state.toLowerCase())).length > 0) {
            swal('This business is already on shelf.')

        } else {
            await dispatch(businessActions.addNewBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrls }))
                .then(() => history.push('/profile'))
                .catch(async (res) => {
                    const data = await res.json();
                    if(data && data.errors) {
                        setErrors(data.errors)
                    }
                })
        }
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

    const searching = (e) => {
        if(search.length === 0) {
            history.push(`/search/all`)

        } else {
            history.push(`/search/${search}`)
        }
    };

    return(
        <div className="new-business-form-container">
             <div className="review-navbar-container">
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
                    <p className="new-biz-directions">Let's get your business address</p>
                    <div className="new-biz-addy-info">
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
                    <select className="new-biz-category-input" onChange={(e) => setCategory(e.target.value)}>
                        {
                            options.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))
                        }

                        {/* <option disabled="disabled">Select category...</option>
                        <option value="Traditional">Traditional</option>
                        <option value="Family-owned">Family-owned</option>
                        <option value="Modern">Modern</option>
                        <option value="Rustic">Rustic</option>
                        <option value="Other">Other</option> */}
                    </select>
                    <p className="new-biz-directions">Tell us more about your business - its hours, what inspired it, or whatever you want customers to know</p>
                    <textarea className="new-biz-text-area"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="If words can't do your store justice, feel free to just include your hours of operation here! "
                    />
                    <p className="new-biz-directions">Finally, show off your place with three photos! <br/>Please hold down your cmd key and select three photos that best represent your business</p>

                    <div className="aws-upload-input-div">
                        <label className="add-photo-new-biz-btn">
                            Upload photos
                            <input className="img-upload-none"
                            type="file"
                            multiple
                            onChange={updateFiles} />
                        </label>
                        {imgLoaded ?
                            <FcCheckmark />
                        : ''}

                    </div>

                    <div className="submit-biz-button-div">
                        <button className="add-business-btn"type="submit">I'm ready to show off my business!</button>

                    </div>
                </form>

            </div>
            <ul style={{listStyle: "none"}}>
                {errors.map((error, idx) => <li className="error-msg"key={idx}>{error}</li>)}
                {imgInputError ?
                    <p className="error-msg">
                        Please submit 3 photos of your business
                    </p>
                : ''}
            </ul>
        </div>
    );
}

export default NewBusinessFormPage;
