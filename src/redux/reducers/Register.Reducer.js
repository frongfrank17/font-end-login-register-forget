const initialRegister = { statusMessage : false }
export const Register = (state = initialRegister , action) => {
    switch (action.type) {
        case "REGISTER_AUTH":
                return state = { statusMessage : action.payload }
        
        default:
            return state
    }
}