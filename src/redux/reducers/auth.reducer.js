import {
    SIGNUP,
    SIGNUP_ERROR,
    AUTH_LOADING,
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    UPDATE_PROFILE_ERROR,
    UPDATE_PROFILE_SUCCESS,
    GET_AUTH_SONG_ERROR,
    GET_AUTH_SONG_SUCCESS,
} from '../actions';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: {},
    error: null,
    authSongs: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP:
            return {
                ...state,
                isLoggedIn: false,
                user: payload,
                isLoading: false,
                error: null
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                error: payload
            }
        case LOGIN:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: payload,
                error: null,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: payload,
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: false,
                user: {}
            }
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload
            }
        case UPDATE_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case GET_AUTH_SONG_SUCCESS:
            return {
                ...state,
                authSongs: payload
            }
        case GET_AUTH_SONG_ERROR:
            return {
                ...state,
                error: payload,
            }
        default:
            return state
    }
}
