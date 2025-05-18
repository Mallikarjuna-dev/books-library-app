import { AUTH_LOADING, AUTH_SUCCESS, AUTH_LOGOUT } from '../actionTypes';

const initialState = {
    user: null,
    loading: true
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING:
            return { ...state, loading: true };
        case AUTH_SUCCESS:
            return { user: action.payload, loading: false };
        case AUTH_LOGOUT:
            return { user: null, loading: false };
        default:
            return state;
    }
}
