import React,{useState} from "react";
import AddProduct from "./AddProduct";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {addProduct} from "../../redux/actions/productAction";
import {useDispatch,useSelector} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "../../assets/style/file.css";
function AddProducModal({show,handleClose}) {
	const [selectedFile,setSelectedFile]=useState(null);
	const {loading}=useSelector((state) => state.listReducer);
	const [file,setFile]=useState(null);
	const [loader,setLoader]=useState(false);
	const dispatch=useDispatch();
	const [singleProduct,setSingleProduct]=useState({
		name: "",
		price: 0,
		operation: "",
		qte: 0,
		unit: "unit",
	});
	const [messageConfirmation,setMessageConfirmation]=useState("");
	const setTimeShow=() => {
		setTimeout(() => setMessageConfirmation(""),3000);
	};


	const {name,price,qte,unit}=singleProduct;
	const handleChange=(e) => {
		setSingleProduct({
			...singleProduct,
			[e.target.name]: e.target.value,
		});
	};
	const handleQuantity=(operation) => {
		switch(operation) {
			case "+":
				setSingleProduct({...singleProduct,qte: singleProduct.qte+1});
				break;
			case "-":
				if(singleProduct.qte>0) {
					setSingleProduct({...singleProduct,qte: singleProduct.qte-1});
				} else {
					return;
				}
				break;
			default:
				return;
		}
	};

	const handleChangeFile=(e) => {
		setFile(e.target.files[0]);
		setSelectedFile(URL.createObjectURL(e.target.files[0]));
	};
	const handleSubmit=(e) => {
		e.preventDefault();
		const formData=new FormData();		
		if(name!==""&&price!=0&&qte!=0&&unit!==""&&file!=null) {
			formData.append("SelectedFile",file);
			formData.append("price",price);
			formData.append("unitType",unit);
			formData.append("quantity",qte);
			formData.append("nameProduct",name);
			setLoader(true);
			setTimeout(() => {
				dispatch(addProduct(formData));
				setSingleProduct({...singleProduct,qte: 0});
				handleClose();
				setLoader(false);
			},3000);
		} else {
			setMessageConfirmation("info not completed");
			setTimeShow();
		}
		setSelectedFile(null)
	};

	const handleUnit=(unit) => {
		setSingleProduct({...singleProduct,unit: unit});
	};
	const handleCloseModalAndSetQuantityNull=() => {
		setSingleProduct({...singleProduct,qte: 0});
		setFile(null);
		setSelectedFile(null)
		handleClose()
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddProduct
						handleQuantity={handleQuantity}
						quantity={singleProduct.qte}
						handleChange={handleChange}
						handleUnit={handleUnit}
						unit={singleProduct.unit}
						image={singleProduct.image}
						handleChangeFile={handleChangeFile}
						selectedFile={selectedFile}
					/>
				</Modal.Body>
				<Modal.Footer>
					{messageConfirmation&&(
						<span className="alert">{messageConfirmation}</span>
					)}

					<Button className="action-product" onClick={handleCloseModalAndSetQuantityNull}>
						Close
					</Button>
					<Button className="action-product" onClick={handleSubmit}>
						{loader&&<Spinner animation="border" variant="warning" />}
						Add Product
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddProducModal;
