import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import * as reviewActions from '../../store/review';
import ProfileButton from "../Navigation/ProfileButton";
import './EditReviewFormPage.css';
import { AiFillStar } from 'react-icons/ai';
import shelfIcon from '../IconPics/shelf.png';


function EditReviewFormPage({ isLoaded }) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const profilePhoto = useSelector((state) => state.session.user.profilePhoto);
    const reviews = useSelector((state) => Object.values(state.review));
    const { reviewId } = useParams();
    const myReview = reviews.filter((review) => review.id === +reviewId);
    const firstName = myReview[0].firstName;
    const lastName = myReview[0].lastName;
    const businessId = myReview[0].businessId;
    const history = useHistory();

    const businesses = useSelector(state => Object.values(state?.business));
    const specificBusiness = businesses.filter(business => business?.id === +businessId);
    const allReviews = useSelector((state) => Object.values(state.review));
    const specificBizReviews = allReviews?.filter((review) => review.businessId === +businessId)

    const [rating, setRating] = useState(myReview[0].rating);
    const [hover, setHover] = useState(null);
    const [post, setPost] = useState(myReview[0].post);
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
            <button onClick={() => history.push('/login')}>Log in</button>
            <button className="signup-home-btn" onClick={() => history.push('/signup')}>Sign up</button>
        </>
        );
    }

    const handleUpdateReviewSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(reviewActions.updateMyReview({ firstName, lastName, profilePhoto, userId, businessId, rating, post }, +reviewId))
            .then(() => history.push(`/business/${businessId}`))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors)
                }
            })
    }

    const ratingMessage = (num) => {
        if(num === 1) {
            return ( <p className="rate-message">It couldn't have been worse...</p> )
        }
        if(num === 2) {
            return ( <p className="rate-message">It was okay...</p> )
        }
        if(num === 3) {
            return ( <p className="rate-message">The place was pretty good...</p> )
        }
        if(num === 4) {
            return ( <p className="rate-message">I liked the ambiance.</p> )
        }
        if(num === 5) {
            return ( <p className="rate-message">Who knew getting groceries was fun!</p> )
        }
    }

    return (
        <div className="review-rating-pg">
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
       <div className="whole-review-and-preview-cont">
           <div className="business-reminder-review-cont">
               <div className="all-reviews-side-panel">
                   <p className="biz-prev-title-show">{specificBusiness[0]?.title}</p>
                   {/* <p>{specificBizReviews[0]}</p> */}
                   <img className="review-preview-biz-img"src={specificBusiness[0]?.imageUrls[0]} alt="preview-biz"/>
               </div>

               <div className="biz-reviews-side-display">
                       {
                           specificBizReviews.map((bizReview, i) => (
                               <div key={i} className="individual-reviews-container">
                                   <div className="review-photo-name">
                                       <img className="biz-review-prof-icon-add-pg"src={bizReview.profilePhoto} alt="rev-prof" />
                                       <p>{`${bizReview.firstName} ${bizReview.lastName}`}</p>
                                   </div>

                                   <div className="review-content-add-pg">

                                       <p className="biz-review-post-add-pg">{bizReview.post}</p>
                                   </div>
                               </div>
                           ))
                       }
               </div>
           </div>

           {/* <p>{specificBusiness[0]?.title}</p> */}
           <div className="review-form-pannel">
               <div className="review-rating-cont">
                   <form className="new-review-form" >
                       <div className="rating-stars">
                           {[...Array(5)].map((star, i) => {
                               const ratingVal = i + 1;
                               return(
                                   <label key={i}>
                                       <input
                                       type="radio"
                                       name="rating"
                                       value={ratingVal}
                                       onClick={() => setRating(ratingVal)}

                                       />
                                       <div className="stars-cont" style={ratingVal <= (hover || rating) ? {backgroundColor:'#e00707'} : {backgroundColor:'#e4e5e9'}}>

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
                               {
                                   rating ? ratingMessage(rating) : null
                               }
                       </div>

                       <textarea className="review-text-area"
                       type="textarea"
                       value={post}
                       required
                       onChange={(e) => setPost(e.target.value)}
                       placeholder="If you want to find the world's freshest fruits, produce, and more - look no further. Whenever I am in need of groceries, pastries, supplements, or even bath products, this spot is always my go-to. Prices are very reasonable for the quality of their items, as there are tons of homemade goodies that you can choose from and I also feel good about supporting a local business! It does get busy on the weekends and they run out of stock quickly, so I would advise you to go during the week if you can."
                       />

                   </form>
                       <button className="submit-review-btn" onClick={handleUpdateReviewSubmit}>Edit Review</button>
               </div>
           </div>
       </div>
       <ul>
           {errors.map((error, idx) => <li key={idx}>{error}</li>)}
       </ul>
   </div>
);
}



export default EditReviewFormPage;
