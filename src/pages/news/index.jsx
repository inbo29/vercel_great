import React from "react";
import blog2Data from "../../data/blog2.json";
import blog4Data from "../../data/blog4.json";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import CusNavbarFullMenu from "../../components/Navbar-full-menu/cusnavbar.full-menu";
import CusBlogGrid from "../../components/Blog-grid/cus-blog-grid";
import CusBlogList from "../../components/Blog-list/cus-blog-list";
import PageHeader from "../../components/Page-header/page-header";
import CusFot from "../../components/Footer/cusfot";

const BlogGridDark = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	
	return (
		<DarkTheme>
		<div className="circle-bg">
			<div className="circle-color fixed">
			<div className="gradient-circle"></div>
			<div className="gradient-circle two"></div>
			</div>
		</div>
		<CusNavbarFullMenu nr={navbarRef} lr={logoRef} />
		<PageHeader
			title="News"
		/>
		{/* <CusBlogGrid blogs={blog3Data} /> */}
		<CusBlogList blogs={blog2Data} />
		{/* <CusBlogList blogs={blog4Data} /> */}
        <CusFot hideBGCOLOR />
		</DarkTheme>
	);
};

export default BlogGridDark;
