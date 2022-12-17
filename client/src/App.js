import React, { useEffect, useContext, createContext,useReducer} from 'react'
import NavBar from './components/navbar';
import "./App.css"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import Profile from './components/screens/profile';
import SignUp from './components/screens/SignUp';
import CreatePost from './components/screens/CreatePost';
import CreateCategory from './components/screens/CreateCategory';
import UserProfile from './components/screens/UserProfile';
import SubscribedUserPosts from './components/screens/SubscribedUserPosts'
import Reset from './components/screens/Reset'
import Newpassword from './components/screens/Newpassword'
import {reducer,initialState} from './reducer/userReducer'
import AllPosts from './components/screens/AllPosts';
import AllCategories from './components/screens/AllCategories';

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset')){
      history.push("/signin")
      }
    }
  },[])
  return (
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route exact path="/profile">
      <Profile />
    </Route>
    <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/posts">
      <AllPosts />
    </Route>
    <Route path="/createPost">
      <CreatePost />
    </Route>
    <Route path="/categories">
      <AllCategories />
    </Route>
    <Route path="/createCategory">
      <CreateCategory />
    </Route>
    <Route path="/profile/:userid">
      <UserProfile />
    </Route>
    <Route path="/myfollowingpost">
      <SubscribedUserPosts />
    </Route>
    <Route exact path="/reset">
      <Reset />
    </Route>
    <Route path="/reset/:token">
      <Newpassword />
    </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
    <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
