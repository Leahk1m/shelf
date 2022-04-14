import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './OneBusinessPage.css';
import { useSelector, useDispatch } from 'react-redux';
import * as businessActions from '../../store/business';

function OneBusinessPage() {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id == businessId)
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    const goToBusinessEditPage = async(e) => {
        e.preventDefault();
        history.push(`/business/edit/${businessId}`)
    }

    // const handleUpdateSubmit = async(e) => {
    //     e.preventDefault();
    //     setErrors([]);
    //     await dispatch(businessActions.updateMyBusiness({ ownerId, title, description, address, city, state, zipCode, category, imageUrl, imageUrlTwo, imageUrlThree }))
    //         .catch(async (res) => {
    //             const data = await res.json();

    //             if(data && data.errors) setErrors(data.errors);
    //         })
    //         .then(() => history.push(`/business/${businessId}`))
    // }
    return(
        <div>
            {specificBusiness.map(business => (
                <div key={business.id}>
                    {business.title}
                    <div className="one-biz-pic-container">
                        <img className="one-biz-photo"src={business.imageUrl} alt="one-biz-pic"/>
                        <img className="one-biz-photo"src={business.imageUrlTwo} alt="one-biz-pic"/>
                        <img className="one-biz-photo"src={business.imageUrlThree} alt="one-biz-pic"/>
                    </div>
                    {sessionUser && business.id == sessionUser.id ?
                        <div className="update-delete-btn-container">
                            <button onClick={goToBusinessEditPage}>Update Business</button>
                            <button>Delete Business</button>
                        </div>
                    : ''}
                </div>
            ))}
            <div>
                <button className="write-review-btn">  Write a Review</button>
            </div>


        </div>
    );

}

export default OneBusinessPage;
