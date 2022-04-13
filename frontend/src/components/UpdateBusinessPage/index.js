import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import * as businessActions from '../../store/business'
import './UpdateBusinessPage.css';


function UpdateBusinessPage() {
    const { businessId } = useParams();
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

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(businessActions.updateMyBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrl, imageUrlTwo, imageUrlThree}))
            .then(() => history.push(`/business/${businessId}`))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors)
                }
            })

    }
    return (
        <div>
            hello
        </div>

    );

}

export default UpdateBusinessPage;
