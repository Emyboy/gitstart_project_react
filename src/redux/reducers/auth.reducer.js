import {
    SET_AUTH_STATE
} from '../actions';

const initialState = {
    auth: null,
    authLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTH_STATE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
