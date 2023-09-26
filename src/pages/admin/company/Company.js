import NavbarCompany from "../../../components/dashboardAdmin/NavbarCompany";
import { Outlet } from "react-router-dom";
function Company() {
  return (
    <>
      <NavbarCompany />
      <div className="mt-3">
        <Outlet />
      </div>
    </>
  );
}

export default Company;
