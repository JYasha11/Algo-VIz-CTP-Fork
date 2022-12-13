import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { QuestionsPage } from "./pages/QuestionsPage";
import { VisualizationPage } from "./pages/VisualizationPage";
import { SocialPage } from "./pages/SocialPage";
import { ContactPage } from "./pages/ContactPage";

import SignUpOrIn from './containers/SignUpOrIn';
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
      
        <Route path = "test" element ={<SignUpOrIn />} />
        <Route path="questions" element={<QuestionsPage />} />

           
          {/* 
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          //<Route path='/contact' element={<Contact/>} />
          //<Route path='/blogs' element={<Blogs/>} />
          //<Route path='/sign-up' element={<SignUp/>} />
          */}
           
      </Routes>
    </BrowserRouter>
  );
  }

  export default App;

/*function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Practice
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="">
              Visualization
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
} */



/*
<BrowserRouter>
<Navigation />
<div className="container-xl text-center">
  <div className="row justify-content-center">
    <Routes>
      <Route path="/posts/:id" element={<ShowPostPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/" element={<PostsListPage />} />
    </Routes>
  </div>
</div>
</BrowserRouter>
*/
