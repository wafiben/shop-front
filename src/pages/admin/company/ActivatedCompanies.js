import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import TableUsers from "../../../components/dashboardAdmin/Table";
import { getActivatedCompanies } from "../../../redux/actions/adminAction";

function ActivatedCompanies() {
  const dispatch = useDispatch();
  const { company } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getActivatedCompanies());
  }, [dispatch]);
  if (company.companies.loading) {
    return <Spinner animation="border" variant="warning" />;
  }
  return <TableUsers typeUsers={"company"} users={company.companies.activ}  choice={'company'} />;
}

export default ActivatedCompanies;
