import {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import {verifyValidationCodeRegister} from './../redux/actions/auth';
import {useErrorMessage} from './../hooks/useErrorMessage';
import "../assets/style/file.css"


function CreateCodeAccount() {
	const dispatch=useDispatch();
	const navigate=useNavigate()
	const {message,setTimeShow,setErrorMessage}=useErrorMessage()
	const {user,loadingValidationCode,checkValidationCode}=useSelector(state => state.authReducer)
	useEffect(() => {
		/*if(!emailToVerify) {
			navigate('/');
			return;
		}*/
		if(checkValidationCode===false) {
			setErrorMessage('codeVerification');
			setTimeShow();
		}
	},[user,checkValidationCode,navigate,setErrorMessage,setTimeShow]);



	const [code,setCode]=useState(["","","","","",""]);
	const handleChange=(index,value) => {
		const updateDigits=[...code];
		updateDigits[index]=value;
		setCode(updateDigits)
	}

	const handleSubmit=(e) => {
		e.preventDefault();
		dispatch(verifyValidationCodeRegister(code.join(''),user.email,navigate))
	}
	return (
		<div className="container-middle">
			<div className="row">
				<div className="col-lg-5 col-md-7 mx-auto my-auto">
					<div className="card">
						<div className="card-body px-lg-5 py-lg-5 text-center">
							<h2 className="text-">Verification  your email</h2>
							<p className="mb-4">Enter 6-digits code from your athenticatior app.</p>
							<form>
								<div className="row mb-4">
									<div className="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
										<input maxLength={1}
											type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa"
											value={code[0]}
											onChange={(e) => handleChange(0,e.target.value)}
										/>
									</div>
									<div className="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
										<input maxLength={1}
											type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa"
											value={code[1]}
											onChange={(e) => handleChange(1,e.target.value)}
										/>
									</div>
									<div className="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
										<input maxLength={1}
											type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa"
											value={code[2]}
											onChange={(e) => handleChange(2,e.target.value)}
										/>
									</div>
									<div className="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
										<input maxLength={1}
											type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa"
											value={code[3]}
											onChange={(e) => handleChange(3,e.target.value)}
										/>
									</div>
									<div className="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
										<input maxLength={1}
											type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa"
											value={code[4]}
											onChange={(e) => handleChange(4,e.target.value)}
										/>
									</div>
									<div className="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
										<input maxLength={1}
											type="text" className="form-control text-lg text-center" placeholder="_" aria-label="2fa"
											value={code[5]}
											onChange={(e) => handleChange(5,e.target.value)}
										/>
									</div>
								</div>
								<div className="text-center">
									<button className="btn-hover color-2" onClick={handleSubmit}>
										{loadingValidationCode&&<Spinner animation="border" variant="warning" />}
										Submit</button>
								</div>
								{message&&<div className='text-error'>{message}</div>}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateCodeAccount