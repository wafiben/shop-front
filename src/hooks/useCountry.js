import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code}>{country.name.common}</div>
      ))}
    </div>
  );
};

export default YourComponent;
