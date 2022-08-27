import React from "react";
import AmicoBackground from "../AmicoBackground/AmicoBackground";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Map from "../Map/Map";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AmicoBackground home="home" />
      <Menu menu1="menu1" />
      <Map kap="kap" />
      <Footer />
    </div>
  );
}
