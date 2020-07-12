import Axios from 'axios'
import dotENV from 'dotenv'
import { history } from '../../helper/history'
var ENV = dotENV.config().parsed
const RestPassword_Auth = (payload) => ({
    "type" : "REST_PASSWORD_AUTH" , 
    payload
})
const ForgetPasswordEmaill = (payload) => ({
    "type" : "FORGET_EMAIL", 
        payload
})
export const ForgetPasswordsentToEmail = (ForgetEmail) => {
      return dispatch => {
      console.log(ForgetEmail)
        Axios.post('http://localhost:8081/api/v1/forgetpassowrd/sentemail' ,{"email" : ForgetEmail } ,    {"headers" : {"Content-Type" : "application/json"} },
        (response) => {
            var result = response.data 
            console.log(result)
            if(result.statusMessage ===  true) {
                console.log(result.statusMessage)
               dispatch(ForgetPasswordEmaill(result.statusMessage))
            }
        } ) 
    }
}
export const ResetPassword = ( emailtoken, restpassword)  => {
   return dispatch => Axios.post('http://localhost:8081/api/v1/forgetpassword/restpassword' , {"restpassword" : restpassword},
    {"headers" : {"Authorization" : emailtoken }}).then(response => {
        if(response.data.statusMessage === true) {
                dispatch(RestPassword_Auth(response.data.statusMessage))
        }
    })
}