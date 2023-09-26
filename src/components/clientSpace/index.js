import React from "react";
import "../../assets/style/clientSpace.css";
import CardCompany from "./CardCompany";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllCompanies} from "./../../redux/actions/companyAction";
import Spinner from "react-bootstrap/Spinner";
function ClientSpaceListCompany() {
	const dispatch=useDispatch();
	const {companies}=useSelector((state) => state.companyReducer);
	useEffect(() => {
		dispatch(getAllCompanies());
	},[dispatch]);
	return (
		<div className="logoccompany">
			<div className="divfilter">
				<div className="divnavsearshcompany">
					<nav class="navbar navbar-dark ">
						<div class="divnavsearshcompany">
							<span class="" id="search-addon">
								<select className="drapo">
									<option value="Spain" selected>
										Spain
									</option>
									<option value="United_Kingdom">United Kingdom</option>
									<option value="United_Kingdom"> Tunisia</option>
									<option value="United_Kingdom">France</option>
								</select>
								<select className="drapo">
									<option value="Spain" selected>
										Tunis
									</option>
									<option value="United_Kingdom">Ariana</option>
									<option value="United_Kingdom"> Manouba</option>
									<option value="United_Kingdom">Ben Arous</option>
								</select>
								<select className="drapo">
									<option value="Spain" selected>
										{" "}
										bardo
									</option>
									<option value="United_Kingdom">marsa</option>
									<option value="United_Kingdom"> lac 1</option>
									<option value="United_Kingdom"> sokra</option>
								</select>
								<lord-icon
									src="https://cdn.lordicon.com/fihkmkwt.json"
									trigger="loop"
									colors="primary:#121331,secondary:#ee6d66"
								></lord-icon>
							</span>
						</div>
					</nav>
				</div>
			</div>

			<div>
				<div className="boxstory">
			
					<div class="row">
						<div class="col-lg-12 layout-spacing">
							<div class="statbox widget box box-shadow">
								<div class="widget-header">
									<div class="row">
										<div class="col-xl-12 col-md-12 col-sm-12 col-12">
											<h4 class="pb-0">Stories</h4>
										</div>
									</div>
								</div>

								<div class="widget-content widget-content-area">
									<div class="row">
										<div class="col-lg-12 col-md-12 col-sm-12">
											<div id="content_1" class="tabcontent story-area">
												<div class="story-container-1">
													<div class="single-story">
														<img
															src="https://www.tastingtable.com/img/gallery/tips-you-need-to-make-restaurant-quality-sandwiches-at-home/intro-1683037630.jpg"
															class="single-story-bg"
														/>
														<div class="story-author">
															<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKbXunHONkCeGfxaNSMDoV3ZfOLr2PWGsZw&usqp=CAU" />
															<p>Retro</p>
														</div>
													</div>
													<div class="single-story">
														<img
															src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872"
															class="single-story-bg"
														/>
														<div class="story-author">
															<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBaDkt7UNyOJJUa6lq59Mudz9kTTM0JRoFRoFvmptB-j5SeD6OBbXxabfNPwLXZQB4M8&usqp=CAU" />
															<p>Sagarika</p>
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
				</div>
			</div>

			<div className="box-companies">
				<div class="container">
					<nav class="navbar navbar-dark ">
						<div class="divnavsearshcompany">
							<form class="d-flex input-group w-auto">
								<input
									type="search"
									class="form-control rounded"
									placeholder="Search"
									aria-label="Search"
									aria-describedby="search-addon"
								/>
								<span
									class="input-group-text text-white border-0"
									id="search-addon"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill=""
										class="bi bi-shop-window"
										viewBox="0 0 16 16"
									>
										<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
									</svg>
								</span>
							</form>
						</div>
					</nav>
					<div class="row">
						<div class="col-lg-12">
							<div class="text-center">
								<ul
									class="col container-filter portfolioFilte list-unstyled mb-0"
									id="filter"
								>
									<li>
										<a class="categories active" data-filter="*">
											All
										</a>
									</li>
									<li>
										<a class="categories" data-filter=".branding">
											Butcher
										</a>
									</li>
									<li>
										<a class="categories" data-filter=".design">
											Restaurant
										</a>
									</li>
									<li>
										<a class="categories" data-filter=".photo">
											Market
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{companies.length!==0? (
					companies.map(({_id,nameOfComany,country,state,region}) => (
						<CardCompany
							nameOfComany={nameOfComany}
							country={country}
							state={state}
							region={region}
							id={_id}
						/>
					))
				):(
					<Spinner animation="border" variant="warning" />
				)}
			</div>
		</div>
	);
}
export default ClientSpaceListCompany;
