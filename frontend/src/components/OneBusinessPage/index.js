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


function OneBusinessPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id === +businessId);
    const reviews = useSelector(state => Object.values(state.review));
    const [showRevDropdown, setShowRevDropdown] = useState(prev => prev === false ? true : false);
    const [showBizDropdown, setShowBizDropdown] = useState(prev => prev === false ? true : false);
    const [youSureDeleteBiz, setYouSureDeleteBiz] = useState(false);
    // const [starAvg, setStarAvg] = useState(0);

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
            return(<p className="giant-0-star"></p>)
        } else if(avg < 1.5) {
            return(<p className="giant-1-star"></p>)
        } else if(avg >= 1.5 && avg < 2) {
            return(<p className="giant-1-half-star"></p>)
        } else if(avg >= 2 && avg < 2.5) {
            return(<p className="giant-2-star"></p>)
        } else if(avg >= 2.5 && avg < 3) {
            return(<p className="giant-2-half-star"></p>)
        } else if(avg >= 3 && avg < 3.5) {
            return(<p className="giant-3-star"></p>)
        } else if(avg >= 3.5 && avg < 4) {
            return(<p className="giant-3-half-star"></p>)
        } else if(avg >= 4 && avg < 4.5) {
            return(<p className="giant-4-star"></p>)
        } else if(avg >= 4.5 && avg < 5) {
            return(<p className="giant-4-half-star"></p>)
        } else if(avg === 5) {
            return(<p className="giant-5-star"></p>)
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
                       <button className="write-review-btn" onClick={checkingUser}><AiOutlineStar className="outline-star"/>Write a Review</button>
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


            <h2>Recommended Reviews</h2>

            {reviews && specificReviews ?
                <div>
                    {specificReviews.map(review => (
                        <div key={review.id}>

                            <p>{review.firstName} {review.lastName}</p>
                            <img className="review-prof-icon"src={review.profilePhoto} alt="prof-icon"/>
                                {sessionUser && review.userId === sessionUser.id ?
                                    <div>
                                        <p>{review.rating}</p>
                                        <p>{review.post}</p>
                                        <div>
                                            <AiOutlineEllipsis onClick={() => setShowRevDropdown(prev => prev === false ? true : false)} />
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
