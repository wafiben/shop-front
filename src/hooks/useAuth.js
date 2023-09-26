
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registerClientAction,registerCompanyAction} from "../redux/actions/auth";
import {tunisiaDetails} from "../utils/tunisaCountry";
export const useAuthClient=() => {
	const navigate=useNavigate()
	const [valuePhone,setValuePhone]=useState()
	const dispatch=useDispatch()
	const [useInfoClient,setUserInfoClient]=useState({
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		confirmationPassword: null,
	});
	const [messageConfirmation,setMessageConfirmation]=useState("");
	const {password,confirmationPassword}=useInfoClient;
	const onChange=(e) => {
		setUserInfoClient({...useInfoClient,[e.target.name]: e.target.value});
	};
	const setTimeShow=() => {
		setTimeout(() => setMessageConfirmation(""),3000);
	};


	const onSubmit=(e) => {
		e.preventDefault();
		if(password!==confirmationPassword) {
			setMessageConfirmation("check your password passwords are not confirmed");
			setTimeShow();
		}
		if(password===confirmationPassword) {
			if(password.length<4) {
				setMessageConfirmation("your password must be at least 4 caracter");
				setTimeShow();
			} else {
				const user={
					firstName: useInfoClient.firstName,
					lastName: useInfoClient.firstName,
					email: useInfoClient.email,
					password: useInfoClient.password,
					phone: valuePhone,
					role: "client"
				}
				dispatch(registerClientAction(user,navigate))
			}
		}

	};

	return {
		useInfoClient,
		onChange,
		onSubmit,
		messageConfirmation,
		valuePhone,
		setValuePhone
	};
};
export const useAuthCompany=() => {
	const dispatch=useDispatch()
	const navigate=useNavigate()
	const [selectedState,setSlectedState]=useState(false);
	const [citiesForState,setCitiesForCountry]=useState([])
	const [country,setCountry]=useState("");
	const handleChangeCountryPicker=(e) => {
		setCountry(e.target.value)
	}

	const [messageConfirmation,setMessageConfirmation]=useState("");
	const [valuePhone,setValuePhone]=useState("");
	const [regionCountry,setRegionCountry]=useState({country: '',region: ''})
	const [useInfoCompany,setUserInfoCompany]=useState({
		email: "",
		password: "",
		nameOfComany: "",
		zipCode: "",
		domain: "",
		adress: "",
		confirmationPassword: ""
	});
	const setTimeShow=() => {
		setTimeout(() => setMessageConfirmation(""),3000);
	};
	const [selectedElement,setSelectedElement]=useState('')
	const [stateCountry,setStateCountry]=useState('');
	const [city,setCity]=useState('');
	const selectState=(e) => {
		setStateCountry(e.target.value);
		stateCountry!==""? setSlectedState(true):setSlectedState(false)
	}
	const onChange=(e) => {
		setUserInfoCompany({...useInfoCompany,[e.target.name]: e.target.value});
	};
	const {password,confirmationPassword}=useInfoCompany;
	const onSubmit=(e) => {
		e.preventDefault();
		if(password!==confirmationPassword) {
			setMessageConfirmation("check your password passwords are not confirmed");
			setTimeShow();
		}
		else if(!valuePhone) {
			setMessageConfirmation("phone is required");
			setTimeShow();
		}
		else if(stateCountry==="") {
			setMessageConfirmation("filed state is required");
			setTimeShow();
		}
		else if(selectedElement==="") {
			setMessageConfirmation("domain is required");
			setTimeShow();
		} else if(city==="") {
			setMessageConfirmation("city is required");
			setTimeShow();
		}
		else if(country==="") {
			setMessageConfirmation("country is required");
			setTimeShow();
		}
		else if(password===confirmationPassword) {
			if(password.length<4) {
				setMessageConfirmation("your password must be at least 4 caracter");
				setTimeShow();
			} else {

				const user={
					nameOfComany: useInfoCompany.nameOfComany,
					email: useInfoCompany.email,
					password: useInfoCompany.password,
					phone: valuePhone,
					domain: selectedElement,
					role: "company",
					zipCode: useInfoCompany.zipCode,
					country: country,
					state: stateCountry,
					region: city,
				}

				console.log({user})

				/*dispatch(registerCompanyAction(user,navigate))*/
			}
		}
	}
	const handleChange=(e) => {
		setSelectedElement(e.target.value)
	}
	const handleSelectState=(e) => {
		setStateCountry(e.target.value);
		if(stateCountry!=="select state") {
			setSlectedState(true);
			const filteredCities=tunisiaDetails.states.find((elt) => elt.name===e.target.value)?.cities
			setCitiesForCountry(filteredCities);
		}
		else {
			setSlectedState(false);
		}
	}

	const handleSelectCity=(e) => {
		setCity(e.target.value);
	}
	return {
		valuePhone,
		setValuePhone,
		onChange,
		useInfoCompany,
		onSubmit,
		regionCountry,
		setRegionCountry,
		handleChange,
		selectState,
		selectedState,
		handleSelectState,
		citiesForState,
		handleSelectCity,
		setCity,
		handleChangeCountryPicker,
		messageConfirmation,
		city,
		stateCountry,
		setCountry,
		country
	}
}