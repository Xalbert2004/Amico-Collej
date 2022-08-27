import React from "react";
import HeaderMoreMenu from "../Header/HeaderMoreMenu";
import MoreMenu from "../MoreMenu/MoreMenu";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
export default function MoreMenuPages() {
  return (
    <div>
      <HeaderMoreMenu />
      <MoreMenu />
      <AboutUs aboutus="aboutus" />
      <Footer />
    </div>
  );
}
