import React, { useState } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import './OneBusinessPage.css';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import * as reviewActions from '../../store/review';
import iconPic from '../IconPics/user-icon.jpeg';
import ProfileButton from '../Navigation/ProfileButton';
import LoginFormModal from '../LoginFormModal';
import shelfIcon from '../IconPics/shelf.png';
import { AiFillStar } from 'react-icons/ai';
import { Modal } from '../../context/Modal';
import Demo from '../LoginFormModal/Demo';
import LoginForm from '../LoginFormModal/LoginForm';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { RiArrowDropDownLine} from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';


function OneBusinessPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id == businessId);
    const reviews = useSelector(state => Object.values(state.review));
    const [showRevDropdown, setShowRevDropdown] = useState(prev => prev === false ? true : false);
    const [showBizDropdown, setShowBizDropdown] = useState(prev => prev === false ? true : false);
    const [youSureDeleteBiz, setYouSureDeleteBiz] = useState(false);

    let specificReviews;
    if(specificBusiness.length > 0 && reviews.length > 0) {
        specificReviews = reviews.filter(review => review.businessId == specificBusiness[0].id);

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


    const [errors, setErrors] = useState([]);
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
                        <p className="one-biz-title">{business.title}</p>
                    <div className="one-biz-pic-container">
                        <img className="one-biz-photo"src={business.imageUrl} alt="one-biz-pic"/>
                        <img className="one-biz-photo"src={business.imageUrlTwo} alt="one-biz-pic"/>
                        <img className="one-biz-photo"src={business.imageUrlThree} alt="one-biz-pic"/>
                    </div>
                    {sessionUser && business.ownerId == sessionUser.id ?
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
             <div>
                <button className="write-review-btn" onClick={checkingUser}><AiOutlineStar className="outline-star"/>Write a Review</button>

            </div>

            <h2>Recommended Reviews</h2>

            {reviews && specificReviews ?
                <div>
                    {specificReviews.map(review => (
                        <div key={review.id}>
                            <p>{review.firstName} {review.lastName}</p>
                            <img className="review-prof-icon"src={review.profilePhoto}/>
                                {sessionUser && review.userId == sessionUser.id ?
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
