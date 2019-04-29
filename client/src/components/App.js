import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../history';
import * as actions from '../actions';
import { connect } from 'react-redux';
import AdminLayout from './layouts/Admin/Admin';
import RTLLayout from "./layouts/RTL/RTL.jsx";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import Test from './test';
import Translate from '../helpers/translate';

class App extends React.Component {

  /* DO NOT DELETE OUR ROUTES****  */
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>

              <Route path="/" render={props => <AdminLayout {...props} />} />
              <Route path="/rtl" render={props => <RTLLayout {...props} />} />
              <Route path="/test" exact component={Test} />

              <Route path="/translate" exact component={Translate} />
              <Route path='/hello' render={props => <AdminLayout {...props} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
}


export default App