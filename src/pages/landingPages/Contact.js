import {useState} from "react";
import {contactServiceMessage} from "./../../redux/actions/contactServiceMessage";
import {useDispatch,useSelector} from "react-redux";
import {Spinner,Alert,Modal} from "react-bootstrap";
import {useEffect} from "react";

const Contact=() => {
	const dispatch=useDispatch();
	const {sendMessageLoading,sendMessage}=useSelector(
		(state) => state.adminReducer
	);
	const [msg,setMsg]=useState(sendMessage);
	const [show,setShow]=useState(msg? true:false);
	const [messageInfo,setMessageInfo]=useState({
		name: "",
		email: "",
		subject: "",
		content: "",
	});
	const handleChange=(e) => {
		const {value}=e.target;
		setMessageInfo({...messageInfo,[e.target.name]: value});
	};
	const onSubmit=(e) => {
		e.preventDefault();
		dispatch(contactServiceMessage(messageInfo));
		setMsg(sendMessage);
		setMessageInfo({
			name: "",
			email: "",
			subject: "",
			content: "",
		})
	};
	const handleDeleteAlert=() => {
		setShow(false);
		setMsg('')
	};


	useEffect(() => {
		setMsg(sendMessage); // Update the local state when the Redux state changes
	},[sendMessage]);

	useEffect(() => {
		setShow(!!msg); // Update the show state based on the value of msg
	},[msg]);


	return (
		<div>
			<div id="contact" class="contact-area section-padding">
				<div class="container">
					<div class="section-title text-center">
						<h1>CONTACT US</h1>
						<p>Need more help ?</p>
					</div>
					<div class="row">
						<div class="col-lg-6">
							{show&&(
								<Alert variant="success">
									<Modal.Header closeButton onClick={handleDeleteAlert}>
										{msg}
									</Modal.Header>
								</Alert>
							)}
							<div class="contact">
								<form
									className="form"
									name="enq"
									method="post"
									action="contact.php"
									onSubmit={(e) => onSubmit(e)}
								>
									<div className="row">
										<div className="form-group col-md-6 mb-3">
											<input
												type="text"
												name="name"
												value={messageInfo.name}
												class="form-control"
												placeholder="Name"
												required="required"
												onChange={(e) => handleChange(e)}
											/>
										</div>
										<div class="form-group col-md-6  mb-3">
											<input
												type="email"
												name="email"
												value={messageInfo.email}
												class="form-control"
												placeholder="Email"
												required="required"
												onChange={(e) => handleChange(e)}
											/>
										</div>
										<div class="form-group col-md-12 mb-3">
											<input
												type="text"
												name="subject"
												className="form-control"
												placeholder="Subject"
												required="required"
												onChange={(e) => handleChange(e)}
												value={messageInfo.subject}
											/>
										</div>
										<div class="form-group col-md-12  mb-3">
											<textarea
												rows="6"
												name="content"
												value={messageInfo.content}
												className="form-control"
												placeholder="Your Message"
												required="required"
												onChange={(e) => handleChange(e)}
											></textarea>
										</div>
										<div class="col-md-12 text-center  mb-3">
											<button className=" btn-hover  color-2">
												{!sendMessageLoading? (
													<span> Send Message</span>
												):(
													<Spinner animation="border" variant="warning" />
												)}
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-5">
							{/* <div class="single_address">
								<i class="fa fa-map-marker"></i>
								<h4>Our Address</h4>
								<p>3481 Melrose Place, Beverly Hills</p>
							</div> */}
							<div className="single_address">
								<i className="fa fa-envelope"></i>
								<h4>Send your message</h4>
								<p>Info@example.com</p>
							</div>
							{/* <div class="single_address">
								<i class="fa fa-phone"></i>
								<h4>Call us on</h4>
								<p>(+1) 517 397 7100</p>
							</div> */}
							<div className="single_address">
								<i className="fa fa-clock-o"></i>
								<h4>Work Time</h4>
								<p>online help 7j/7, 24h/24</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
/*git checkout feature/css-shop*/