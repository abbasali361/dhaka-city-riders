import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   <div className="app-all">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login>
              <Home></Home>
              </Login>
            </Route>
            <PrivateRoute path="/destination/:bedType">
            <Destination></Destination>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
   </div>
  );
}

export default App;
