import {combineReducers} from 'redux';
import {loginReducer} from './login_reducer'
import { companyLoginReducer } from './companyLoginReducer';


export const rootReducer = combineReducers({
    loginReducer,
    companyLoginReducer
})