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
import Home from './Home';
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";


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
              <Route path="/" exact component={Home} />
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

// <Route path="/infantCPR" exact component={infantCPR} />
// <Route path="/childCPR" exact component={childCPR} />
// <Route path="/adultCPR" exact component={adultCPR} />