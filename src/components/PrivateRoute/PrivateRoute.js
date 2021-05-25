import React, { useEffect } from "react";
import { useWithLDUserIdentified } from "../LaunchDarklyUserIdentifier";
import { logoutUser, checkSession } from "../../actions/user";
import Login from "../../pages/login";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  const userIdentified = useWithLDUserIdentified();
  const isAuthenticated = !!Login.isAuthenticated(
    JSON.parse(localStorage.getItem("authenticated"))
  );

  useEffect(() => {
    if (isAuthenticated && !userIdentified) {
      dispatch(checkSession());
    }
  }, [dispatch, isAuthenticated, userIdentified]);

  if (!isAuthenticated) {
    dispatch(logoutUser());
    return <Redirect to="/login" />;
  }

  if (!userIdentified) {
    return <div>Loading</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) => React.createElement(component, props)}
    />
  );
};

export default PrivateRoute;
