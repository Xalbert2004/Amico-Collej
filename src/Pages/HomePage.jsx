import React from "react";
import AmicoBackground from "../AmicoBackground/AmicoBackground";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AmicoBackground home="home" />
      <Menu menu1="menu1" />
      <Footer kap="kap" />
    </div>
  );
}
