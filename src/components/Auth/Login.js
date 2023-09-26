import Input from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../atoms/Button";
import { colorButton, colorButtonCreate } from "../../styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import TextFiled from "../../atoms/textFiled";
import { styleTextFilead } from "../../styles";
import "../../assets/style/login.css";
import hide_Password from "../../assets/images/hide_Password.svg";
import show_password from "../../assets/images/show_password.svg";
import Spinner from "react-bootstrap/Spinner";
import { passwordForget } from "../../styles";
import { useErrorMessage } from "./../../hooks/useErrorMessage";
import { getCodeVerification } from "../../redux/actions/auth";
import BannModalUser from "./BannModalUser";
import { resteBannedUser } from './../../redux/actions/auth';
import zzz from "../../assets/images/zzz.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import imglogo from "../../assets/images/imglogo.png";




function Login() {
	const [show, setShow] = useState(false);
	const handleCloseModal = () => setShow(false);
	const handleShowModal = () => setShow(true);

	const { loading, loginFailedMessage, loadingSendCode, userBanned } =
		useSelector((state) => state.authReducer);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const { message, setTimeShow, setErrorMessage, setMessage } =
		useErrorMessage(loginFailedMessage);
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (loginFailedMessage) {
			setMessage(loginFailedMessage);
			setTimeout(() => {
				setMessage("");
			}, 3000);
		}
	}, [loginFailedMessage, setMessage, clicked]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(user, navigate));
		setClicked(true);
	};

	useEffect(() => {
		if (userBanned) {
			handleShowModal();
		}
		return () => {
			// This function runs when the component is unmounted
			dispatch(resteBannedUser()); // Reset the userBanned state when navigating away from the sign-in page
		};
	}, [userBanned, dispatch]);
	const handleShow = () => setShowPassword(!showPassword);
	const handleClick = () => navigate("/create-account");
	const handleForgetPassword = () => {
		if (!user.email) {
			setErrorMessage("email");
			setTimeShow();
		} else {
			dispatch(getCodeVerification(user.email, navigate));
		}
	};
	return (
		<div className="bdd">

<div className="">


				<img className="img1" src={zzz} />


				<img className="img4" src={img4} />
				
			</div>









			<BannModalUser show={show} handleClose={handleCloseModal} />
		
			<div className="comtainerlogin">
			
				<Form className="loginn" onSubmit={handleSubmit}>
				<img className="imglogo" src={imglogo} />

					<h1 className="text-coler-login"> Sign in </h1>
					<Input
						className="text-bold"
						value={user.email}
						placeholder="Enter Email"
						field="Email"
						type="text"
						name="email"
						handleChange={handleChange}
					/>

					<Input
						name="password"
						value={user.password}
						placeholder="Enter password"
						field="Password"
						type={showPassword ? "text" : "password"}
						handleChange={handleChange}
						className="password-login"


					/>
					<span className="show-password" onClick={handleShow}>
						{showPassword ? (
							<img
								className="imgshowpassword"
								src={show_password}
								alt="show_password"
							/>
						) : (
							<img
								className="imgshowpassword"
								src={hide_Password}
								alt="hide_Password"
							/>
						)}
					</span>
					<div className="d-flex justify-content-between">
						<TextFiled
							textFiled="forget password?"
							className="text-uppercase link-forget-password"
							style={styleTextFilead}
							handleClick={handleForgetPassword}
						/>
						<span className="m-1">
							{loadingSendCode && (
								<Spinner animation="border" variant="warning" />
							)}
						</span>
					</div>
					{/*{loadingSendCode<>*/}

					{loading ? (
						<Spinner animation="border" variant="warning" />
					) : (
						<CustomButton type="submit" style={colorButton} field={"Sign in"} />
					)}
					<br />
					<CustomButton
						type="button"
						field={"Create An Account"}
						style={colorButtonCreate}
						handleClick={handleClick}
					/>
					<i class="bi bi-eye-slash"></i>


					{message && (
						<TextFiled
							textFiled={message}
							className="text-uppercase"
							style={passwordForget}
						/>
					)}

				</Form>














			</div>

			<div className="imgbox">

			<img className="img3" src={img3} />

				<img className="img2" src={img2} />

			</div>

			

			<h6 className="tex">Make Your shopping easier by shopping from online</h6>

		</div>



	);
}

export default Login;
