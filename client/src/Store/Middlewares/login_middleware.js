import axios from 'axios'
import {sigin_in} from '../Actions/login-actions';


export const asyncLogin = (data) => {
    return dispatch => {
        axios.get("http://localhost:3002/api/student").then(res => {
            console.log(res.data);
          })
    }
}