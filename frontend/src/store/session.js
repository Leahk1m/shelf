import { csrfFetch } from "./csrf.js";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const login = ({ credential, password }) => async dispatch => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential, password }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { firstName, lastName, profilePhoto, city, email, password } = user;

  const formData = new FormData();
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  formData.append('city', city)
  formData.append('email', email)
  formData.append('password', password)

  //for single file
  if (profilePhoto) {
    formData.append('profilePhoto', profilePhoto);
  }

  const response = await csrfFetch("/api/users", {
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
  
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
