import { SET_USERNAME, SET_PASSWORD, LOGIN_SUCCESS } from "./Action";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default loginReducer;
