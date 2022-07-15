import './Style.css';
import Navbar from './components/nav/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import Feed from "./components/feed/Feed";
import CoffeeMap from "./components/map/CoffeeMap";
import ReviewForm from './components/reviewForm/reviewForm';
import SignUp from "./components/signUp/SignUp";
import { V0alpha2Api, Configuration, Session, Identity } from '@ory/client'
import ProfilePage from "./components/profile/profilePage";

function App() {

    // const [session, setSession] = useState();
    // const [logoutUrl, setLogoutUrl] = useState();
    //
    // // Get your Ory url from .env
    // // Or localhost for local development
    // const basePath = process.env.REACT_APP_ORY_URL || "http://localhost:4000"
    // const ory = new V0alpha2Api(
    //     new Configuration({
    //         basePath,
    //         baseOptions: {
    //             withCredentials: true,
    //         },
    //     })
    // )

    // Returns either the email or the username depending on the user's Identity Schema
    // const getUserName = (identity) =>
    //     identity.traits.email || identity.traits.username


    // Second, gather session data, if the user is not logged in, redirect to login
    // useEffect(() => {
    //     ory
    //         .toSession()
    //         .then(({ data }) => {
    //             // User has a session!
    //             setSession(data)
    //             ory.createSelfServiceLogoutFlowUrlForBrowsers().then(({ data }) => {
    //                 // Get also the logout url
    //                 setLogoutUrl(data.logout_url)
    //             })
    //         })
    //         .catch(() => {
    //             // Redirect to login page
    //             window.location.replace(`${basePath}/ui/login`)
    //         })
    // })
    //
    // if (!session) {
    //     // Still loading
    //     return <h1>Loading...</h1>
    // }

    return (
      <div className="body">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/Feed" element={<Feed />} />
                  <Route path="/CoffeeMap" element={<CoffeeMap/>} />
                  <Route path="/Review" element={<ReviewForm/>} />
                  <Route path="/Profile" element={<ProfilePage/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
