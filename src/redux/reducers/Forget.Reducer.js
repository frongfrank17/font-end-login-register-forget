

const initialReset = {Resetpassword : false}

export const ResetPasswordAuth = (state= initialReset , action) => {
        switch (action.type) {
            case "REST_PASSWORD_AUTH" : 
                    return { Restpassword : action.payload }
            default : return state
             
        }
}
const initialForget = { ForgetPasswordEmail : false}
export const EmailForgetPassword = (state=initialForget, action) => {
        switch (action.type) {
                case "FORGET_EMAIL": return {ForgetPasswordEmail : action.payload}
        
                default:
                     return state
        }
}