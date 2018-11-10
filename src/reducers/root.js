import { AUTHENTICATE } from "../constants/action-types";
import { SIGNOUT } from "../constants/action-types";

const initialState = {
    isAuthenticated: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...state, isAuthenticated: true };
        case SIGNOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
}
export default rootReducer;