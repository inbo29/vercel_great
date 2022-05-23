import React from "react";
import CusNavbarFullMenu from "../../components/Navbar-full-menu/cusnavbar.full-menu";
import ArtPagesHeader from "../../components/Pages-header/artists-header";
import DarkTheme from "../../layouts/Dark";
import Team2 from "../../components/Team2/team2";
import CusFot from "../../components/Footer/cusfot";
import CusAboutBlogGrid from "../../components/Blog-grid/cus-about-blog-grid"
import CalendarGfg from "../../components/calendar/schedule";


const Artists = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<CusNavbarFullMenu nr={navbarRef} lr={logoRef} />
		<ArtPagesHeader />
		<Team2 />
			{/* <CusAboutBlogGrid blogs={blog3Data} /> */}
		{/* <CalendarGfg /> */}
		<CusFot hideBGCOLOR />
		</DarkTheme>
	);
};

export default Artists;




