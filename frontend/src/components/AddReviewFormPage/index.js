import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as reviewActions from '../../store/review';
import './AddReviewFormPage.css';

function AddReview() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);

    const [rating, setRating] = useState("");
    const [post, setPost] = useState("");

    const [errors, setErrors] = useState([]);







    return (
        <div>
            <div>
                <form>

                </form>
            </div>
        </div>
    );
}

export default AddReview;
