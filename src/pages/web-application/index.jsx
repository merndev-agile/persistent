import React, { useRef } from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer/footer";
import WebDevlopementPage from '../../components/Services/webdevlopement';


const WebApplicationDark = () => {
  const MainContent = useRef(null);
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <WebDevlopementPage/>
      <div ref={MainContent} className="main-content">
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default WebApplicationDark;
