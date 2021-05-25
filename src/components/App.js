import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/* eslint-disable */
import ErrorPage from "../pages/error";
import MaintenancePage from "../pages/maintance";
/* eslint-enable */

import "../styles/theme.scss";
import LayoutComponent from "../components/Layout";
import Login from "../pages/login";
import Register from "../pages/register";
import LaunchDarklyUserIdentifier from "./LaunchDarklyUserIdentifier";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const CloseButton = ({ closeToast }) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

const App = ({ dispatch }) => {
  return (
    <LaunchDarklyUserIdentifier>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton />}
      />
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/app" exact render={() => <Redirect to="/app/main" />} />
          <PrivateRoute
            path="/app"
            dispatch={dispatch}
            component={LayoutComponent}
          />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/maintenance" exact component={MaintenancePage} />
          <Route component={ErrorPage} />
          <Redirect from="*" to="/app/main/dashboard" />
        </Switch>
      </HashRouter>
    </LaunchDarklyUserIdentifier>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
