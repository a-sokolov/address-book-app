import C from "../constants/auth-constants";

const initialState = {
    isAuthenticated: false
};

const authenticateReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.AUTHENTICATE:
            return { ...state, isAuthenticated: true };
        case C.SIGNOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

export default authenticateReducer;