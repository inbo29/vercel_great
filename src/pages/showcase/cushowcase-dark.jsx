import React from "react";
import CusNavbarFullMenu from "../../components/Navbar-full-menu/cusnavbar.full-menu";
import CusShowcasesFullScreen from "../../components/Showcases-full-screen/cushowcases-full-screen";
import DarkTheme from "../../layouts/Dark";

const CusShowcaseDark = () => {
  return (
    <DarkTheme>
      <CusNavbarFullMenu />
      <CusShowcasesFullScreen />
    </DarkTheme>
  );
};

export default CusShowcaseDark;
