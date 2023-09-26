import {useState} from 'react';

export const useFetchState=() => {
	const [subdivisions,setSubdivisions]=useState([]);
	const [states,setStates]=useState([]);


	const fetchStates=async (countryCode) => {
		try {
			const response=await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
			const data=await response.json();

			if(data.length>0&&data[0].hasOwnProperty('subdivisions')) {
				const subdivisions=Object.keys(data[0].subdivisions);
				setStates(subdivisions);
			} else {
				setStates([]);
			}
		} catch(error) {
			console.error('Error fetching states:',error);
		}
	};

	return {
		fetchStates,
		/*subdivisions*/
	};
};
