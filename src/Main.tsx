import React from 'react'

import Posts from './Components/Posts';
import Post from './Components/Post';
import UserStories from './Components/UserStories/UserStories';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Comments from './Components/Comments/Comments';

import {useSelector} from 'react-redux';
function Main() {

    const user = useSelector(state => state.users.user);

    
    return (<div>
        <BrowserRouter >
        <Switch>
            <Route exact path="/">

            <SignIn></SignIn>
           
            
            </Route>
            <Route  path="/comments/:id">
            <Comments></Comments>
            </Route>

            <Route path="/signUp">
            <SignUp></SignUp>
            </Route>

            <Route path="/signIn">
            <SignIn></SignIn>
            </Route>
            <Route path="/userStories">
                <Post></Post>
            <UserStories></UserStories>
            </Route>
            {/* <Post></Post> */}
            {/* <UserStories></UserStories> */}
            {/* <SignUp></SignUp> */}
            {/* <SignIn></SignIn> */}
            </Switch>
        </BrowserRouter >
         </div>
    )
}

export default Main
