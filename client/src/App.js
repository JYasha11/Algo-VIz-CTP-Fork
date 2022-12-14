import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { QuestionsPage } from "./pages/QuestionsPage";
import VisualizationPage  from "./pages/VisualizationPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { NavBar } from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";
import SignUpOrIn from './containers/SignUpOrIn';
import ContactPage from "./pages/ContactPage";




function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path = "about" element={<AboutUsPage/>} />
          <Route exact path = "practice" element={<QuestionsPage/>} />
          <Route exact path = "vis" element={<VisualizationPage/>} />
          <Route exact path = "contact-us" element={<ContactPage/>} />
          <Route exact path = "sign-in" element ={<SignUpOrIn />} />
          <Route exact path = "profile" element ={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
  }

  export default App;