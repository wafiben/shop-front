import React,{useState} from "react";
import Input from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import {styleForm} from "../../styles";
import CustomButton from "../../atoms/Button";
import {colorButtonCreate} from "../../styles/index";
import {colorButton} from "../../styles";
import {useNavigate} from "react-router-dom";
import TextFiled from "../../atoms/textFiled";
import {styleTextFilead} from "../../styles/index";
import {useAuthClient} from "../../hooks/useAuth.js";
import {notConfirmedSPasswrdStyle} from "../../styles";
import PhoneInput from 'react-phone-number-input';
import {useDispatch} from "react-redux";
import {getCodeVerification} from "../../redux/actions/auth";
import {useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";

function ClientFormSignup() {
	const dispatch=useDispatch()
	const navigate=useNavigate();
	const {
		useInfoClient,
		onChange,
		onSubmit,
		messageConfirmation,
		valuePhone,
		setValuePhone
	}=useAuthClient();
	const {firstName,lastName,email,password,confirmationPassword}=useInfoClient;

	const {loading,loginFailedMessage,loadingSendCode}=useSelector(state => state.authReducer)

	return (
		<div className="comtainercreateclinent">
			<Form
				className="createclinent"
				onSubmit={(e) => onSubmit(e)}
			>
				<TextFiled
					textFiled="Choose your Account"
					className="textuppercase"
					style={{styleTextFilead}}
				/>
				<CustomButton
					type="submit"
					style={colorButton}
					field={<i class="fa fa-user-circle-o" aria-hidden="true"> client  </i>}
					handleClick={() => navigate("/create-account-client")}
				/>
				<CustomButton
					type="submit"
					style={colorButton}
					field={
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16" >
							<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
						</svg>
					}
					handleClick={() => navigate("/create-account")}
					onChange={(e) => onChange(e)}
				/>


				<Input
					value={firstName}
					placeholder="Enter First Name"
					field="First Name"
					type="text"
					handleChange={(e) => onChange(e)}
					name="firstName"
				/>
				<Input
					value={lastName}
					placeholder="Enter Last Name"
					field="Last Name"
					type="text"
					handleChange={(e) => onChange(e)}
					name="lastName"
				/>
				<PhoneInput
					placeholder="Enter phone number"
					value={valuePhone}
					onChange={setValuePhone}
					name="phone" />
				<Input
					value={email}
					placeholder="Enter Email"
					field="Email"
					type="email"
					handleChange={(e) => onChange(e)}
					name={"email"}
				/>
				<Input
					name="password"
					value={password}
					placeholder="Enter password"
					field="password"
					type="password"
					handleChange={(e) => onChange(e)}
				/>
				<Input
					value={confirmationPassword}
					placeholder="Confirm your password"
					field="confirmation password"
					type="password"
					handleChange={(e) => onChange(e)}
					name={"confirmationPassword"}
				/>
				{loading? <Spinner animation="border" variant="warning" />:<CustomButton
					type="submit"
					field={"Create Account"}
					style={colorButtonCreate}
				/>}

				{messageConfirmation&&(
					<TextFiled
						textFiled={messageConfirmation}
						className="text-uppercase"
						style={notConfirmedSPasswrdStyle}
					/>
				)}
			</Form>
		</div>
	);
}

export default ClientFormSignup;
