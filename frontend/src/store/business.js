import { csrfFetch } from './csrf';
const LOAD_BUSINESS = 'business/LOAD_BUSINESS';
const CREATE_BUSINESS = 'business/CREATE_BUSINESS';
const UPDATE_BUSINESS = 'business/UPDATE_BUSINESS';
const DELETE_BUSINESS = 'business/DELETE_BUSINESS';

const loadBusiness = (businesses) => ({
    type: LOAD_BUSINESS,
    businesses
})

const createBusiness = (business) => ({
    type: CREATE_BUSINESS,
    business

})

const updateBusiness = (business) => ({
    type: UPDATE_BUSINESS,
    business
})

const deleteBusiness = (id) => ({
    type: DELETE_BUSINESS,
    id
})


export const allUserBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/business');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadBusiness(data))
        return data
    }
}

export const addNewBusiness = (business) => async(dispatch) => {
    const { ownerId, title, description, address, city, state, zipCode, category, imageUrl, imageUrlTwo, imageUrlThree } = business
    const response = await csrfFetch(`/api/business/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ownerId,
            title,
            description,
            address,
            city,
            state,
            zipCode,
            category,
            imageUrl,
            imageUrlTwo,
            imageUrlThree
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createBusiness(data))
    }
    return response
}

export const updateMyBusiness = (business, businessId) => async (dispatch) => {
    const { ownerId, title, description, address, city, state, zipCode, category, imageUrl, imageUrlTwo, imageUrlThree } = business
    console.log("WHEHEHEHE")
    const response = await csrfFetch(`/api/business/edit/${businessId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ownerId,
            title,
            description,
            address,
            city,
            state,
            zipCode,
            category,
            imageUrl,
            imageUrlTwo,
            imageUrlThree

        })
    });

    if(response.ok) {
        const data = await response.json();
        await dispatch(updateBusiness(data))
    }
    return response
}


const initialState = {};

const businessReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case LOAD_BUSINESS:
            action.businesses.forEach(business => {
                newState[business.id] = business
            });
            return {...newState};
        case CREATE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        case UPDATE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        default:
            return state;
    }
}

export default businessReducer;
