import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";
import TableUsers from "../../../components/dashboardAdmin/Table";
import {getBanCompanies} from "./../../../redux/actions/adminAction";

function BannedCompanies() {
	const dispatch=useDispatch();
	const {company}=useSelector((state) => state.adminReducer);
	useEffect(() => {
		dispatch(getBanCompanies());
	},[dispatch]);
	if(company.companies.loading) {
		return <Spinner animation="border" variant="warning" />;
	}
	return <TableUsers typeUsers={"company"} users={company.companies.ban} choice={'company'} />;
}

export default BannedCompanies;
