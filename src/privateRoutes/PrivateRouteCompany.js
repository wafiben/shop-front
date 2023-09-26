import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProfile } from "../redux/actions/auth";
import { useLocation } from 'react-router-dom';
function PrivateRouteCompany({ children }) {
  const location = useLocation();
  console.log({ location })
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  return (
    <div>
      {token && role === "company" ? children : <Navigate to="/" />}
    </div>
  );
}

export default PrivateRouteCompany;
