import React, { useRef } from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer/footer";


const WebApplicationDark = () => {
  const MainContent = useRef(null);
  return (
    <DarkTheme>
      <NavbarFullMenu />
      WEBDark
      <div ref={MainContent} className="main-content">
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default WebApplicationDark;
