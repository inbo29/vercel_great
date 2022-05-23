import React from "react";
import DarkTheme from "../../layouts/Dark";
import CusNavbarFullMenu from "../../components/Navbar-full-menu/cusnavbar.full-menu";
import CusFooterTwo from "../../components/custom-footer/footwo";
import ProfileStyleTwo from "../../components/Profile/profile-two";

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
        <ProfileStyleTwo grid={3} filterPosition="center" />
        <CusFooterTwo />
      </div>
    </DarkTheme>
  );
};

export default profileone;
