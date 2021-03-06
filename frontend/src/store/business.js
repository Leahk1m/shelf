import { csrfFetch } from './csrf';
const LOAD_BUSINESS = 'business/LOAD_BUSINESS';
const CREATE_BUSINESS = 'business/CREATE_BUSINESS';
const UPDATE_BUSINESS = 'business/UPDATE_BUSINESS';
const DELETE_BUSINESS = 'business/DELETE_BUSINESS';

const loadBusiness = (businesses) => ({
    type: LOAD_BUSINESS,
    businesses
});

const createBusiness = (business) => ({
    type: CREATE_BUSINESS,
    business

});

const updateBusiness = (business) => ({
    type: UPDATE_BUSINESS,
    business
});

const deleteBusiness = (id) => ({
    type: DELETE_BUSINESS,
    id
});


export const allUserBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/business');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadBusiness(data))
        return data
    }
}

export const addNewBusiness = (business) => async(dispatch) => {
    const { ownerId, title, description, address, city, state, zipCode, category, imageUrls } = business

    const formData = new FormData();
    formData.append('ownerId', ownerId)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('state', state)
    formData.append('zipCode', zipCode)
    formData.append('category', category)

    //for multiple files
    if (imageUrls && imageUrls.length !== 0) {
        for (var i = 0; i < imageUrls.length; i++) {
          formData.append("imageUrls", imageUrls[i]);
        }
      }

    const response = await csrfFetch(`/api/business/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData,
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createBusiness(data))
    }
    return response
}

export const updateMyBusiness = (business, businessId) => async (dispatch) => {
    const { ownerId, title, description, address, city, state, zipCode, category, imageUrls } = business

    const formData = new FormData();
    formData.append('ownerId', ownerId)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('state', state)
    formData.append('zipCode', zipCode)
    formData.append('category', category)

    //for multiple files
    if (imageUrls && imageUrls.length !== 0) {
        for (var i = 0; i < imageUrls.length; i++) {
          formData.append("imageUrls", imageUrls[i]);

        //   console.log('inside if ', imageUrls[i])
        //   console.log('inside if form', formData)
        }
    }
    // console.log(imageUrls)
    // console.log('thunjk', formData)

    const response = await csrfFetch(`/api/business/edit/${businessId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData,
    });

    if(response.ok) {
        const data = await response.json();
        await dispatch(updateBusiness(data))
    }
    return response
}

export const deleteMyBusiness = (businessId) => async(dispatch) => {
    const response = await csrfFetch(`/api/business/${businessId}`, {
        method: 'DELETE',
    })
    if(response.ok) {
        const data = await response.json();
        dispatch(deleteBusiness(data.id))
    }
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
        case DELETE_BUSINESS:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default businessReducer;
