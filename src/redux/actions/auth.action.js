import Axios from 'axios';
import {
    SET_AUTH_STATE
} from '.';


export const signup = data => dispatch => {
    dispatch({ type: SET_AUTH_STATE, payload: {
        authLoading: true
    }});
    Axios(`${process.env.REACT_APP_API_URL}/auth`, {
        method: 'POST',
        data
    })
        .then(res =>{
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}

