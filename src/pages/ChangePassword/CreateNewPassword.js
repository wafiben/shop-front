import {useEffect,useState} from 'react';
import {resetPassword} from '../../redux/actions/auth';
import {useErrorMessage} from '../../hooks/useErrorMessage';
import {useDispatch,useSelector} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


function CreateNewPassword() {
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const [userInfo,setUserInfo]=useState({code: '',email: '',password: ""});
	const [confirmationPassword,setConfirmationPassword]=useState('');
	const {resetLoading,errorReset}=useSelector((state) => state.authReducer)
	const {message,setTimeShow,setErrorMessage}=useErrorMessage(errorReset)

	const handleSubmit=(event) => {
		event.preventDefault();
		if(confirmationPassword!==userInfo.password) {
			setErrorMessage("passwordConfirmed");
			setTimeShow();
		} else {

			dispatch(resetPassword(userInfo,navigate));
		}
	}
	useEffect(() => {
		if(errorReset&&confirmationPassword===userInfo.password) {
			setErrorMessage('serverResponse');
		}
	},[errorReset,setErrorMessage,confirmationPassword,userInfo])
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-5 col-md-7 mx-auto my-auto">
					<div className="card">
						<div className="card-body px-lg-5 py-lg-5 text-center">
							<h6 className="text">  SECURITY FORGET PASSWORD
							</h6>
							{message&&
								<span className="text-error">
									{message}!!
								</span>}
							<form onSubmit={(e) => handleSubmit(e)}>
								<p className="textchangepassword">change passwords</p>
								<div className="row mb-4">
									<div className="col-lg-">
										<input type="text-center" className="form-control text-lg text" placeholder="* * * * * * * * *" aria-label="2fa"
											onChange={(e) => setUserInfo({...userInfo,password: e.target.value})}
											required
										/>
									</div>
									<p className="textchangepassword">confirm  password</p>

									<div className="col-lg ">
										<input type="text-center" className="form-control text-lg text" placeholder="* * * * * * * * *" aria-label="2fa"
											onChange={(e) => setConfirmationPassword(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="row mb-4">
									<div className="row mb-4">
										<p className="textchangepassword">Email</p>
										<div className="col-lg ">
											<input type="text-center" className="form-control text-lg text" placeholder="* * * * * * * * *" aria-label="2fa"
												onChange={(e) => setUserInfo({...userInfo,email: e.target.value})}
												required
											/>
										</div>
									</div>
									<p className="textchangepassword">Retype Verification code</p>
									<div className="col-lg ">
										<input type="text-center" className="form-control text-lg text" placeholder="* * * * * * * * *" aria-label="2fa"
											onChange={(e) => setUserInfo({...userInfo,code: e.target.value})}
											required />
									</div>
								</div>
								<div className="text-center">
									<button className="btn-hover color-2">
										{resetLoading&&<Spinner />}
										Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateNewPassword