import {useEffect} from "react";
import total_customer_account from "../../assets/images/total_customer_account.svg";
import total_ban_customer_account from "../../assets/images/banned_customer_account.svg";
import verified_account_customer from "../../assets/images/verified_account_customer.svg";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {getLengthClientInfo} from "../../redux/actions/adminAction";
import {Spinner} from "react-bootstrap";

function NavbarCustomer() {
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const {
		clients: {
			count: {loading,all,ban,activ},
		},
	}=useSelector((state) => state.adminReducer);
	useEffect(() => {
		dispatch(getLengthClientInfo());
	},[dispatch]);

	return (
		<div>
			<div className="container-headerdachch">
				<div className="containerdashbord">
					<div className="container-headerelimant">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
							<div
								className="col custom-btn"
								onClick={() => navigate("/admin-space/customer/all_clients")}
							>
								<div className="card radius-10 border-start border-0 border-3 border-warning">
									<div className="card-body">
										<div className="d-flex align-items-center">
											<div>
												<p className="mb-0 text-secondary"> customer account</p>
												<h4 className="my-1 text-warning">
													{loading? (
														<Spinner animation="border" variant="warning" />
													):(
														all
													)}
												</h4>
											</div>
											<div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
												<img
													src={total_customer_account}
													alt="total_customer_account"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col custom-btn"
								onClick={() => navigate("/admin-space/customer/banned_clients")}
							>
								<div className="card radius-10 border-start border-0 border-3 border-warning">
									<div className="card-body">
										<div className="d-flex align-items-center">
											<div>
												<p className="mb-0 text-secondary"> blocked account</p>
												<h4 className="my-1 text-warning">
													{loading? (
														<Spinner animation="border" variant="warning" />
													):(
														ban
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
									navigate("/admin-space/customer/verified_clients")
								}
							>
								<div className="card radius-10 border-start border-0 border-3 border-warning">
									<div className="card-body">
										<div className="d-flex align-items-center">
											<div>
												<p className="mb-0 text-secondary">vérified account</p>
												<h4 className="my-1 text-warning">
													{loading? (
														<Spinner animation="border" variant="warning" />
													):(
														activ
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

export default NavbarCustomer;
