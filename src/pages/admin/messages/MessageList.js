import {useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import {getMessages} from "../../../redux/actions/adminAction";
import {useSelector} from "react-redux";
import {Table,Spinner,Button} from "react-bootstrap";
import {formatDate} from "./../../../utils/dateFormat";
import ModalMessage from "../../../components/dashboardAdmin/message/ModalMessage";
function MessageList() {
	const [show,setShow]=useState(false);
	const [selectedMessage,setSelectedMessage]=useState(null);
	const [id,setId]=useState(null);

	const dispatch=useDispatch();
	const {
		msg: {loading,messages},
	}=useSelector((state) => state.adminReducer);

	useEffect(() => {
		dispatch(getMessages());
	},[dispatch]);

	const handleClose=() => {
		setShow(false);
		setSelectedMessage(null); // Reset the selected message when the modal is closed
		setId(null);
	};
	const handleShow=(message) => {
		setSelectedMessage(message);
		setId(message._id);
		setShow(true);
	};

	return (
		<div className="container-headerelimant mt-3">
			{loading? (
				<Spinner animation="border" variant="warning" />
			):(
				<Table>
					<thead>
						<tr className="">
							<th className="">name</th>
							<th className="">email</th>
							<th className="">Date</th>
							<th className=""> Actions</th>
						</tr>
					</thead>
					<tbody>
						{messages.map((msg) => (
							<tr key={msg._id}>
								<td className="">{msg.name}</td>
								<td className="">{msg.email}</td>
								<td className="">
									{formatDate(msg.timestamp,"MMMM DD, YYYY")}
								</td>
								<td>
									<Button variant="primary" onClick={() => handleShow(msg)}>
										{" "}
										{/* Pass the selected message to handleShow */}
										Show details
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}

			{/* Render the modal with the selected message */}
			{selectedMessage&&(
				<ModalMessage
					id={id}
					show={show}
					handleClose={handleClose}
					message={selectedMessage}
				/>
			)}
		</div>
	);
}

export default MessageList;
