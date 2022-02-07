import React from 'react'
import Provider from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';



import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Profile } from "./routes/Profile";
import { store } from "./store";


export const Homework = () => {

// 'store' is not defined 

    return (
        <Provider store={store}>
            <BrowserRouter>
              <AppBar position="static">
                <Toolbar>
                  <Button to="/" component={Link} color="inherit">
                    Home
                  </Button>
                  <Button to="/profile" component={Link} color="inherit">
                    Profile
                  </Button>
                  <Button to="/chats" component={Link} color="inherit">
                    Chats
                  </Button>  
                </Toolbar>
              </AppBar>
              <Switch>
                <Route component={Chats} path="/chats" />
                <Route component={Profile} path="/profile" />
                <Route component={Home} path="/" />
              </Switch>
            </BrowserRouter>
        </Provider>
    );
};


