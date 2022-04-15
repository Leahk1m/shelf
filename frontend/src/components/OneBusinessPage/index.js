import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './OneBusinessPage.css';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import * as reviewActions from '../../store/review';
import iconPic from '../IconPics/user-icon.jpeg';

function OneBusinessPage() {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();

    // const allUsers = useSelector(state => state.)

    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id == businessId)

    const reviews = useSelector(state => Object.values(state.review));

    let specificReviews;
    if(specificBusiness.length > 0 && reviews.length > 0) {
        specificReviews = reviews.filter(review => review.businessId == specificBusiness[0].id);

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

    return(
        <div>
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
                                {review.userId == sessionUser.id ?
                                    <div>
                                        <button onClick={() => history.push(`/business/reviews/edit/${review.id}`)}>update comment</button>
                                        <button>delete comment</button>
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
