import style from "../../assets/style/detailsProfileCompany.module.css"
import {useSelector} from 'react-redux';
import {Spinner} from "react-bootstrap";
function DetailsCompanyProfile() {
	const {user,loading}=useSelector(state => state.authReducer)
	const {country,domain,email,nameOfComany,phone,region,state,zipCode}=user||{};
	if(loading) {
		return <div className="resolt-profil-client">
			<Spinner animation="border" variant="warning" />
		</div>
	}
	return (
		<div className='resolt-profil-client'>
			{user&&<div className={style.detailscompany}>
				<ul class="list-unstyled mb-1-9">
					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Name Of Comany:</span>{nameOfComany}</li>
					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Email:</span>{email}</li>
					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Phone:</span>{phone} </li>

					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Domain:</span>{domain} </li>
					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Country:</span> {country}</li>

					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">State:</span> {state}</li>
					<li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Region:</span> {region}</li>
					<li class="display-28"><span class="display-26 text-secondary me-2 font-weight-600">zip Code:</span> {zipCode}</li>
				</ul>
			</div>}
		</div>
	)
}

export default DetailsCompanyProfile