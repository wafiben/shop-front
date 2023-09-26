import React from "react";
import profile_client from ".././assets/images/profile_client.svg"
import setting_client from ".././assets/images/setting_client.svg";
import story_client from ".././assets/images/story_client.svg";
import modify_profile_image from ".././assets/images/modify_profile_image.svg";
import {useNavigate} from "react-router-dom";
import {Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";

function CompanyProfile() {
	const navigate=useNavigate()
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
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozxy746wCC8yP00EIlpWRqJ_f9OaspKdUwg&usqp=CAU" alt="Avatar"
					className="avatarlogoclient" />
				<input className="modifyimage" type="file" id="upload" />
				<label className="modifyimage" for="upload">
					<img alt="Modify" src={modify_profile_image} /> </label>
				<ul className="list-unstyled mb-1">
					<li className="mb-2 mb-xl-3 display-28">
						<span className="display-26 text-secondary me-2 font-weight-600">{user.nameOfComany} </span> </li>
				</ul>
				<div class="naveprofilclient">
					<ul className="barprofilclient">
						<li className="barprofilclient" onClick={() => navigate('/company-space/profile-company/story')}>
							<img alt="story" src={story_client} />
						</li>
						<li className="barprofilclient" onClick={() => navigate('/company-space/profile-company/profile')}>
							<img alt="client-page" src={profile_client} />
						</li>
						<li className="barprofilclient" onClick={() => navigate('/company-space/profile-company/setting')} >
							<img alt="setting" src={setting_client} />
						</li>
					</ul>
				</div>
			</div>}

			<div >
				<Outlet />
			</div>
		</>
	);
}

export default CompanyProfile;
