import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
function DomainList({ handleChange }) {
    const options = [
        { value: 'domain', text: 'domain' },
        { value: 'Butcher', text: 'Butcher' },
        { value: 'Restaurant', text: 'Restaurant' },
        { value: 'Market', text: 'Market' },
    ];
    return (
        <Form.Select aria-label="Default select example" onChange={handleChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </Form.Select>
    )
}

export default DomainList