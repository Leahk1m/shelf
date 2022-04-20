import React from 'react';
import { useSelector } from 'react-redux';
import './GrabRatings.css';

function GrabRatings({ businessId }) {
    const businesses = useSelector(state => Object.values(state.business));
    const reviews = useSelector(state => Object.values(state.review));
    const specificBusiness = businesses.filter(business => business.id === +businessId);

    let avg;
    let specificReviews;
    if(specificBusiness.length > 0 && reviews.length > 0) {
        specificReviews = reviews.filter(review => review.businessId === +specificBusiness[0].id);
    };

    const avgCalculator = () => {
        let sum = 0;
        specificReviews.forEach(review => {
            sum += review.rating
        })

        let avg = sum / specificReviews.length;
        if(avg === 0) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/zero-star.png?raw=true" alt="0-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg < 1.5) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-star.png?raw=true" alt="1-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 1.5 && avg < 2) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-half-star.png?raw=true" alt="1-half-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 2 && avg < 2.5) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-star.png?raw=true" alt="2-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 2.5 && avg < 3) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-half-star.png?raw=true" alt="2-half-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 3 && avg < 3.5) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-star.png?raw=true" alt="3-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 3.5 && avg < 4) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-half-star.png?raw=true" alt="3-half-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 4 && avg < 4.5) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-star.png?raw=true" alt="4-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 4.5 && avg < 5) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-half-star.png?raw=true" alt="4-half-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg === 5) {
            return(<div className="star-img-rating-div-search"><img className="stars-img-search"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/five-star.png?raw=true" alt="5-star"/><p className="num-reviews-p-search">{`${specificReviews?.length} Reviews`}</p></div>)
        }
    }

    return(
        <div>
            {specificReviews ?
                avgCalculator()
            : ''}

        </div>
    )



}


export default GrabRatings;
