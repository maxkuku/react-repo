import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "../api/firebase"


export function PublicRoute({ auth, ...rest }) {
    return !auth ? (
        <Route {...rest} />
    ) : (
        <Redirect 
          to={{
              pathname: "/profile"
          }}
        />
    )
}