/*import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getOperation} from './../../redux/actions/adminAction';
import total_customer_account from "../../assets/images/total_customer_account.svg";
import total_ban_customer_account from "../../assets/images/banned_customer_account.svg";
import verified_account_customer from "../../assets/images/verified_account_customer.svg";

import total_comany_account from "../../assets/images/total_comany_account.svg";
import verif_company_account from "../../assets/images/verified_company_account.svg";

function HeaderDashboard() {
	const dispatch=useDispatch();
	const {currentTable,users,activatedUser,bannedUser}=useSelector((state) => state.adminReducer)
	const lengthBannedAccount=bannedUser.length
	const lengthActivatedAccount=activatedUser.length
	const chooseOperation=(op) => {
		dispatch(getOperation(op));
	}
	return (
		<div>

			{currentTable!==""&&<div className="container-headerdachch">
				<div className="containerdashbord">
					<div className="container-headerelimant">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
							<div className="col custom-btn" onClick={() => chooseOperation("total")}>
								<div className="card radius-10 border-start border-0 border-3 border-warning">
									<div className="card-body">
										<div className="d-flex align-items-center">
											<div>
												<p className="mb-0 text-secondary"> {currentTable==="client"? "customer account":"company account"}

												</p>
												<h4 className="my-1 text-warning">{users.length}</h4>

											</div>
											<div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
												{currentTable==="client"? <img src={total_customer_account} alt="total_customer_account" />:
													<img src={total_comany_account} alt="total_company" />}

											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col custom-btn" onClick={() => chooseOperation("ban")}>
								<div className="card radius-10 border-start border-0 border-3 border-warning">
									<div className="card-body">
										<div className="d-flex align-items-center">
											<div>
												<p className="mb-0 text-secondary"> blocked account
												</p>
												<h4 className="my-1 text-warning">{lengthBannedAccount}</h4>

											</div>
											<div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">

												{currentTable==="client"? <img src={total_ban_customer_account} alt="ban customer account" />:
													(<>
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
															<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
														</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
															<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
														</svg>
													</>)
												}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col custom-btn" onClick={() => chooseOperation("verified")}>
								<div className="card radius-10 border-start border-0 border-3 border-warning">
									<div className="card-body">
										<div className="d-flex align-items-center">
											<div>
												<p className="mb-0 text-secondary">vérified account</p>
												<h4 className="my-1 text-warning">{lengthActivatedAccount}</h4>

											</div>
											<div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
												{currentTable==="client"? <img src={verified_account_customer} alt="verif_custom" />:
													<>
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
															<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
														</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
															<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
															<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
														</svg>
													</>}

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>}
		</div>)

}

export default HeaderDashboard




*/