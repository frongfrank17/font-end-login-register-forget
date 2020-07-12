import React, { Component } from 'react';
import {connect } from 'react-redux'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { history } from '../helper/history'
import { Form , Input ,Button,Row ,Col, Modal } from 'antd'
import './css/register.css'
import '../App.css'
import * as Action from '../redux/actions/Register.Action'
class Register extends Component {
    constructor() {
        super()
        this.state = { username : "" , repassword : "",  password : "" , email : ""  }
    }
    onChange = e => {
        this.setState( {[e.target.name]:e.target.value})
    }
    onRegiserAction = () => {
        var {username  , password , repassword , email } = this.state 
        if(password === repassword && password !== ""){
        var resgister = {"username" : username , "password" : password , "email" : email}
        this.props.dispatch(Action.RegisterAction(resgister))
            
        }else {
            alert("password not ")
        }
    }
    render() {

        if(this.props.REGISTER.statusMessage === true ){
              return ( <Redirect to="/" /> )
        }else {

            return (
                <div  className=" container-fluid container-main">
                <Row className="flex-container">
                <Col>
                <div className="container-form-register">
                    <h1>Register</h1>
                    <Form >           
                        <Form.Item className="input-form" name="email"   rules={[ { type: 'email',  message: 'The input is not valid E-mail!', }, 
                                    { required: true,  message: 'Please input your E-mail!', }, ]}>
                            <Input type="text" placeholder="input your email!" name="email"  onChange={e=>this.onChange(e)}/>
                        </Form.Item>
                        <Form.Item  name="username" rules={[{required:true ,message:"Please input your username"}]}>
                            <Input type="text" placeholder="Input username" className="input-form" name="username" onChange={(e)=>this.onChange(e)}/>
                        </Form.Item>
                        <Form.Item
                            name="password" className="input-form"
                            rules={[ { required: true,  message: 'Please input your password!', }, ]}
                            hasFeedback
                        >
                            <Input.Password  placeholder="input your password!" name="password" onChange={e =>this.onChange(e)} />
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
                            <Input.Password placeholder="confirm your password!" name="repassword" onChange={e =>this.onChange(e)}/>
                        </Form.Item>
                        <Form.Item className="register-form">
                            <Button type="primary" className="register-form-btn" onClick={()=>this.onRegiserAction()}>Register</Button>
                            <Link to="/">
                                <Button type="link" className="register-form-btn" onClick={()=>history.push("/")}>Cancel</Button>
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
   

 const  mapStateToProps = (state) => {
     return {
         REGISTER: state.Register
     }
 }

export default connect(mapStateToProps) (Register);