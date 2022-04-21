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
import blueCheck from '../IconPics/blue-check.png';
import { BsDot } from 'react-icons/bs';
import magnify from '../IconPics/mag.png';

function OneBusinessPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const businesses = useSelector(state => Object.values(state.business));
    const specificBusiness = businesses.filter(business => business.id === +businessId);
    const reviews = useSelector(state => Object.values(state.review));
    const [showRevDropdown, setShowRevDropdown] = useState(prev => prev === false ? true : false);
    const [showBizDropdown, setShowBizDropdown] = useState(prev => prev === false ? true : false);
    const [youSureDeleteBiz, setYouSureDeleteBiz] = useState(false);
    const [search, setSearch] = useState('');
    let bizDescription;
    let myReview;
    let bizAddress;
    let bizCity;
    let bizState;

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
        if(specificReviews.length === 0) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/zero-star.png?raw=true" alt="0-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg < 1.5) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-star.png?raw=true" alt="1-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 1.5 && avg < 2) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/one-half-star.png?raw=true" alt="1-half-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 2 && avg < 2.5) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-star.png?raw=true" alt="2-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 2.5 && avg < 3) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/two-half-star.png?raw=true" alt="2-half-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 3 && avg < 3.5) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-star.png?raw=true" alt="3-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 3.5 && avg < 4) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/three-half-star.png?raw=true" alt="3-half-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 4 && avg < 4.5) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-star.png?raw=true" alt="4-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg >= 4.5 && avg < 5) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/four-half-star.png?raw=true" alt="4-half-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
        } else if(avg === 5) {
            return(<div className="star-img-rating-div"><img className="stars-img"src="https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/five-star.png?raw=true" alt="5-star"/><p className="num-reviews-p">{`${specificReviews?.length} Reviews`}</p></div>)
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
            <button className="home-nav-all-biz-btn"onClick={() => history.push('/login')}>Log in</button>
            <button className="signup-home-btn" onClick={() => history.push('/signup')}>Sign up</button>
        </>
        );
    }

    const searching = (e) => {
        if(search.length === 0) {
            history.push(`/search/all`)

        } else {
            history.push(`/search/${search}`)
        }
    };


    const dispatch = useDispatch();

    const history = useHistory();

    const checkingReview = () => {
        for(let i = 0; i < specificReviews?.length; i++) {
            let review = specificReviews[i];
            if(+review.userId === +sessionUser.id) {
                // setExistingReview(true);
                return true;
            }
        }
        return false;

    };



    const checkingUser = (e) => {
        e.preventDefault();

        if(sessionUser && checkingReview()) {
            history.push(`/business/reviews/edit/${myReview}`)
        } else if(sessionUser){
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <div className="one-biz-navbar-container">
                <NavLink className="navbar-links" exact to="/"> <img src={shelfIcon} alt="shelf-icon"/></NavLink>

                <div className="double-search-not-home">
                    <p className="find-near-p-nh">Find</p>
                    <input className="find-name-nh"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Family-owned, Traditional, Rustic stores..."
                    />

                    <p className="find-near-p-nh">Near</p>
                    <input className="find-location-nh"
                    type="text"
                    placeholder="Bay Area, CA ONLY for now"
                    readOnly = {true}
                    />
                    <button onClick={searching}className="magnifying-nh"><img className="mag-glass-icon-nh"src={magnify} alt="mag-glass"/></button>

                </div>

                <div className="main-nav-links">
                    {sessionUser ?
                        <p style={{color: 'grey'}}>{`Hello, ${sessionUser?.firstName}`}!</p>

                    : ''}
                    {/* <NavLink className="navbar-links" to="/businesses">Businesses</NavLink> */}
                    {isLoaded && sessionLinks}

                </div>
            </div>

            {specificBusiness.map(business => (
                <div key={business.id}>
                    <p className="hide-this">{bizDescription = business.description}</p>
                    <p className="hide-this">{bizAddress= business.address}</p>
                    <p className="hide-this">{bizCity = business.city}</p>
                    <p className="hide-this">{bizState = business.state}</p>
                    <div className="one-biz-pic-container">
                        {
                            business.imageUrls.map((img, i) => (
                                <img src={img} key={(i + 1) * 3} className="banner-image-array" alt="biz-pics"/>
                            ))
                        }
                    </div>
                    <div className="business-show-info">
                        <p className="one-biz-title">{business.title}</p>

                        {specificReviews ?
                            avgCalculator()
                        : ''}

                        <div className="blue-check-div">
                            <img src={blueCheck} alt="blue-circle-check"/><p className="claimed-p">Claimed</p><BsDot className="white-dot" /><p className="display-category">{business.category}</p>

                        </div>


                        <div className="business-show-rating-cont">
                            <p className="business-show-rating">{avg}</p>

                        </div>


                   </div>
                    {sessionUser && business.ownerId === sessionUser.id ?
                        <div className="update-delete-btn-container">
                            {/* <RiArrowDropDownLine onClick={() => setShowBizDropdown(prev => prev === false ? true : false)}/> */}
                            {/* {showBizDropdown ? */}
                                <div className="biz-edit-btn-div">
                                    <button className="update-biz-dropdown-btn"onClick={goToBusinessEditPage}>Update Business</button>
                                    <button className="delete-biz-dropdown-btn"onClick={() => setYouSureDeleteBiz(true)}>Delete Business</button>
                                    {youSureDeleteBiz ?
                                        <div className="are-u-sure-div">
                                            <p className="are-u-sure-p">{`Are you sure you want to delete ${business.title}`}</p>
                                            <div className="yes-no-btns-div">
                                                <button className="yes-delete-btn" onClick={deleteBusiness}>Yes</button>
                                                <button className="no-delete-btn" onClick={() => setYouSureDeleteBiz(false)}>No</button>
                                            </div>
                                        </div>
                                    : ''}
                                </div>
                            {/* : ''} */}
                        </div>
                    : <div className="write-review-btn-div"><button className="write-review-btn" onClick={checkingUser}><AiOutlineStar className="outline-star"/>Write a Review</button></div>}
                </div>
            ))}


            <div className="fat-review-div">

                <div className="review-btn-rec-review-title-div">


                </div>

                <div className="biz-description-cont-div">
                    <p className="biz-description-p">{bizDescription}</p>
                    <p>{bizAddress}</p>
                    <p className="the-city">{bizCity}</p>
                    <p className="the-state">{bizState}</p>

                </div>

                <div>
                    <h2>Recommended Reviews</h2>

                </div>
                {reviews && specificReviews ?
                    <div className="peoples-reviews-cont">
                        {console.log(specificReviews)}
                        {specificReviews.map(review => (
                            <div className="review-person-info-cont" key={review.id}>
                                <div className="review-person-info">
                                    <img className="review-prof-icon"src={review.profilePhoto} alt="prof-icon"/>
                                    <p className="review-person-name">{review.firstName} {review.lastName}</p>
                                    <AiOutlineEllipsis onClick={() => setShowRevDropdown(prev => prev === false ? true : false)} />

                                </div>
                                        <div className="review-stars-and-post">
                                            <p className="hide-this">{myReview = review.id}</p>
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
                                        </div>
                                    {sessionUser && review.userId === sessionUser.id ?
                                            <div>{showRevDropdown ?
                                                <div className="comment-edit-dropdown">
                                                    <button className="update-comment-btn"onClick={() => history.push(`/business/reviews/edit/${review.id}`)}>Edit review</button>
                                                    <button className="delete-comment-btn" onClick={deleteReview}>Delete review</button>

                                                </div>
                                            : ''}</div>
                                    : ''}
                            </div>
                        ))}
                    </div>
                : <p>No Reviews Yet</p>}
            </div>

        </div>
    );

}

export default OneBusinessPage;
