import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";
import TableUsers from "../../../components/dashboardAdmin/Table";
import {getActivatedClients} from "../../../redux/actions/adminAction";

function ActivatedClient() {
	const dispatch=useDispatch();
	const {clients}=useSelector((state) => state.adminReducer);
	useEffect(() => {
		dispatch(getActivatedClients());
	},[dispatch]);
	if(clients.loading) {
		return <Spinner animation="border" variant="warning" />;
	}
	return <TableUsers typeUsers={"clients"} users={clients.activ} choice={'client'} />;
}

export default ActivatedClient;
