import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as reviewActions from '../../store/review';
import './AddReviewFormPage.css';
import { AiFillStar } from 'react-icons/ai';
import LoginFormModal from "../LoginFormModal";

function AddReview() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user?.id);
    const firstName = useSelector((state) => state.session.user?.firstName);
    const lastName = useSelector((state) => state.session.user?.lastName);
    const profilePhoto = useSelector((state) => state.session.user?.profilePhoto);
    const { businessId } = useParams();
    const history = useHistory();

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [post, setPost] = useState("");

    const [errors, setErrors] = useState([]);

    if(!userId) {
        history.push('/login')
    }

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(reviewActions.addNewReview({ firstName, lastName, profilePhoto, userId, businessId, rating, post }))
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
            <div className="rating-stars">
                {[...Array(5)].map((star, i) => {
                    const ratingVal = i + 1;
                    return(
                        <label>
                            <input
                            type="radio"
                            name="rating"
                            value={ratingVal}
                            onClick={() => setRating(ratingVal)}

                            />
                            <div key={i} style={ratingVal <= (hover || rating) ? {backgroundColor:'#e00707'} : {backgroundColor:'#e4e5e9'}}>

                                <AiFillStar
                                className="star"
                                color={'white'}

                                // backGround={ratingVal <= (hover || rating) ? style={{background-color="#e00707"}} : "#e4e5e9"}
                                // backgroundColor={'#e00707'}
                                size={30}
                                onMouseEnter={() => setHover(ratingVal)}
                                onMouseLeave={() => setHover(null)}
                                />
                            </div>
                        </label>
                    )
                    })}

            </div>
            <div >
                <form className="new-review-form" onSubmit={handleReviewSubmit}>
                    <textarea
                    type="textarea"
                    value={post}
                    required
                    onChange={(e) => setPost(e.target.value)}
                    />
                    <button type="submit">Add your review</button>
                </form>
            </div>
        </div>
    );
}

export default AddReview;
