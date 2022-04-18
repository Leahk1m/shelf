import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import * as businessActions from '../../store/business'
import './UpdateBusinessPage.css';


function UpdateBusinessPage() {
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const thisBusiness = businesses.filter((business) => business?.id == businessId);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState(thisBusiness[0]?.title);
    const [description, setDescription] = useState(thisBusiness[0]?.description);
    const [address, setAddress] = useState(thisBusiness[0]?.address);
    const [city, setCity] = useState(thisBusiness[0]?.city);
    const [state, setState] = useState(thisBusiness[0]?.state);
    const [zipCode, setZipCode] = useState(thisBusiness[0]?.zipCode);
    const [category, setCategory] = useState(thisBusiness[0]?.category);
    const [imageUrls, setImageUrls] = useState([]);

    const [errors, setErrors] = useState([]);
    const [passedImgsLength, setPassedImgsLength] = useState(false);
    const [imgInputError, setImgInputError] = useState(false);

    const ownerId = useSelector((state) => state.session.user.id)

    const history = useHistory();


    // const deleteBusiness = async(e) => {
    //     e.preventDefault();
    //     dispatch(businessActions.deleteMyBusiness(businessId))
    //         .then(() => history.push(`/profile`))

    // }

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

    return (
        <div className="update-business-form-container">
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
                        <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                        />
                        <select className="select-update-biz-category"defaultValue="Select category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="Traditional">Traditional</option>
                            <option value="Health-conscious">Health-conscious</option>
                            <option value="Modern">Modern</option>
                            <option value="Rustic">Rustic</option>
                            <option value="Other">Other</option>
                        </select>
                        <label>
                            Image Upload (Max 3 Imgs)
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
