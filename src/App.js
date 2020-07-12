import React from 'react';
import {  BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import './App.css';
import { history } from './helper/history'
import { PrivateRoute } from './helper/privateRouter'
import Register from './components/Register';
import Forget from './components/Forget'
import Profile from './components/Profile'
import Login from './components/Login'
import RestPassword from './components/Restpassword'
function App() {
  return (
    <div className="App">
      <Router history={history} forceRefresh={true}>
          <Switch>
            <Route  path='/Register' component={Register}/>
            <Route  path='/Forget' component={Forget}/>
            <Route  path="/restpassword/:token" component={RestPassword} />
            <PrivateRoute  path='/Profile' component={Profile} />
            <Route   path='/' component={Login}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
