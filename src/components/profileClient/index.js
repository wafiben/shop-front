import React from "react";
import profile_client from "../../assets/images/profile_client.svg"
import setting_client from "../../assets/images/setting_client.svg";
import story_client from "../../assets/images/story_client.svg";
import {Outlet,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
function ProfileClient() {
	const navigate=useNavigate();
	const {user,loading}=useSelector(state => state.authReducer);

	if(loading) {
		return (
			<div className="resolt-profil-client">
				<Spinner animation="border" variant="warning" />
			</div>
		);
	}

	return (
		<>
			{user&&<div className='naveprofilclient'>
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozxy746wCC8yP00EIlpWRqJ_f9OaspKdUwg&usqp=CAU" alt="Avatar"
						className="avatarlogoclient" />
					<input className="modifyimage" type="file" id="upload" />
					<label className="modifyimage" for="upload"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
						<path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
						<path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
					</svg></label>
				</div>
				<ul className="list-unstyled mb-1-9">
					<li className="mb-2 mb-xl-3 display-28">
						<span className="display-26 text-secondary me-2 font-weight-600"> {`${user.firstName} ${user.lastName}`}</span> </li>
				</ul>
				<ul className="barprofilclient">
					<li className="barprofilclient" >
						<img alt="story" src={story_client} />
					</li>
					<li className="barprofilclient" onClick={() => navigate('/client-space/profile_client/details')}>
						<img alt="client-page" src={profile_client} />
					</li>
					<li className="barprofilclient" onClick={() => navigate('/client-space/profile_client/setting')}>
						<img alt="setting" src={setting_client} />
					</li>
				</ul>

			</div >}

			<Outlet />
		</>
	);
}

export default ProfileClient;