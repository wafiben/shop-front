import React,{useEffect,useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {useDispatch,useSelector} from "react-redux";
import {deleteProduct} from "../../redux/actions/productAction";
import ModifyProduct from "./ModifyProduct";
import {getProduct,modifyProductAction} from "../../redux/actions/productAction";
function ArticleAction({id}) {
	const dispatch=useDispatch();
	const {product,getOneProductLoading}=useSelector((state) => state.listReducer);
	const [productInfo,setProductInfo]=useState({
		name: "",
		qte: "",
		unit: "",
		price: "",
	});
	const [file,setFile]=useState(null);
	const [selectedFile,setSelectedFile]=useState(null);
	const [loader,setLoader]=useState(false);
	const [msg,setMessageConfirmation]=useState('')

	const handleQuantity=(operation) => {
		switch(operation) {
			case "+":
				setProductInfo({...productInfo,qte: productInfo.qte+1});
				break;
			case "-":
				if(productInfo.qte>0) {
					setProductInfo({...productInfo,qte: productInfo.qte-1});
				} else {
					return;
				}
				break;
			default:
				return;
		}
	};

	const handleChange=(e) => {
		const {value,name}=e.target
		setProductInfo({...productInfo,[name]: value});
	};

	const handleUnit=(unit) => {
		setProductInfo({...productInfo,unit: unit});
	};
	const handleChangeImage=(e) => {
		console.log("===>",e.target.files[0])
		setFile(e.target.files[0]);
		setSelectedFile(URL.createObjectURL(e.target.files[0]));
	}
	/*const modify=() => {
		dispatch(modifyProduct(_id,productInfo));
	};*/
	const setTimeShow=() => {
		setTimeout(() => setMessageConfirmation(""),3000);
	};


	const {name,price,qte,unit}=productInfo
	const handleSubmit=(e) => {
		e.preventDefault();
		const formData=new FormData();
		if(name!==""&&price!=0&&qte!=0&&unit!=="") {
			formData.append("SelectedFile",file);
			formData.append("price",price);
			formData.append("unitType",unit);
			formData.append("quantity",qte);
			formData.append("nameProduct",name);
			setLoader(true);
			setTimeout(() => {
				dispatch(modifyProductAction(id,formData));
				setProductInfo({...productInfo,qte: 0});
				handleClose();
				setLoader(false);
			},3000);
		} else {
			setMessageConfirmation("info not completed");
			setTimeShow();
		}
		setSelectedFile(null)
	}



	const [show,setShow]=useState(false);
	const handleClose=() => {
		setShow(false);
	}
	useEffect(() => {
		if(!getOneProductLoading) {
			setProductInfo({
				name: product.nameProduct,
				qte: product.quantity,
				unit: product.unitType,
				price: product.price,
				SelectedFile: product.SelectedFile
			})
		};
	},[getOneProductLoading,product])
	const handleShow=() => setShow(true);
	const modifyProduct=() => {
		dispatch(getProduct(id));
		handleShow();

	}
	return (
		<Dropdown>
			<Dropdown.Toggle className="action-product" id="dropdown-basic">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
					<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
					<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
				</svg> Action
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item onClick={modifyProduct}>Modify</Dropdown.Item>
				<ModifyProduct
					handleQuantity={handleQuantity}
					handleChange={handleChange}
					handleClose={handleClose}
					handleUnit={handleUnit}
					show={show}
					product={productInfo}
					handleChangeImage={handleChangeImage}
					file={file}
					selectedFile={selectedFile}
					msg={msg}
					loader={loader}
					handleSubmit={handleSubmit}
				/>
				<Dropdown.Item onClick={() => dispatch(deleteProduct(id))}>
					Delete
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default ArticleAction;
