import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModifyModal from "./ModifyModal";
import {useSelector} from "react-redux";
import Spinner from 'react-bootstrap/Spinner';

function ModifyProduct({show,handleClose,product,handleChange,handleQuantity,handleUnit,
	handleChangeImage,
	file,
	selectedFile,
	msg,loader,
	handleSubmit
}) {
	const {getOneProductLoading}=useSelector((state) => state.listReducer);
	
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modify Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{getOneProductLoading? <Spinner animation="border" variant="warning" />
						:<ModifyModal
							/*id={_id}*/
							name={product.name}
							handleChange={handleChange}
							handleUnit={handleUnit}
							unit={product.unit}
							handleQuantity={handleQuantity}
							quantity={product.qte}
							SelectedFile={product.SelectedFile}
							price={product.price}
							handleChangeImage={handleChangeImage}
							file={file}
							selectedFile={selectedFile}
							msg={msg}
						/>
					}

				</Modal.Body>
				<Modal.Footer>
					<Button className="action-product" onClick={handleClose}>
						Close
					</Button>

					<Button className="action-product" onClick={handleSubmit}>
						{!loader? "Modify":"loading"}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModifyProduct;
