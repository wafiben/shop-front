import {useState,useEffect} from "react";
import {
	CountryPicker,
	StateCountry,
} from "../../components/Auth/companySignUp/CountryPicker";
import {useAuthCompany} from "../../hooks/useAuth";
import {useProfile} from "../../hooks/useProfile";
import style from "../../assets/style/settingProfileCompany.module.css";
import {useSelector} from "react-redux";
import {Spinner,Alert} from "react-bootstrap";
import {useErrorMessage} from "./../../hooks/useErrorMessage";
import {updateProfileAction} from "../../redux/actions/auth";
import {useDispatch} from "react-redux";



function SettingCompany() {
	const {message,setTimeShow,setErrorMessage}=useErrorMessage();
	const onSubmit=(e) => {
		e.preventDefault();
		if(password!==confirmationPassword) {
			setErrorMessage("passwordConfirmed");
			setTimeShow();
		}
		else if(password==="") {
			setErrorMessage("emptyPassword");
			setTimeShow();
		}
		else {
			dispatch(updateProfileAction({password: password}));
			setClicked(false)
		}
	}

	const dispatch=useDispatch()
	const [clicked,setClicked]=useState(false);
	const {
		user,
		loading,
		checkpassword,
	}=useSelector((state) => state.authReducer);
	const {
		selectedState,
		citiesForState,
		selectState,
		handleSelectState
	}=useAuthCompany();
	const {
		handleChangeCurrentPassword,
		loadingCheckPassword,
		handleCheckCurrentPassword,
		handlePasswordCheckToFalse,
		msg,
		password,
		setPassword,
		confirmationPassword,
		setConfirmationPassword,
	}=useProfile();
	const [userInfo,setUserInfo]=useState({});



	useEffect(() => {
		setUserInfo({
			email: user?.email||"",
			country: "Tunisia",
			phone: user?.phone||"",
			state: user?.state||"",
			region: user?.region||"",
			nameOfComany: user?.nameOfComany||"",
		});
	},[user]);



	const handleCheckPassword=() => {
		setClicked(true);
		handleCheckCurrentPassword();
	};
	useEffect(() => {
		handlePasswordCheckToFalse();
	},[]);
	if(loading) {
		return (
			<div className="resolt-profil-client">
				<Spinner animation="border" variant="warning" />
			</div>
		);
	}
	const handleSubmit=(e) => {
		if(userInfo.region===""||userInfo.state==="") {
			setErrorMessage();
			setTimeShow();
		}
		else {
			dispatch(updateProfileAction(userInfo));
		}

	}
	return (
		<div className={style.body}>
			{loading? <Spinner animation="border" variant="warning" />:
				<div className="resolt-profil-client">
					<div className={style.boxsetting}>
						<div classNameName={style.settingsprofilcompany}>
							<div classNameName={style.containerdivsettingcompany}>
								<div className="col-12 col-sm-12 mb-3">
									<div className="row">
										<div>
											<div className="form-group">
												<label>Name Of Comany</label>
												<input
													className="form-control"
													type="text"
													name="name"
													value={userInfo.nameOfComany}
													onChange={(e) =>
														setUserInfo({...userInfo,nameOfComany: e.target.value})
													}
												/>
											</div>
										</div>

										<div className="col">
											<div className="form-group">
												<label>Email</label>
												<input
													className="form-control"
													type="text"
													name="username"
													value={userInfo.email}
													onChange={(e) =>
														setUserInfo({...userInfo,email: e.target.value})
													}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="form-group">
												<label>phone</label>
												<input
													className="form-control"
													type="number"
													value={+userInfo.phone}
													onChange={(e) =>
														setUserInfo({...userInfo,phone: e.target.value})
													}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col mb-3">
											<div className="form-group">
												<label>Address</label>
												<CountryPicker
												/*handleChange={(e) =>
													setUserInfo({...userInfo,country: e.target.value})
												}*/
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col mb-5">
											<div className="form-group">
												<StateCountry
													selectedState={selectedState}
													handleChange={(e) => {
														handleSelectState(e)
														setUserInfo({...userInfo,state: e.target.value})
													}}
													citiesForState={citiesForState}
													selectState={selectState}
													handleSelectCity={(e) => setUserInfo({...userInfo,region: e.target.value})}
												/>
											</div>
										</div>
									</div>
									<div class="m">
										<div class="m">
											<button
												class="btn btn-primary m-2"
												type="button"
												onClick={handleSubmit}
											>
												Save Changes
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className={style.changepasswordcompany}>
								<div className="">
									<div className="col-12 col-sm-12 mb-3">
										<div className="mb-4">
											<b>Change Password</b>
										</div>
										<div className="">
											<div className="col">
												<div className="form-group">
													<label>Current Password</label>
													<input
														className="form-control"
														type="password"
														placeholder="type current password"
														onChange={(e) => handleChangeCurrentPassword(e)}
													/>
												</div>
											</div>
											<div className="col-12 col-sm-12 mb-3">
												{loadingCheckPassword? (
													<Spinner animation="border" variant="primary" />
												):(
													<button
														class="btn btn-primary col m-3"
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
											{clicked&&!loadingCheckPassword&&(
												<div className="qqq">
													{checkpassword? (
														<Alert className="qqq" variant="success">
															Password verified. Proceed below to change the password.
														</Alert>
													):(
														<Alert className="qqq" variant="danger">wrong password</Alert>
													)}
												</div>
											)}
										</div>
									</div>
								</div>
								{(checkpassword&&clicked)&&(
									<div className="">
										<div className="row">
											<div className="col">
												<div className="form-group">
													<label>New Password</label>
													<input
														className="form-control"
														type="password"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<div className="form-group">
													<label>
														Confirm <span className="d-none d-xl-inline">Password</span>
													</label>
													<input
														className="form-control"
														type="password"
														value={confirmationPassword}
														onChange={(e) => setConfirmationPassword(e.target.value)}
													/>
												</div>
											</div>
										</div>
										<div className="m-3">
											<button
												className="btn btn-primary"
												type="button"
												onClick={(e) => onSubmit(e)}
											>
												Save new Password
											</button>

											{message&&
												<Alert variant="danger">
													{message}
												</Alert>}

										</div>
									</div>
								)}
								{msg&&msg}
							</div>

						</div>
					</div>
				</div>}
		</div>
	);
}

export default SettingCompany;
