import { csrfFetch } from './csrf';
const LOAD_REVIEW = 'review/LOAD_REVIEW';
const CREATE_REVIEW = 'review/CREATE_REVIEW';
const UPDATE_REVIEW = 'review/UPDATE_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';

const loadReview = (reviews) => ({
    type: LOAD_REVIEW,
    reviews
});

const createReview = (review) => ({
    type: CREATE_REVIEW,
    review
});

const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    review

});

export const allUserReviews = () => async (dispatch) => {
    const response = await fetch('/api/review');

    if(response.ok) {
        const data = await response.json();
        dispatch(loadReview(data))
        return data
    }
}


export const addNewReview = (review) => async (dispatch) => {
    const { firstName, lastName, userId, businessId, rating, post } = review;
    const response = await csrfFetch(`/api/review`, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName,
            lastName,
            userId,
            businessId,
            rating,
            post
        })
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createReview(data))
    }
    return response
}


export const updateMyReview = (review, businessId) => async (dispatch) => {
    const { userFirstName, userLastName, userId, businessId, rating, post } = review;
    const response = await csrfFetch(`/api/review/edit/${businessId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userFirstName,
            userLastName,
            userId,
            businessId,
            rating,
            post
        })
    });
    if(response.ok) {
        const data = await response.json();
        await dispatch(updateReview(data))
    }
    return response
}


const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case LOAD_REVIEW:
            action.reviews.forEach(review => {
                newState[review.id] = review
            });
            return {...newState};
        case CREATE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case UPDATE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;