import Axios from 'axios'
import dotENV from 'dotenv'
import history from '../../helper/history'
const ENV  = dotENV.config().parsed

const ChangePasswordAction = (password) => {
        Axios.put(ENV.LOCALHOST+'/Auth/change/password' ,password ,  
        {"headers" : {"Authorization" : localStorage.getItem("AuthzrizationLoginToken")} },
        (response)=> {
            var data = response.data
            if(data.result != 0) {
                history.push("/Profile")
            }
        } )
}