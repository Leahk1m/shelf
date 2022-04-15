import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import * as businessActions from '../../store/business'
import './UpdateBusinessPage.css';


function UpdateBusinessPage() {
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const thisBusiness = businesses.filter((business) => business.id == businessId);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState(thisBusiness[0].title);
    const [description, setDescription] = useState(thisBusiness[0].description);
    const [address, setAddress] = useState(thisBusiness[0].address);
    const [city, setCity] = useState(thisBusiness[0].city);
    const [state, setState] = useState(thisBusiness[0].state);
    const [zipCode, setZipCode] = useState(thisBusiness[0].zipCode);
    const [category, setCategory] = useState(thisBusiness[0].category);
    const [imageUrl, setImageUrl] = useState(thisBusiness[0].imageUrl);
    const [imageUrlTwo, setImageUrlTwo] = useState(thisBusiness[0].imageUrlTwo);
    const [imageUrlThree, setImageUrlThree] = useState(thisBusiness[0].imageUrlThree);

    const ownerId = useSelector((state) => state.session.user.id)

    const history = useHistory();

    const [errors, setErrors] = useState([]);

    // const deleteBusiness = async(e) => {
    //     e.preventDefault();
    //     dispatch(businessActions.deleteMyBusiness(businessId))
    //         .then(() => history.push(`/profile`))

    // }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(businessActions.updateMyBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrl, imageUrlTwo, imageUrlThree}, +businessId))
            .then(() => history.push(`/business/${businessId}`))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors)
                }
            })
    }
    return (
        <div className="update-business-form-container">
            <h1>Update Business</h1>
            <div className="update-biz-form-input-container">
                {/* {sessionUser ? */}
                <form className="update-biz-form" onSubmit={handleEditSubmit}>
                    {/* {thisBusiness.map(business => ( */}
                        <div>
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
                            <button type="submit">Update spot</button>
                        </div>
                    {/* ))} */}
                </form>
            </div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        </div>

    );

}

export default UpdateBusinessPage;
