import {
    SIGNUP,
    SIGNUP_ERROR,
    LOGIN,
    LOGIN_ERROR,
    AUTH_LOADING,
    LOGOUT,
    UPDATE_PROFILE_ERROR,
    UPDATE_PROFILE_SUCCESS,
    GET_AUTH_SONG_ERROR,
    GET_AUTH_SONG_SUCCESS,
} from '.';

import Axios from 'axios';
import jwt from 'jsonwebtoken';
import DataCenter from '../../DataCenter';


const signupUserSuccess = data => {
    return {
        type: SIGNUP,
        payload: data,
    }
}

const signupUserError = error => {
    return {
        type: SIGNUP_ERROR,
        payload: error
    }
};

const loginUserSucess = data => {
    return {
        type: LOGIN,
        payload: data
    }
}

const loginUserError = error => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
};

const authLoading = (isLoaing) => {
    
    return {
        type: AUTH_LOADING,
        payload: isLoaing
    }
}

const Logout = () => {
    return {
        type: LOGOUT,
    }
}

const UpdateProfileSuccess = data => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
    }
}

const UpdateProfileError = error => {
    return {
        type: UPDATE_PROFILE_ERROR,
        payload: error
    }
}

const getSongSuccess = data => {
    return {
        type: GET_AUTH_SONG_SUCCESS,
        payload: data
    }
}

const getSongError = error => {
    return {
        type: GET_AUTH_SONG_ERROR,
        payload: error
    }
}

export const signupUser = userData => dispatch => {
    dispatch(authLoading());
    return Axios(`${process.env.REACT_APP_BASE_URL}/api/v1/user`, {
        method: 'POST',
        data: userData
    })
        .then(res => {
            if (res.data) {
                if (res.data.status === 200) {
                    dispatch(signupUserSuccess(res.data));
                    sessionStorage.setItem('verifyEmail', res.data.user[0].email);
                    window.location = '/email/verify';
                } else {
                    dispatch(signupUserError(res));
                }
                if (res.data.message) {
                    alert(res.data.message);
                }
            }
        })
        .catch(err => {
            dispatch(signupUserError(err));
        })
};

export const LoginUser = userData => dispatch => {
    dispatch(authLoading());
    return Axios(`${process.env.REACT_APP_BASE_URL}/api/v1/login`, {
        method: 'POST',
        data: userData
    })
        .then(res => {
            console.log(res);
            if (res.data.message) {
                alert(res.data.message);
            }
            if (res.data.status) {
                if (res.data.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    dispatch(loginUserSucess(res.data));
                    window.location = '/';
                } else {
                    dispatch(loginUserError(res.data))
                }
            }
        })
        .catch(err => {
            dispatch(loginUserError(err))
        })
}

export const logoutUser = () => dispatch => {
    sessionStorage.clear();
    localStorage.clear();
    dispatch(Logout())
    window.location = '/';
}

export const checkIfUserOwnsToken = () => () => {
    const localToken = localStorage.getItem('token');
    const state = JSON.parse(localStorage.getItem("state"));
    if (localToken) {
        const decodedToken = jwt.decode(localToken);
        const { id, email } = decodedToken.data;
        if (id === state.auth.user.user[0].id && email === state.auth.user.user[0].email) {
            // DataCenter.push({ ownsToken: true })
            DataCenter.ownsToken = true;
        }
    }
}

export const decodeToken = (token) => () => {
    const decodedToken = jwt.decode(token);
    return decodedToken.data;
}

export const VerifyToken = (token) => () => {
    console.log(jwt.verify(token, process.env.REACT_APP_SECRET_KEY));
}

export const updateProfile = data => dispatch => {
    console.log('updating..', data);
    dispatch(authLoading());
    const { id, username, bio, phoneNo } = data;
    return Axios(`${process.env.REACT_APP_BASE_URL}/api/v1/user/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')
                || sessionStorage.getItem('token')}`
        },
        data: {
            username,
            bio,
            phoneNo
        }
    })
        .then(res => {
            console.log(res);
            if (res.data.status === 200) {
                console.log('updated success');
                const currentState = JSON.parse(localStorage.getItem('state'));
                console.log('current state', currentState);
                dispatch(loginUserSucess(res.data));
                dispatch(UpdateProfileSuccess(res.data));
            }
            if (res.data.error) {
                if(res.data.error.constraint === "users_username_unique"){
                    alert('Username already in use')
                }
                if (res.data.error.message) {
                    if (res.data.error.message === "jwt expired") {
                        localStorage.clear();
                        sessionStorage.clear();
                        alert('Unothorized..');
                        window.location = '/login';
                    }
                }
            }
            if (res.data.message) {
                if (res.data.message === "updated") {
                    alert('Updated ')
                }
            }
        })
        .catch(err => {
            console.log(err)
            alert('Network Error')
            dispatch(UpdateProfileError(err))
        })
}

export const GetAuthSongs = id => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/api/v1/song/user/${id}`)
        .then(res => {
            console.log(res);
            if (res.data.status === 200) {
                dispatch(getSongSuccess(res.data));
            } else {
                dispatch(getSongSuccess(res.data));
            }
        })
        .catch(err => {
            console.log(err);
            dispatch(getSongError(err));
        })
}
