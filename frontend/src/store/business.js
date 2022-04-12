const LOAD_BUSINESS = 'business/LOAD_BUSINESS';
const CREATE_BUSINESS = 'business/CREATE_BUSINESS';
const DELETE_BUSINESS = 'business/DELETE_BUSINESS';
const UPDATE_BUSINESS = 'business/UPDATE_BUSINESS';

const loadBusiness = (businesses) => ({
    type: LOAD_BUSINESS,
    businesses
})

const createBusiness = (business) => ({
    type: CREATE_BUSINESS,
    business

})

const deleteBusiness = (id) => ({
    type: DELETE_BUSINESS,
    id
})

const updateBusiness = (business) => ({
    type: UPDATE_BUSINESS,
    business
})

export const allUserBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/business');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadBusiness(data))
        return data
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
        default:
            return state;
    }
}

export default businessReducer;
