
import Axios from 'axios'
import {localhost} from './config'
import {history} from '../../helper/history'

const RegisterAuthAction = (payload) => ({
    "type" : "REGISTER_ACTION", payload
})
 export const RegisterAction = (resgister) =>{
   return dispatch =>{
       console.log(resgister)
       console.log(localhost+"register/")
        Axios.post(localhost+"register/" , resgister , {"headers" : {"Content-Type" : "application/json"} })
        .then(response => {
            console.log(response.data)
            if(response.data.result !== 0) {
                dispatch(RegisterAuthAction(true))
            }
        })
    }
        
}