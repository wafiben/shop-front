import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useSelector,useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";
import {deleteMessage} from "../../../redux/actions/adminAction";

function ModalMessage({handleClose,show,message,id}) {
	const dispatch=useDispatch();
	const {msg: {loading}}=useSelector(state => state.adminReducer)
	const hanldeDelete=() => {
		dispatch(deleteMessage(id))
		handleClose()
	};
	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop={false}
				dialogClassName="modal-shadow"
			>
				<Modal.Header closeButton>
					<Modal.Title>Message</Modal.Title>
				</Modal.Header>
				<Modal.Body>{message.content}  </Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						close
					</Button>
					<Button variant="primary" onClick={hanldeDelete}>
						{loading&&<Spinner animation="border" variant="warning" />}	Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalMessage;
