import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import SoftwareTestingPage from "../../components/Services/softwareTesting";
const SoftwareTestingDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <SoftwareTestingPage />
    </DarkTheme>
    // <div>Mobile Dark</div>
  );
};

export default SoftwareTestingDark;
