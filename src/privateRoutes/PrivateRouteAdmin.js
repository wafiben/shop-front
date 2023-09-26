import React from "react";
import {Navigate} from "react-router-dom";
function PrivateRouteAdmin({children}) {
	const token=localStorage.getItem('token');
	const role=localStorage.getItem('role');
	return (
		<div>
			{(token&&role==="admin")? children:<Navigate to="/" />}
		</div>
	);
}

export default PrivateRouteAdmin;
