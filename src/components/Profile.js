import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar , Row , Col, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../App.css'
import './css/profile.css'
import * as Action from '../redux/actions/Login.Action'
import { connect } from 'react-redux';
class Profile extends Component {
    constructor(){
        super()
        this.state = {Auth : localStorage.getItem("AuthzrizationLoginToken")}
    }
    componentDidCatch(){
        console.log("Profile")
    }
    render() { 
        if(this.state.Auth !== ""){
        return (
            <div className="container-form-profile">
                <h3>Profile</h3>
                <div className=" input-form">
                    <Row>
                        <Col span={7}>
                            <Avatar shape="square" size={64} icon={<UserOutlined />} />
                        </Col>
                        <Col>
                            <h1>Title Name</h1>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}>
                        <Col className="profile-form">
                            <Button type="link" className="profile-form-btn" onClick={()=>alert("Edit Profile")}>Edit profile</Button>
                            <Button type="link" className="profile-form-btn" onClick={()=>alert("changepasssowrd")}>Change password</Button>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}>  
                    <Link to="/">       
                        <Button style={{width:"100%"}} type="primary" onClick={()=>this.props.dispatch(Action.LogoutActionModel())}>Logout</Button>
                    </Link> 
                    </Row>
                </div>
            </div>
        ); }
        
    }
}
 
export default connect()(Profile);

