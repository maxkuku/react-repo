import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom";
import { getIsAuth, initAuthAction } from "../../store/user/reducer"
import { Profile } from "../../pages/Profile";
import { Signup } from "../../pages/Signup";
import { Login } from "../../pages/Login";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";





export const navigation = [
    {
        id: 'link1',
        path: "/profile",
        component: Profile,
        title: "Profile",
    },
    {
        id: 'link2',
        path: "/signup",
        component: Signup, 
        title: "Sign Up",
    },
    {
        id: 'link3',
        path: "/login",
        component: Login, 
        title: "Login",
    }
]


export const navAuth = [
    {
        id: 'link4',
        path: "/nothing",
        component: null,
        title: "Nothing",
    },
]




export const LogRoute = () => {
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthAction);
    },[]);

    return (
        <Switch>
            {
                navigation.map(({path, component}) => (
                    <Route component={component} path={path} />
                ))
            }

            <PublicRoute
              auth={isAuth}
              path={"/login"}
              component={() => <Login/>}
            />

            <PublicRoute auth={isAuth} path={"/signup"} component={Signup} />
            <PrivateRoute auth={isAuth} path={"/profile"} component={Profile} />
        </Switch>
    );
};