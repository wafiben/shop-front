
import {useDispatch,useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import {useEffect} from "react";
import TableUsers from "../../../components/dashboardAdmin/Table";
import {getUsersClient} from './../../../redux/actions/adminAction';

function UsersClient() {
	const dispatch=useDispatch();
	const {clients}=useSelector((state) => state.adminReducer);
	useEffect(() => {
		dispatch(getUsersClient());
	},[dispatch]);
	if(clients.loading) {
		return <Spinner animation="border" variant="warning" />;
	}
	return <TableUsers typeUsers={"clients"} users={clients.all} choice={'client'} />;
}

export default UsersClient;