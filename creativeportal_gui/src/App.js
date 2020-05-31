import React from 'react';

import Home from "./component/Home";
import {UserProvider} from "./component/context/UserContext";
import {Route, Switch, BrowserRouter as Router,} from "react-router-dom";
import Logout from "./component/user/Logout";
import Login from "./component/user/Login";
import Registration from "./component/user/Registration";
import ConfirmEmail from "./component/user/ConfirmEmail";
import {PostProvider} from "./component/context/PostContext";


function App() {
  return (
  <UserProvider>
      <PostProvider>
            <div className="App">
            <Router>
                <Switch>
                    <Route path="/user/logout">
                        <Logout/>
                    </Route>

                    <Route path="/user/login">
                        <Login/>
                    </Route>

                    <Route path="/user/confirm-email">
                        <ConfirmEmail/>
                    </Route>

                    <Route path="/user/registration">
                        <Registration/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
      </PostProvider>
  </UserProvider>

  );
}

export default App;
