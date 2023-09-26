import style from "../../assets/style/clientDetails.module.css"
import {useSelector} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

function DetailsClientProfile() {
	const {user,loading}=useSelector(state => state.authReducer);
	if(loading) {
		return <div className="resolt-profil-client">
			<Spinner animation="border" variant="warning" />
		</div>
	}

	return (
		<div className="resolt-profil-client">
			{user&&(
				<div className={style.detailsclient}>
					<ul className="list-unstyled mb-1-9">
						<li className="mb-2 mb-xl-3 display-28">
							<i className="fa fa-user-o" aria-hidden="true"></i>
							<span className="display-26 text-secondary me-2 font-weight-600"> First Name:</span>
							{user.firstName}
						</li>
						<li className="mb-2 mb-xl-3 display-28">
							<i className="fa fa-user-circle-o" aria-hidden="true"></i>
							<span className="display-26 text-secondary me-2 font-weight-600"> Last Name: </span>
							{user.lastName}
						</li>
						<li className="mb-2 mb-xl-3 display-28">
							<i className="fa fa-envelope-o" aria-hidden="true"></i>
							<span className="display-26 text-secondary me-2 font-weight-600"> Email: </span>
							 {user.email}
						</li>
						<li className="display-28">
							<i className="fa fa-phone" aria-hidden="true"></i>
							<span className="display-26 text-secondary me-2 font-weight-600"> Phone:</span>
							{user.phone}
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default DetailsClientProfile;
