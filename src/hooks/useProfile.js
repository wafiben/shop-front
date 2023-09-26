import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {useEffect,useState} from 'react';
import {updateProfileAction,verifyTypedPassword,handlePasswordCheckState,getProfile} from "../redux/actions/auth";


export const useProfile=() => {
	const dispatch=useDispatch();
	const {user,loading}=useSelector((state) => state.authReducer);
	const {loadingCheckPassword,checkpassword}=useSelector(state => state.authReducer)
	const [detailsValue,setDetailsValue]=useState(null);
	const [showBloc,setShowBloc]=useState(false)
	const [itemToBeShown,setItem]=useState([false,false,false]);
	const [msg,setMessageConfirmation]=useState('')

	const [confirmationPassword,setConfirmationPassword]=useState('');
	const [password,setPassword]=useState('');

	const [currentPassword,setCurrentPassword]=useState('');
	const handleChangeCurrentPassword=(e) => {
		const {value}=e.target;
		setCurrentPassword(value);
	}
	const handleCheckCurrentPassword=() => {
		dispatch(verifyTypedPassword(currentPassword))
	}




	const setTimeShow=() => {
		setTimeout(() => setMessageConfirmation(""),3000);
	};
	
	const handlePasswordCheckToFalse=() => {
		dispatch(handlePasswordCheckState())
	}


	const handleProfile=(text) => {
		switch(text) {
			case "setting": setDetailsValue(user)
				const newItems=itemToBeShown.map((elt,index) => {
					if(index===0) {
						return true
					} else {
						return false
					}
				})
				setItem(newItems)
				break;
			case "details": setDetailsValue(user);
				const item=itemToBeShown.map((elt,index) => {
					if(index===1) {
						return true
					} else {
						return false
					}
				})
				setItem(item);
				handlePasswordCheckToFalse()
				break
			case "story":
				const tepm=itemToBeShown.map((elt,index) => {
					if(index===2) {
						return true
					} else {
						return false
					}
				})
				setItem(tepm);
				handlePasswordCheckToFalse()
				break;
			default: return
		}
	}
	useEffect(() => {
		!detailsValue? setShowBloc(false):setShowBloc(true)
	},[detailsValue])
	const navigate=useNavigate();
	const handleNavigate=(path) => {
		navigate(`/${path}`);
	};

	useEffect(() => {
		/*	dispatch(getProfile());*/
		if(!loading&&user) {
			/*	setUserInfoClient({
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					phone: user.phone,
				})*/
		}
	},[dispatch,loading,user]);


	return {
		handleNavigate,
		handleProfile,detailsValue,showBloc,itemToBeShown,setConfirmationPassword,confirmationPassword,setPassword,password,
		msg,
		handleChangeCurrentPassword,handleCheckCurrentPassword,
		loadingCheckPassword,
		checkpassword,
		handlePasswordCheckToFalse
	};
};
