import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import MobileDevlopementPage from "../../components/Services/mobiledevlopement";

const MobileDevelopementDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <MobileDevlopementPage/>
    </DarkTheme>
  );
};

export default MobileDevelopementDark;