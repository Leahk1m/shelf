import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './OneBusinessPage.css';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';
import * as reviewActions from '../../store/review';

function OneBusinessPage() {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();

    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id == businessId)

    const reviews = useSelector(state => Object.values(state.review));
    const specificReviews = reviews.filter(review => +review.businessId == +specificBusiness[0].id);

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
            {specificReviews ? <p>whee</p> : <p>noooo</p>}
            {specificBusiness.map(business => (
                <div key={business.id}>
                    {business.title}
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
                    : <p>hello</p>}
                </div>
            ))}

            <h2>Recommended Reviews</h2>

            {specificReviews?.map(review => (
                <div key={review.id}>
                    <p>{review.post}</p>

                </div>
            ))}

            <div>
                <button className="write-review-btn">  Write a Review</button>
            </div>
            {/* {console.log('spec-bis', specificBusiness)} */}
            {/* {console.log('spec-biz-id', specificBusiness[0].id)}
            {console.log('reviews', reviews)}
            {console.log('spec-review', specificReviews)}
            {console.log('reviewbisid', reviews[0].businessId)} */}


        </div>
    );

}

export default OneBusinessPage;
