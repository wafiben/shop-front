import React from "react";
import CompanyNavbar from "../components/navbars/CompanyNavbar";
import {Outlet} from "react-router-dom";


function CompanySpace() {
	return (
		<div>
			<CompanyNavbar />
			<Outlet />
		</div>
	);
}

export default CompanySpace;
