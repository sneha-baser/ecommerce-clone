import authreducer from './authreducer'
import {combineReducers} from 'redux';
const rootreducer = combineReducers({
    auth : authreducer
})
export default rootreducer;