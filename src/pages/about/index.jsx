import React from "react";
import blog3Data from "../../data/blog3.json";
import CusNavbarFullMenu from "../../components/Navbar-full-menu/cusnavbar.full-menu";
import PagesHeader from "../../components/Pages-header/index";
import DarkTheme from "../../layouts/Dark";
import Team2 from "../../components/Team2/team2";
import CusFot from "../../components/Footer/cusfot";
import CusAboutBlogGrid from "../../components/Blog-grid/cus-about-blog-grid"
import CalendarGfg from "../../components/calendar/schedule";


const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  return (
    <DarkTheme>
      <CusNavbarFullMenu nr={navbarRef} lr={logoRef} />
      <PagesHeader />
      <Team2 />
  		<CusAboutBlogGrid blogs={blog3Data} />
      {/* <CalendarGfg /> */}
      <CusFot hideBGCOLOR />
    </DarkTheme>
  );
};

export default About;




