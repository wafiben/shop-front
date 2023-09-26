import React from 'react';
import {Outlet} from 'react-router-dom';
import AdminNavbar from '../../components/navbars/AdminNavbar';
import {getProfile} from '../../redux/actions/auth';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
function Admin() {
	const dispatch=useDispatch();
	useEffect(() => {
		dispatch(getProfile());
	},[dispatch]);
	return (
		<div style={{display: "flex"}}>
			<div style={{width: "250px"}}>
				<AdminNavbar />
			</div>
			<div style={{flex: "1"}}>
				<Outlet />
			</div>
		</div>
	)
}

export default Admin