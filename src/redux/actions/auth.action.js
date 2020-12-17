import Axios from 'axios';
import {
    SET_AUTH_STATE
} from '.';


export const signup = data => dispatch => {
    dispatch({
        type: SET_AUTH_STATE, payload: {
            authLoading: true
        }
    });
    const url = `${process.env.REACT_APP_API_URL}/auth`
    Axios(url, {
        method: 'POST',
        data
    })
    .then(res => {
            console.log('STATUS ---', res.status);
            switch (res.status) {
                case 201:
                    dispatch({
                        type: SET_AUTH_STATE, payload: {
                            authLoading: false,
                            auth: res.data.newUser
                        }
                    });
                    break;

                default:
                    break;
            }
            console.log(res);
        })
        .catch(err => {
            dispatch({
                type: SET_AUTH_STATE, payload: {
                    authLoading: false
                }
            });
            console.log(err);
        })
}

