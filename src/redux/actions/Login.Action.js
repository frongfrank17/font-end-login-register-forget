import Axios from 'axios'
import { history } from '../../helper/history'

const LoginAction = (payload) => ({
    type  : "LOGIN_AUTHOZ_ACTION" ,
    payload
}) 
const LogoutAction = () => ({
        type : "LOGOUT_AUTHOZ_ACTION",
})
export const LoginAuthAction =  (username , password) => {
    return dispatch => {
        Axios.post( "http://localhost:8081/api/v1/login/access" , {"username" : username , "password" : password} , 
            {"headers" : {"Content-Type" : "application/json"} }).then(
            (response) => {
                console.log("Response : "+response.data)
                var token = response.data.accessToken
                console.log("TOKEN : "+ token)
                if(token !== "") {
                        
                        localStorage.setItem("AuthzrizationLoginToken" , token)
                        dispatch(LoginAction(token))
                        history.push('/Profile')              
                }else {
                    console.log("filed !!")
                }
            })
           
    }
}
export const LogoutActionModel = () => {
    return dispatch => {
       localStorage.removeItem("AuthzrizationLoginToken") 
       dispatch(LogoutAction())
        //history.push("/")
    }
}