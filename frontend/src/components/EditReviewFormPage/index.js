import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import * as reviewActions from '../../store/review';
import ProfileButton from "../Navigation/ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './EditReviewFormPage.css';
import { AiFillStar } from 'react-icons/ai';
import shelfIcon from '../IconPics/shelf.png';

function EditReviewFormPage({ isLoaded }) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const reviews = useSelector((state) => Object.values(state.review));
    const { reviewId } = useParams();
    const myReview = reviews.filter((review) => review.id == +reviewId);
    const userFirstName = myReview.firstName;
    const userLastName = myReview.lastName;
    const businessId = myReview.businessId;
    const history = useHistory();

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [post, setPost] = useState("");
    const [errors, setErrors] = useState([]);


    const sessionUser = useSelector((state) => state.session.user);
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <LoginFormModal />
            <NavLink to="/signup">Sign Up</NavLink>
        </>
        );
    }

    const handleUpdateReviewSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(reviewActions.updateMyReview({ userFirstName, userLastName, userId, businessId, rating, post }, +reviewId))
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
                            <div style={ratingVal <= (hover || rating) ? {backgroundColor:'#e00707'} : {backgroundColor:'#e4e5e9'}}>

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
            <div>
                <form className="new-review-form" onSubmit={handleUpdateReviewSubmit}>
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

export default EditReviewFormPage;
