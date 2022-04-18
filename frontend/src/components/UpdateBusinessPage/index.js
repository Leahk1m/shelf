import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as businessActions from '../../store/business'
import './UpdateBusinessPage.css';
import shelfIcon from '../IconPics/shelf.png';
import ProfileButton from '../Navigation/ProfileButton';


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

    const [errors, setErrors] = useState([]);
    const [passedImgsLength, setPassedImgsLength] = useState(true);
    const [imgInputError, setImgInputError] = useState(false);

    const ownerId = useSelector((state) => state.session.user.id)

    const history = useHistory();

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
        } else {
            setPassedImgsLength(true);
            setImageUrls(files);
        }
    };

    const preventRefresh = (e) => {
        e.preventDefault();
        setImgInputError(true);
    };

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

    return (
        <div className="update-business-form-container">
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
            <h1>Update Business</h1>
            <div className="update-biz-form-input-container">
                <form className="update-biz-form" onSubmit={ passedImgsLength ? handleEditSubmit : preventRefresh }>
                    <div className="update-biz-inputs">
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
                        <select className="select-update-biz-category"value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Traditional">Traditional</option>
                            <option value="Family-run">Family-run</option>
                            <option value="Modern">Modern</option>
                            <option value="Rustic">Rustic</option>
                            <option value="Other">Other</option>
                        </select>
                        <label className="add-photo-new-biz-btn">
                            Change my photos
                            <input
                            type="file"
                            multiple
                            onChange={updateFiles} />
                        </label>
                        <button type="submit">Update spot</button>
                    </div>
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
