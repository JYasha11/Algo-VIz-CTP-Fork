import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


import "./App.css";

function App() {
  return (
      <Router>
      <Routes>
          <Route path='/about' element={<HomePage/>} />
         {/* 
          //<Route path='/contact' element={<Contact/>} />
          //<Route path='/blogs' element={<Blogs/>} />
          //<Route path='/sign-up' element={<SignUp/>} />
          */}
           
      </Routes>
      </Router>
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
