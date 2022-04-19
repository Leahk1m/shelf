import React, { useState, useEffect } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import './OneBusinessPage.css';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import * as reviewActions from '../../store/review';
import ProfileButton from '../Navigation/ProfileButton';
import shelfIcon from '../IconPics/shelf.png';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { RiArrowDropDownLine} from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';

function OneBusinessPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id === +businessId);
    const reviews = useSelector(state => Object.values(state.review));
    const [showRevDropdown, setShowRevDropdown] = useState(prev => prev === false ? true : false);
    const [showBizDropdown, setShowBizDropdown] = useState(prev => prev === false ? true : false);
    const [youSureDeleteBiz, setYouSureDeleteBiz] = useState(false);

    let avg;
    // let sum = 0;
    let specificReviews;
    if(specificBusiness.length > 0 && reviews.length > 0) {
        specificReviews = reviews.filter(review => review.businessId === +specificBusiness[0].id);

    }

    const avgCalculator = () => {
        let sum = 0;
        specificReviews.forEach(review => {
            sum += review.rating
        })

        let avg = sum / specificReviews.length;
        if(avg === 0) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/zero-star.png?raw=true" alt="0-star"/>)
        } else if(avg < 1.5) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-star.png?raw=true" alt="1-star"/>)
        } else if(avg >= 1.5 && avg < 2) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-half-star.png?raw=true" alt="1-half-star"/>)
        } else if(avg >= 2 && avg < 2.5) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-star.png?raw=true" alt="2-star"/>)
        } else if(avg >= 2.5 && avg < 3) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-half-star.png?raw=true" alt="2-half-star"/>)
        } else if(avg >= 3 && avg < 3.5) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-star.png?raw=true" alt="3-star"/>)
        } else if(avg >= 3.5 && avg < 4) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-half-star.png?raw=true" alt="3-half-star"/>)
        } else if(avg >= 4 && avg < 4.5) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-star.png?raw=true" alt="4-star"/>)
        } else if(avg >= 4.5 && avg < 5) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-half-star.png?raw=true" alt="4-half-star"/>)
        } else if(avg === 5) {
            return(<img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/five-star.png?raw=true" alt="5-star"/>)
        }
    }


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

    const dispatch = useDispatch();

    const history = useHistory();

    const checkingUser = (e) => {
        e.preventDefault();
        if(sessionUser) {
            history.push(`/business/reviews/${businessId}`)
        } else {
            history.push('/login')
        }
    };

    const deleteBusiness = async(e) => {
        e.preventDefault();
        dispatch(businessActions.deleteMyBusiness(+businessId))
            .then(() => history.push(`/profile`))

    };

    const goToBusinessEditPage = async(e) => {
        e.preventDefault();
        history.push(`/business/edit/${businessId}`)
    };

    const deleteReview = async(e) => {
        e.preventDefault();
        dispatch(reviewActions.deleteMyReview(+specificReviews[0].id))

    };

    return(
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

            {specificBusiness.map(business => (
                <div key={business.id}>
                    <div className="one-biz-pic-container">
                        {
                            business.imageUrls.map((img, i) => (
                                <img src={img} key={(i + 1) * 3} className="banner-image-array" alt="biz-pics"/>
                            ))
                        }
                        {/* <img className="one-biz-photo"src={business.imageUrl} alt="one-biz-pic"/>
                        <img className="one-biz-photo"src={business.imageUrlTwo} alt="one-biz-pic"/>
                    <img className="one-biz-photo"src={business.imageUrlThree} alt="one-biz-pic"/> */}
                    </div>
                    <div className="business-show-info">
                        <p className="one-biz-title">{business.title}</p>

                        {specificReviews ?
                            avgCalculator()
                        : ''}

                        <div className="business-show-rating-cont">
                            <p className="business-show-rating">{avg}</p>

                        </div>

                   </div>
                        <div className="review-btn-rec-review-title-div">
                            <button className="write-review-btn" onClick={checkingUser}><AiOutlineStar className="outline-star"/>Write a Review</button>
                            <h2>Recommended Reviews</h2>

                        </div>
                    {sessionUser && business.ownerId === sessionUser.id ?
                        <div className="update-delete-btn-container">
                            <RiArrowDropDownLine onClick={() => setShowBizDropdown(prev => prev === false ? true : false)}/>
                            {showBizDropdown ?
                                <div>
                                    <button className="update-biz-dropdown-btn"onClick={goToBusinessEditPage}>Update Business</button>
                                    <button className="delete-biz-dropdown-btn"onClick={() => setYouSureDeleteBiz(true)}>Delete Business</button>
                                    {youSureDeleteBiz ?
                                        <div>
                                            <p>Are you sure?</p>
                                            <button className="yes-delete-btn" onClick={deleteBusiness}>Yes</button>
                                            <button className="no-delete-btn" onClick={() => setYouSureDeleteBiz(false)}>No</button>
                                        </div>
                                    : ''}
                                </div>
                            : ''}
                        </div>
                    : ''}
                </div>
            ))}




            {reviews && specificReviews ?
                <div className="peoples-reviews-cont">
                    {specificReviews.map(review => (
                        <div key={review.id}>
                            <div className="review-person-info">
                                <img className="review-prof-icon"src={review.profilePhoto} alt="prof-icon"/>
                                <p className="review-person-name">{review.firstName} {review.lastName}</p>
                                <AiOutlineEllipsis onClick={() => setShowRevDropdown(prev => prev === false ? true : false)} />

                            </div>
                                {sessionUser && review.userId === sessionUser.id ?
                                    <div className="review-stars-and-post">
                                        {review.rating === 1 &&
                                            <img className="review-show-star"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-star.png?raw=true" alt="1-star"/>
                                        }
                                        {review.rating === 2 &&
                                            <img className="review-show-star"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-star.png?raw=true" alt="2-star"/>
                                        }
                                        {review.rating === 3 &&
                                            <img className="review-show-star"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-star.png?raw=true" alt="3-star"/>
                                        }
                                        {review.rating === 4 &&
                                            <img className="review-show-star"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-star.png?raw=true" alt="4-star"/>
                                        }
                                        {review.rating === 5 &&
                                            <img className="review-show-star"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/five-star.png?raw=true" alt="5-star"/>
                                        }
                                        <div className="review-person-post">
                                            <p>{review.post}</p>
                                        </div>
                                        {showRevDropdown ?
                                            <div className="comment-edit-dropdown">
                                                <button className="update-comment-btn"onClick={() => history.push(`/business/reviews/edit/${review.id}`)}>Edit comment</button>
                                                <button className="delete-comment-btn" onClick={deleteReview}>Delete comment</button>

                                            </div>
                                        : ''}
                                    </div>
                                : ''}
                        </div>
                    ))}
                </div>
            : <p>No Reviews Yet</p>}

        </div>
    );

}

export default OneBusinessPage;
