import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => (
      <Route
        {...theRest}
        render={props =>
          localStorage.getItem("token") ? ( 
            <Component {...props} />
          ) : (
            <Redirect to="/" />
            )
          }
      />
    );
     
  export default PrivateRoute;