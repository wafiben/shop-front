import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProfile } from "../redux/actions/auth";
function PrivateRouteClient({ children }) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const dispatch = useDispatch()
    useEffect(() => {
        /*dispatch(getProfile())*/
    }, [dispatch])
    return (
        <div>
            {token && role === "client" ? children : <Navigate to="/" />}
        </div>
    );
}

export default PrivateRouteClient;
