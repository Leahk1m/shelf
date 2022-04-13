import React from 'react';
import { useParams } from 'react-router-dom';
import './OneBusinessPage.css';
import { useSelector } from 'react-redux';


function OneBusinessPage() {
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id == businessId)
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
                </div>
            ))}
            <div>
                <button className="write-review-btn">  Write a Review</button>
            </div>


        </div>
    );

}

export default OneBusinessPage;
