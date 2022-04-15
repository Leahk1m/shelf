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

function OneBusinessPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();

    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id == businessId)

    const reviews = useSelector(state => Object.values(state.review));

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
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }


    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const history = useHistory();

    const deleteBusiness = async(e) => {
        e.preventDefault();
        dispatch(businessActions.deleteMyBusiness(+businessId))
            .then(() => history.push(`/profile`))

    }

    const goToBusinessEditPage = async(e) => {
        e.preventDefault();
        history.push(`/business/edit/${businessId}`)
    }

    const deleteReview = async(e) => {
        e.preventDefault();
        dispatch(reviewActions.deleteMyReview(+specificReviews[0].id))

    }

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
                            <button onClick={goToBusinessEditPage}>Update Business</button>
                            <button onClick={deleteBusiness}>Delete Business</button>
                        </div>
                    : ''}
                </div>
            ))}

            <h2>Recommended Reviews</h2>

            {specificReviews ?
                <div>
                    {specificReviews.map(review => (
                        <div key={review.id}>
                            <img className="user-icon-pic"src={iconPic}/>
                            <div>
                                <p>{review.post}</p>
                                <p>{review.rating}</p>
                                <img src={review.profilePhoto}/>
                                {review.userId == sessionUser.id ?
                                    <div>
                                        <button onClick={() => history.push(`/business/reviews/edit/${review.id}`)}>update comment</button>
                                        <button onClick={deleteReview}>delete comment</button>
                                    </div>
                                : ''}

                            </div>
                        </div>
                    ))}

                </div>
            : <p>No Reviews Yet</p>}
            <div>
                <button className="write-review-btn" onClick={() => history.push(`/business/reviews/${businessId}`)}>  Write a Review</button>
            </div>
        </div>
    );

}

export default OneBusinessPage;
