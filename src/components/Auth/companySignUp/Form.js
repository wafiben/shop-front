import React,{useEffect,useState} from "react";
import Input from "../../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../../atoms/Button";
import {colorButton} from "../../../styles";

import {colorButtonCreate} from "../../../styles";

import {styleForm} from "../../../styles";
import TextFiled from "../../../atoms/textFiled";
import {styleTextFilead} from "../../../styles/index";
import {lineStyle} from "../../../styles";
import {useNavigate} from "react-router-dom";
import DomainList from "./DomainList";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {useAuthCompany} from "../../../../src/hooks/useAuth"
import {StateCountry,CountryPicker} from "./CountryPicker";
import {FlagIcon} from "react-flag-kit";
import {notConfirmedSPasswrdStyle} from "../../../styles";
import {Country} from "./CountryPicker";

/*import {useFetchState} from './../../../hooks/useFetchState';*/



function CustomFormSignUp() {
	/*const {fetchStates}=useFetchState()*/
	const [states,setStates]=useState([])
	const navigate=useNavigate();
	const [userInfo,setUserInfo]=useState({
		nameOfComany: "",
		email: "",
		password: "",
		domain: "",
		role: "company",
		zipCode: "",
		country: "",
		state: "",
		region: ""
	});

	const [confirmationPassword,setConfirmationPassword]=useState('');
	const [value,setValue]=useState()

	const [countries,setCountries]=useState([]);
	const [selectedCountry,setSelectedCountry]=useState('');
	useEffect(() => {
		const fetchCountries=async () => {
			try {
				const response=await fetch('https://restcountries.com/v3.1/all');
				const data=await response.json();
				setCountries(data);
			} catch(error) {
				console.error('Error fetching country data:',error);
			}
		};
		fetchCountries();
	},[]);
	/*	const handleCountryChange=(event) => {
			console.log('syaebni')
			const countryName=event.target.value;
			setSelectedCountry(countryName);
			fetchStates(countryName);
		};*/








	const onSubmit=(e) => {
		e.preventDefault();
		console.log({userInfo})
	}
	return (
		<div className="comtainercreatecompany">
			<Form
				onSubmit={onSubmit}
				className="createcompany"
			>
				<div>
					<TextFiled
						textFiled="Choose your Account"
						className="textuppercase"

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
						field={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16" >
							<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
						</svg>}
						handleClick={() => navigate("/create-account")}
					/>
				</div>


				<Input
					value={userInfo.nameOfComany}
					placeholder=" Enter company"
					field="company"
					type="text"
					handleChange={(e) => setUserInfo({...userInfo,nameOfComany: e.target.value})}
					name="nameOfComany"
				/>
				<PhoneInput
					placeholder="Enter phone number"
					value={value}
					onChange={setValue}
					name="phone"
				/>
				<Input
					value={userInfo.email}
					placeholder="Enter Email"
					field="Email"
					type="text"
					onChange={(e) => setUserInfo({...userInfo,email: e.target.value})}
					name="email"
				/>
				<Input
					value={userInfo.password}
					placeholder="Enter password"
					field="password"
					type="password"
					onChange={(e) => setUserInfo({...userInfo,password: e.target.value})}
					name="password"
				/>
				<Input
					value={confirmationPassword}
					placeholder=" Enter Confirmation Password"
					field="Confirmation Password"
					type="password"
					handleChange={(e) => setConfirmationPassword(e.target.value)}
					name="confirmationPassword"
				/>
				<div>
					domain
					<DomainList handleChange={(e) => setUserInfo({...userInfo,domain: e.target.value})} />
				</div>
				<div className='mt-2'>
					<select style={{width: "100%",borderRadius: "5px",height: "40px"}} onChange={(e) => {
						setSelectedCountry(e.target.value);
					}} value={selectedCountry}>
						<option value="">Global</option>
						{countries.map((country,i) => (
							<option key={i} value={country.name.common}>
								{console.log(country.flags.png)}
								{country.name.common}
							</option>
						))}
					</select>
				</div>
				{countries.map((country) => <img src={(country.flags.png)} alt={country.name.common} />)}



				<img src={"https://flagcdn.com/w320/mk.png"} />

				<div className='mt-2'>
					{selectedCountry&&<h1>hello</h1>}
					{/*State
					<StateCountry
						selectedState={selectedState}
						handleChange={handleSelectState}
						citiesForState={citiesForState}
						handleSelectCity={(e) => setCity(e.target.value)}
					/>*/}
				</div>

				<Input
					value={userInfo.zipCode}
					placeholder=" Enter zip code"
					field=" zip code"
					type="text"
					handleChange={(e) => setUserInfo({...userInfo,zipCode: e.target.value})}
					name="zipCode"
				/>

				<CustomButton
					type="submit"
					style={colorButtonCreate}
					field={"Create Account"}
				/>
				{/*	{messageConfirmation&&(
					<TextFiled
						textFiled={messageConfirmation}
						className="text-uppercase"
						style={notConfirmedSPasswrdStyle}
					/>
				)}*/}
			</Form>

		</div>
	);
}

export default CustomFormSignUp;
