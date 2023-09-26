import React from "react";
import Form from "react-bootstrap/Form";
import DropDownListUnit from "./DropDownListUnit";

function ModifyModal({
	quantity,
	id,
	name,
	handleQuantity,
	price,
	unit,
	SelectedFile,
	handleUnit,
	handleChange,
	handleChangeImage,
	file,
	selectedFile,
	msg,

}) {
	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name of Product</Form.Label>
					<Form.Control
						name="name"
						type="text"
						placeholder={name}
						value={name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>price</Form.Label>
					<Form.Control
						name="price"
						type="number"
						placeholder={price}
						value={price}
						onChange={handleChange}
					/>
					<DropDownListUnit unit={unit} handleUnit={handleUnit} />
				</Form.Group>
			</Form>
			<div className="container-quantity">
				<button className="quantity" onClick={() => handleQuantity("+")}>
					+
				</button>
				<span>{quantity}</span>
				<button className="quantity" onClick={() => handleQuantity("-")}>
					-
				</button>
			</div>

			<div>
				<label for="avatar" className="photo-container">
					drag your photo from Device
					<img
						src={!selectedFile? `/imageProducts/${SelectedFile}`:selectedFile}
						alt="add-product"
						width="100"
					/>
					<input
						type="file"
						id="avatar"
						name="image"
						accept="image/png, image/jpeg"
						onChange={handleChangeImage}
					/>

				</label>
				{msg&&msg}
			</div>
		</>
	);
}

export default ModifyModal;
