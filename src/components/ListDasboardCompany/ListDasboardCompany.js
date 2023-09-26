import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import imageProduct from "../../assets/images/imageProduct.jpg";
import "../../assets/style/file.css";
import CheckboxForm from "./CheckboxForm";
import "../../assets/style/file.css";
import HeaderDasboard from "./HeaderDasboard";
import ArticleAction from "./ArticleAction";
import { useSelector, useDispatch } from "react-redux";
import { getProductOfCompany } from "../../redux/actions/productAction.js";
import Spinner from "react-bootstrap/Spinner";
import { handleShowProduct } from './../../redux/actions/productAction';

function ListDasboardCompany() {
	const dispatch = useDispatch();
	const { productCompany, loading, error, msg } = useSelector((state) => state.listReducer);
	useEffect(() => {
		dispatch(getProductOfCompany());
	}, [dispatch]);
	const handleClickShow = (id) => {
		dispatch(handleShowProduct(id))
	}
	return (
		<>
			<HeaderDasboard />
			<div className="container-headertable">
				<div className="containerdashbord">
					<div className="container-headerelimant">
						<div className="zz">
							<Table>
								<thead>
									<tr className="">
										<th className="">Product</th>
										<th className="" ></th>
										<th className="" >Status</th>
										<th className=""  >Unit price</th>
										<th className=""  >Discount</th>

										<th className="" >Unit</th>
										<th className=""  >Stock</th>
										<th className="" > Actions</th>
									</tr>
								</thead>
								{error ? <span className="erro-text">{error}</span> :
									<tbody>
										{!loading ? (
											productCompany.map((elt) => (
												<tr key={elt._id}>
													<td>
														<img
															src={
																elt.SelectedFile && `/imageProducts/${elt.SelectedFile}`
															}
															alt={`${elt.SelectedFile}`}
															width="40"
															height="40"
															className="image-product"
														/>
													</td>
													<td>
														{elt.nameProduct && elt.nameProduct}
													</td>
													<td >
														<CheckboxForm handleClick={handleClickShow} id={elt._id} show={elt.show} />
													</td>
													<td>{elt.price}</td>
													<td>{elt.price}</td>

													<td>{elt.unitType}</td>
													<td>{elt.quantity}</td>
													<td>
														<ArticleAction id={elt._id} name={elt.nameProduct} />
													</td>
												</tr>
											))
										) : (
											<Spinner animation="border" variant="warning" />
										)}
									</tbody>}
							</Table>
						</div>
					</div>

				</div>

			</div>
		</>
	);
}

export default ListDasboardCompany;
