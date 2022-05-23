import React from "react";
import DarkTheme from "../../layouts/Dark";
import CusNavbarFullMenu from "../../components/Navbar-full-menu/cusnavbar.full-menu";
import CusFooterOne from "../../components/custom-footer/footone";
import ProfileStyleOne from "../../components/Profile/profile-one";

const profileone = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <CusNavbarFullMenu />
      <div ref={MainContent} className="main-content">
        <ProfileStyleOne grid={3} filterPosition="center" />
        <CusFooterOne />
      </div>
    </DarkTheme>
  );
};

export default profileone;
