import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";
import TableUsers from "../../../components/dashboardAdmin/Table";
import {getBannedClients} from "./../../../redux/actions/adminAction";

function BannedClient() {
	const dispatch=useDispatch();
	const {clients}=useSelector((state) => state.adminReducer);
	useEffect(() => {
		dispatch(getBannedClients());
	},[dispatch]);
	if(clients.loading) {
		return <Spinner animation="border" variant="warning" />;
	}
	return <TableUsers typeUsers={"clients"} users={clients.ban} choice={'client'} />;
}

export default BannedClient;
