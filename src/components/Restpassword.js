import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Form , Input ,Button,Row ,Col    } from 'antd'
import {localhost } from '../redux/actions/config' 
import './css/Resetpassword.css'
import Axios from 'axios';
import * as Action from '../redux/actions/ForgetPassword.Action'
class Resetpassword extends Component {
    constructor() {
        super()
        this.state = { AcceptToken : ""  , repassword : "" , password : ""}
    } 
    componentDidMount() {
        var tokenEmail =  this.props.match.params.token
        Axios.get(localhost+"api/v1/forgetpassword/" , {"headers" : {authorization : tokenEmail}}).then(response=>{
            if(response.data.statusMessage === true) {
                this.setState({AcceptToken : tokenEmail })
            }
        })
    }
    onResetPassoword  = () => {
        const {password , repassword} = this.state
        if(password === repassword && password !== ""){
                this.props.dispatch(Action.ResetPassword(password))
        }else {
            alert("Not Password password !== repassword || password, repassword == null ")
        }
    }
    render() {
        if(this.state.AcceptToken === ""){
                return (
                    <div  className=" container-fluid container-main">
                    <Row className="flex-container">
                    <Col>
                        <div className="container-form-Reset">
                                    <h1>Not Accept PAGE </h1>

                        </div>
                    </Col>
                </Row>
                </div>
            );
        } else{
            return (
                <div  className=" container-fluid container-main">
                <Row className="flex-container">
                <Col>
                    <div className="container-form-Reset">
                        <h1>Reset password</h1>
                        <Form>
                        <Form.Item
                                name="password" className="input-form"
                                rules={[ { required: true,  message: 'Please input your password!', }, ]}
                                hasFeedback
                            >
                                <Input.Password  placeholder="input your password!"/>
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                className="input-form"
                                dependencies={['password']}
                                hasFeedback
                                rules={[ { required: true, message: 'Please confirm your password!', },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {  
                                        return Promise.resolve();  
                                    }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    }, }), ]} >
                                <Input.Password placeholder="confirm your password!" name="password" onChange={e =>this.onChange(e)}/>
                            </Form.Item>
                            <Form.Item>  
                                        <Button type="primary" className="Reset-form-btn" onClick={()=>alert("Reset Password susseccfully ")} >Submit</Button>
                                
                                    <Link to='/'>
                                        <Button type="link" className="Reset-form-btn" >Cancel</Button>
                                    </Link>
                                </Form.Item>
                        
                        </Form>
                    </div>
                </Col>
            </Row>
            </div>
            );
        }
    }
}
 
export default  connect()(Resetpassword);