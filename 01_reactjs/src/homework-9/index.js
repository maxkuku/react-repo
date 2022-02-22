import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Cats } from "./routes/Cats";
import { Profile_route } from "./routes/Profile";
import { store, persistor } from "./routes/Cats";
import { LogRouter } from "./components/LogRouter";
import { LogRoute } from "./components/LogRoute";
import { Navbar } from 'react-bootstrap';



export const Homework = () => {



    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>

            <Navbar>
              <LogRouter />
            </Navbar>

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
                  <Button to="/cats" component={Link} color="inherit">
                    Cats
                  </Button>  

                  

                </Toolbar>
              </AppBar>
              <Switch>
                {/* <Route component={Login} path="/login" /> */}
                <Route component={Cats} path="/cats" />
                <Route component={Chats} path="/chats" />
                <Route component={Profile_route} path="/profile" />
                <Route component={Home} path="/" />
              </Switch>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};


