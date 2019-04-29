import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import RenderRegister from '../components/userCreateRegister/RenderRegister';
import history from '../history';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { PrivateRoute } from './PrivateRoute';
import AdminLayout from './layouts/Admin/Admin';
import RTLLayout from "./layouts/RTL/RTL.jsx";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import Test from './test';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
    console.log(this.props.auth);
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <PrivateRoute isAuthenticated={this.props.auth} path="/Dashboard" exact component={Dashboard} />
              <Route path="/register" exact component={RenderRegister} />
              <Route path="/admin" render={props => <AdminLayout {...props} />} />
              <Route path="/rtl" render={props => <RTLLayout {...props} />} />

              <Route path="/test" exact component={Test} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(App)
