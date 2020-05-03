import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './Home.css'

import Sidebar from "./layout/Sidebar";
import PostList from "./layout/PostList";
import SearchBar from "./layout/SearchBar";
import Profile from "./user/Profile";
import UploadPost from "./posts/UploadPost";
import Notifications from "./user/Notifications";
import UserLikes from "./user/UserLikes";
import UserFavorites from "./user/UserFavorites";
import UserCollections from "./user/UserCollections";
import Logout from "./user/Logout";
import Login from "./user/Login";
import Registration from "./user/Registration";
import PostDetail from "./posts/PostDetail";

function Home(props) {
    return (
        <div className="home_layout">
            <Router>
                <Sidebar/>

                <Switch>
                    <Route exact path={"/"}>
                        <PostList/>
                    </Route>

                    <Route path={"/profile/:slug"}>
                        <Profile/>
                    </Route>

                    <Route path={"/posts/:slug"}>
                        <PostDetail/>
                    </Route>

                    <Route path={"/upload"}>
                        <UploadPost/>
                    </Route>

                    <Route path={"/user/notifications"}>
                        <Notifications/>
                    </Route>

                    <Route path={"/user/likes"}>
                        <UserLikes/>
                    </Route>

                    <Route path={"/user/favorites"}>
                        <UserFavorites/>
                    </Route>

                    <Route path={"/user/collections"}>
                        <UserCollections/>
                    </Route>

                    <Route path={"/logout"}>
                        <Logout/>
                    </Route>

                    <Route path={"/login"}>
                        <Login/>
                    </Route>

                    <Route path={"/registration"}>
                        <Registration/>
                    </Route>

                </Switch>

                <SearchBar/>
            </Router>

        </div>
    );
}

export default Home;