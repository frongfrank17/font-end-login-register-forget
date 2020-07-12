import { createStore, applyMiddleware , combineReducers} from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger'
import LoginREDUCER from './reducers/Login.Reducer'
import { ResetPasswordAuth , EmailForgetPassword } from './reducers/Forget.Reducer'
import { Register } from './reducers/Register.Reducer'
const combineREDUCERS = combineReducers({
    LoginREDUCER , ResetPasswordAuth , EmailForgetPassword , Register
})

const  Store = createStore( combineREDUCERS , applyMiddleware( thunk ) )
export default Store
