import React,{useEffect} from "react";
import "../assets/style/file.css";
import NavbarAfterConnect from "../components/navbars/NavbarAfterConneccilent";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getProfile} from "../redux/actions/auth";
function ClientSpace() {
	const dispatch=useDispatch();
	useEffect(() => {
		dispatch(getProfile());
	},[dispatch]);
	return (
		<>
			<NavbarAfterConnect />
			<Outlet />

		</>
	);
}

export default ClientSpace;
