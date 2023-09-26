import NavbarCustomer from "../../../components/dashboardAdmin/NavbarCustomer";
import { Outlet } from "react-router-dom";

function Client() {
  return (
    <>
      <NavbarCustomer />
      <div className="mt-3">
        <Outlet />
      </div>
    </>
  );
}

export default Client;
