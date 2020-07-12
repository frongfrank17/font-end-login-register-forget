let AuthorizationTOKEN = localStorage.getItem("AuthzrizationLoginToken")
const inintailLoginToken = AuthorizationTOKEN ?  {  AuthorizationTOKEN ,  LoggedInAuthorization : false  } : {};

 const LoginAuthorizationReducer = (state = inintailLoginToken  , action ) =>{

            switch(action.type) {
                case "LOGIN_AUTHOZ_ACTION" : 
                                    return {
                                        AuthorizationTOKEN : action.payload.token ,
                                        LoggedInAuthorization : true
                                    }
                case "LOGOUT_AUTHOZ_ACTION" :
                                    return {
                                        LoggedInAuthorization : false ,
                                        AuthorizationTOKEN : null
                                    }
                default : 
                    return state
            }
            
 }
 export default LoginAuthorizationReducer 