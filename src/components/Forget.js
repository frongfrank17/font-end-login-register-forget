import React , { Component}from 'react';
import { connect } from 'react-redux'
import {Form , Input , Button, Row ,Col ,Alert} from 'antd'
import './css/forget.css'
import '../App.css'
import { history } from '../helper/history';
import  * as Action from '../redux/actions/ForgetPassword.Action'
class Forget extends Component {
 constructor() {
     super()
     this.state = { email : "" }
 } 
 onChange = (e) => {
    this.setState( {[e.target.name]:e.target.value})
 }
 onSentToEmail = () => {
     const { email } = this.state
     
     this.props.dispatch(Action.ForgetPasswordsentToEmail(email))
 }
render() {
    if(this.props.Forget.ForgetPasswordEmail === true ){
        return (
            <div  className=" container-fluid container-main">
                <Row className="flex-container">
                    <Col>
                        <div className="container-form-forget">
                        <Alert message="Success Tips" className="alert-icon" type="success" showIcon />
                            <h1>SENT TO EMAIL </h1>
                        </div>
                    </Col>
                </Row>
            </div>
            )   
        }else {

            return (
                <div  className=" container-fluid container-main">
                <Row className="flex-container">
                <Col>
                    <div className="container-form-forget">
                        <h1>Forget password</h1>
                        <Form>

                            <Form.Item className="input-form" name="email"   rules={[ { type: 'email',  message: 'The input is not valid E-mail!', }, 
                                                { required: true,  message: 'Please input your E-mail!', }, ]}>
                                <Input type="text" placeholder="input your email!" name="email" onChange={(e)=>this.onChange(e)}/>
                            </Form.Item>
                            <Form.Item className="forget-form">
                                    
                                        <Button type="primary" className="forget-form-btn" onClick={()=>this.onSentToEmail()} >Submit</Button>
                                
                                
                                        <Button type="link" className="forget-form-btn" onClick={()=>history.push("/")}>Cancel</Button>
                                
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
const mapStateToProps = (state) => {
    return {
        Forget: state.EmailForgetPassword
    }
}
 
export default connect(mapStateToProps) (Forget)