import total_ban_customer_account from "../../assets/images/banned_customer_account.svg";
import total_comany_account from "../../assets/images/total_comany_account.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLengthCompanyInfo } from "../../redux/actions/adminAction";
import { Spinner } from "react-bootstrap";
import verified_account_customer from "../../assets/images/verified_account_customer.svg";

function NavbarCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    company: {
      companyBannedCount,
      allCompaniesCount,
      activatedCompaniesCount,
      loading,
    },
  } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch(getLengthCompanyInfo());
  }, [dispatch]);

  return (
    <div>
      <div className="container-headerdachch">
        <div className="containerdashbord">
          <div className="container-headerelimant">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
              <div
                className="col custom-btn"
                onClick={() => navigate("/admin-space/company/all_companies")}
              >
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary"> customer account</p>
                        <h4 className="my-1 text-warning">
                          {loading ? (
                            <Spinner animation="border" variant="warning" />
                          ) : (
                            allCompaniesCount
                          )}
                        </h4>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                        <img
                          src={total_comany_account}
                          alt="total_comany_account"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col custom-btn"
                onClick={() =>
                  navigate("/admin-space/company/banned_companies")
                }
              >
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary"> blocked account</p>
                        <h4 className="my-1 text-warning">
                          {loading ? (
                            <Spinner animation="border" variant="warning" />
                          ) : (
                            companyBannedCount
                          )}
                        </h4>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                        <img
                          src={total_ban_customer_account}
                          alt="ban customer account"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col custom-btn"
                onClick={() =>
                  navigate("/admin-space/company/verified_companies")
                }
              >
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">vérified account</p>
                        <h4 className="my-1 text-warning">
                          {loading ? (
                            <Spinner animation="border" variant="warning" />
                          ) : (
                            activatedCompaniesCount
                          )}
                        </h4>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                        <img
                          src={verified_account_customer}
                          alt="verif_custom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarCompany;
