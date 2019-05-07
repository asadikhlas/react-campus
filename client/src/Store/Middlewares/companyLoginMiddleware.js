import axios from 'axios';
import {companyLoginError, companyLoginSuccess} from '../Actions/companyLoginAction';


export const companyAsyncLogin = (newData) => async dispatch => {
    try{
        const {data} = await axios.get("http://localhost:3002/api/company");

    }catch{

    }
}