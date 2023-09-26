import {useState,useEffect} from "react";
import {tunisiaDetails} from '../../../utils/tunisaCountry';
import Form from 'react-bootstrap/Form';
import {FlagIcon} from "react-flag-kit";
import {useAuthCompany} from "../../../hooks/useAuth";
export function StateCountry({handleChange,selectedState,citiesForState,handleSelectCity}) {
	return (<>
		<Form.Select aria-label="Default select example" onChange={handleChange}>
			{tunisiaDetails.states.map(({name,id}) => (
				<option key={id}>
					{name}
				</option>
			))}
		</Form.Select>
		<div className="mt-2">
			{selectedState&&
				<>
					<Form.Select aria-label="Default select example" onChange={handleSelectCity}>
						{citiesForState.map(({name,id}) => (
							<option key={id}>
								{name}
							</option>
						))}
					</Form.Select>
				</>}
		</div>
	</>
	)
}
export const CountryPicker=({handleChange}) => {
	const options=[
		{value: 'Tunisa',text: 'Tunisa'}
	];
	return (
		<Form.Select aria-label="Default select example" onChange={handleChange}>
			<option>Tunisia</option>

			{/*{options.map(option => (
				<>
					<option key={option.value} value={option.value}>
						{option.text}
					</option>
				</>
			))}*/}

		</Form.Select>

	)
}









