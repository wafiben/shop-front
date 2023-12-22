import React from "react";
import NavbarAfterConnect from "../components/navbars/NavbarAfterConneccilent";
import CompanyDetailsProfile from "../components/clientSpace/CompanyDetails";
import { getListOrderbyClient } from "../redux/actions/shopAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function CompanyDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListOrderbyClient());
  }, []);

  return (
    <>
      <NavbarAfterConnect />
      <CompanyDetailsProfile />
    </>
  );
}

export default CompanyDetails;
