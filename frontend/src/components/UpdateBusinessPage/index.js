import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as businessActions from '../../store/business'
import './UpdateBusinessPage.css';
import shelfIcon from '../IconPics/shelf.png';
import ProfileButton from '../Navigation/ProfileButton';
import { FcCheckmark } from 'react-icons/fc';
import magnify from '../IconPics/mag.png';

function UpdateBusinessPage({ isLoaded }) {
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const thisBusiness = businesses.filter((business) => business?.id === +businessId);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState(thisBusiness[0]?.title);
    const [description, setDescription] = useState(thisBusiness[0]?.description);
    const [address, setAddress] = useState(thisBusiness[0]?.address);
    const [city, setCity] = useState(thisBusiness[0]?.city);
    const [state, setState] = useState(thisBusiness[0]?.state);
    const [zipCode, setZipCode] = useState(thisBusiness[0]?.zipCode);
    const [category, setCategory] = useState(thisBusiness[0]?.category);
    const [imageUrls, setImageUrls] = useState(thisBusiness[0]?.imageUrls);
    const [imgLoaded, setImgLoaded] = useState(true);
    const [search, setSearch] = useState('');

    const [errors, setErrors] = useState([]);
    const [passedImgsLength, setPassedImgsLength] = useState(true);
    const [imgInputError, setImgInputError] = useState(false);

    const ownerId = useSelector((state) => state.session.user.id)

    const history = useHistory();


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

    const searching = (e) => {
        if(search.length === 0) {
            history.push(`/search/all`)

        } else {
            history.push(`/search/${search}`)
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(businessActions.updateMyBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrls}, +businessId))
            .then(() => history.push(`/business/${businessId}`))
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
            setPassedImgsLength(true);
            setImageUrls(files);
            setImgLoaded(true);
            setImgInputError(false);
        }
    };

    const preventRefresh = (e) => {
        e.preventDefault();
        setImgInputError(true);
        errorChecks();
    };

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

    return (
        <div className="update-business-form-container">
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


            <h1 className="add-biz-title-h1">Let's update your business</h1>
            <div className="new-biz-form-input-container">
                <p className="new-biz-directions">Business title</p>
                <form className="new-biz-form" onSubmit={ passedImgsLength ? handleEditSubmit : preventRefresh }>
                    {/* <div className="update-biz-inputs"> */}
                        <input className="update-biz-input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        />

                        <p className="new-biz-directions">Business address</p>
                        <div className="new-biz-addy-info">
                            <input className="update-biz-addy-input"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            />
                            <input className="update-biz-addy-input"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                            />
                            <input className="update-biz-addy-input"
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder="State"
                            />
                            <input className="update-biz-addy-input"
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="Zip code"
                            />
                        </div>
                        <p className="new-biz-directions" id="vibes">Business category</p>
                        <select className="update-biz-category-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Traditional">Traditional</option>
                            <option value="Family-owned">Family-owned</option>
                            <option value="Modern">Modern</option>
                            <option value="Rustic">Rustic</option>
                            <option value="Other">Other</option>
                        </select>
                        <p className="new-biz-directions">Description</p>
                        <textarea className="update-biz-text-area"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="If words can't do your store justice, feel free to just include your hours of operation here! "
                        />
                        <p className="new-biz-directions">New photos? <br/>Don't forget to hold down the cmd key as you select three photos!</p>

                        <div className="aws-upload-input-div">
                            <label className="add-photo-new-biz-btn">
                                Change my photos
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
                            <button className="add-business-btn" type="submit">Update spot</button>
                        </div>
                    {/* </div> */}
                </form>
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

export default UpdateBusinessPage;
