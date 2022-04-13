import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './NewBusinessFormPage.css';

function NewBusinessFormPage() {
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


    return(
        <div className="new-business-form-container">
            <form>
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
            </form>
        </div>
    );
}

export default NewBusinessFormPage;
