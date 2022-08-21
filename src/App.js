import React from "react";
import "../src/App.css";
import AmicoBackground from "./AmicoBackground/AmicoBackground";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import MoreMenu from "./MoreMenu/MoreMenu";
import {Router,Route} from 'react-router-dom'
export default function App() {
  return (

    // <Router>
      <div className="container">
        <Header />
        <AmicoBackground home="home" />
        <Menu menu1 ="menu1" />
        <AboutUs aboutus ="aboutus"/>
        <Footer/>
      </div>
      // {/* <Route path="/" element={MoreMenu}></Route> */}
      // </Router>
     );
}
