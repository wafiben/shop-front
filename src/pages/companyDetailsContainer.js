import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOneCompany } from "../redux/actions/companyAction"
import { useEffect } from 'react';
import NavbarAfterConnect from '../components/navbars/NavbarAfterConneccilent';
import CompanyDetailsProfile from '../components/clientSpace/CompanyDetails';


function CompanyDetails() {
    return (
        <>
            <NavbarAfterConnect />
            <CompanyDetailsProfile />
        </>
    )
}

export default CompanyDetails