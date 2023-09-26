import {useEffect} from "react";
import {useSelector} from "react-redux";
import TableUsers from "../../../components/dashboardAdmin/Table";
import {getUsersCompanies} from "../../../redux/actions/adminAction";
import {useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";

function Users() {
	const dispatch=useDispatch();
	const {company}=useSelector((state) => state.adminReducer);
	useEffect(() => {
		dispatch(getUsersCompanies());
	},[dispatch]);
	if(company.companies.loading) {
		return <Spinner animation="border" variant="warning" />;
	}
	return <TableUsers typeUsers={"company"} users={company.companies.all} choice={'company'} />;
}

export default Users;
