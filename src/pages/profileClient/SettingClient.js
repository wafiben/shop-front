import React,{useEffect,useState} from "react";
import {Spinner} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import style from "../../assets/style/ClientsettingsProfile.module.css";
import {useSelector,useDispatch} from "react-redux";
import {updateProfileAction} from "../../redux/actions/auth";
import {verifyTypedPassword} from "./../../redux/actions/auth";
import {handlePasswordCheckState} from "../../redux/actions/auth";
import {useErrorMessage} from "./../../hooks/useErrorMessage";

function SettingClient() {
	const {user,loading,checkpassword,loadingCheckPassword}=useSelector(
		(state) => state.authReducer
	);
	const dispatch=useDispatch();
	const [currentPassword,setCurrentPassword]=useState(false);
	const [userInfoClient,setUserInfoClient]=useState({});
	const [clicked,setClicked]=useState(false);
	const [password,setPassword]=useState("");
	const [confirmationPassword,setConfirmationPassword]=useState("");
	const {setErrorMessage,setTimeShow,message}=useErrorMessage();

	useEffect(() => {
		setUserInfoClient({
			firstName: user?.firstName||"",
			lastName: user?.lastName||"",
			phone: user?.phone||"",
			email: user?.email||"",
		});
		dispatch(handlePasswordCheckState());
	},[user,dispatch]);
	if(loading) {
		return (
			<div className="resolt-profil-client">
				<Spinner animation="border" variant="warning" />
			</div>
		);
	}
	const handleSubmit=(e) => {
		e.preventDefault();
		dispatch(updateProfileAction(userInfoClient));
	};

	const onSubmitPassword=(e) => {
		e.preventDefault()
		if(password!==confirmationPassword) {
			setErrorMessage("passwordConfirmed");
			setTimeShow();
		} else if(password==="") {
			setErrorMessage("emptyPassword");
			setTimeShow();
		}

		else {
			dispatch(updateProfileAction({password: password}));
			setClicked(false)
		}
	};

	const handleChangeCurrentPassword=(e) => {
		const {value}=e.target;
		setCurrentPassword(value);
	};
	const handleCheckPassword=() => {
		setClicked(true);
		dispatch(verifyTypedPassword(currentPassword));
	};

	return (
		<div className="resolt-profil-client">
			{user&&(
				<div className={style.settingsprofilclient}>
					<div className={style.containerdivsettingclient}>
						<form onSubmit={handleSubmit} className={style.divdetai}>
							<div className="divdetai">
								<div className="col-sm-12">
									<div className="row">
										<div className="col">
											<div className="form-group">
												<label>First Name</label>
												<input
													className="form-control"
													required
													onChange={(e) =>
														setUserInfoClient({
															...userInfoClient,
															firstName: e.target.value,
														})
													}
													type="text"
													name="firstName"
													value={userInfoClient.firstName}
												/>
											</div>
										</div>
										<div className="">
											<div className="form-group">
												<label>last Name</label>
												<input
													className="form-control"
													required
													onChange={(e) =>
														setUserInfoClient({
															...userInfoClient,
															lastName: e.target.value,
														})
													}
													type="text"
													name="lastName"
													value={userInfoClient.lastName}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="form-group">
												<label>Email</label>
												<input
													className="form-control"
													required
													onChange={(e) =>
														setUserInfoClient({
															...userInfoClient,
															email: e.target.value,
														})
													}
													type="email"
													name="email"
													value={userInfoClient.email}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="form-group">
												<label>Phone</label>
												<input
													className="form-control"
													required
													onChange={(e) =>
														setUserInfoClient({
															...userInfoClient,
															phone: e.target.value,
														})
													}
													type="text"
													name="phone"
													value={userInfoClient.phone}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="m">
								<div class="m">
									<button class="btn btn-primary m-2" type="submit">
										Save Changes
									</button>
								</div>
							</div>
						</form>
						<form onSubmit={onSubmitPassword}>
							<div class="row">
								<div class="col-sm-12">
									<div class="mb-3">
										<b>Change Password</b>
									</div>

									<form class="row">
										<div class="col">
											<div class="form-group">
												<label>Current Password</label>
												<input
													class="form-control"
													type="password"
													placeholder="type your current password"
													required
													onChange={(e) => handleChangeCurrentPassword(e)}
												/>
											</div>
										</div>

										<div className="mt-3">
											{loadingCheckPassword? (
												<Spinner animation="border" variant="primary" />
											):(
												<button
													class="btn btn-primary col"
													type="button"
													onClick={() => handleCheckPassword()}
												>
													{!loadingCheckPassword? (
														"Verify your current password"
													):(
														<Spinner animation="border" variant="primary" />
													)}
												</button>
											)}
										</div>
									</form>
									{clicked&&!loadingCheckPassword&&(
										<>
											{checkpassword? (
												<Alert variant="success">
													Password verified. Proceed below to change the
													password.
												</Alert>
											):(
												<Alert variant="danger">wrong password</Alert>
											)}
										</>
									)}
									{(checkpassword&&clicked)&&(
										<>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>New Password</label>
														<input
															class="form-control"
															type="password"
															value={password}
															onChange={(e) => setPassword(e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col">
													<div class="form-group">
														<label>
															Confirm{" "}
															<span class="d-none d-xl-inline">Password</span>
														</label>
														<input
															class="form-control"
															type="password"
															value={confirmationPassword}
															onChange={(e) =>
																setConfirmationPassword(e.target.value)
															}
														/>
													</div>
												</div>
											</div>
											<div class="">
												<div class="">
													<button class="btn btn-primary" type="submit">
														Save new Password
													</button>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						</form>
						{message&&message}
					</div>
				</div>
			)}
		</div>
	);
}

export default SettingClient;
