import React , { Component } from 'react';
import { connect } from 'react-redux';
import { history} from '../helper/history'
import '../App.css';
import { Form, Input, Button , Row , Col  } from 'antd';
import 'antd/dist/antd.css';
import * as Action from '../redux/actions/Login.Action'
import { Link } from 'react-router-dom';
class Login extends Component {
  constructor() {
    super()
    this.state = { username:"" , password:"" } 
} 
onChange = e => {
    this.setState( {[e.target.name]:e.target.value})
}
onLoginAction = () =>{
    let {username , password} = this.state 
    //console.log("username:"+username+":"+"password"+password)
  //  if(username !="" && password !="")
    this.props.dispatch(Action.LoginAuthAction( username , password )) 
}
render() {

  return (
        <div  className=" container-fluid container-main">
        <Row className="flex-container">
          <Col>
              <div className="container-form-login">
                <Form>
                  <h1>LOGIN</h1>
                  <label className="text-title">Username :</label>
                  <Form.Item  name="username" rules={[{required:true ,message:"Please input your username"}]}>
                  
                      <Input type="text" placeholder="Input username" className="input-form" name="username" onChange={(e)=>this.onChange(e)}/>
                  </Form.Item>
                  <label className="text-title">Password :</label>
                  <Form.Item  name="password" rules={[{required:true ,message:"Please input your password"}]} >
                
                      <Input type="password" placeholder="Input username" style={{ width: "100%"}}  name="password"onChange={(e)=>this.onChange(e)}/>
                  </Form.Item>
                  <Form.Item  className="forget-form">
                    <Link to="/forget">
                        <a  onClick={()=>history.push("/forget")} >
                          forget password ? 
                        </a>
                    </Link>
                  </Form.Item>
                  <Form.Item  className="login-form">
                   { /*<Link to="/Profile" >*/
                      <Button type="primary" className="login-form-btn"  onClick={()=>this.onLoginAction()}>
                        Login
                      </Button>
                    /*</Link> */
                    }
                      <Link to="/Register">
                      <a type="link" className="login-form-btn" htmlType="submit" >
                        Register
                      </a>
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
 
export default connect()(Login);