// import React, { useEffect } from "react";
// import NavbarAfterConnect from "../navbars/NavbarAfterConnec-cilent";
// import { useSelector } from "react-redux";
// import CardProduct from "./CardProduct";
// import { GiShoppingCart } from "react-icons/gi";
// import { useDispatch } from "react-redux";
// import { getProduct } from "../../redux/actions/productAction";
// function LisOfproductsCompany() {
//   const { list } = useSelector((state) => state.listReducer);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProduct());
//   }, [dispatch]);

//   return (
//     <div>
//       <NavbarAfterConnect />
//       <div className="list-page">
//         <div className="header-list-product">
//           <div className="shop-icon">
//             <GiShoppingCart size={50} />
//           </div>
//         </div>
//         <div className="container-list">
//           {list.map(({ _id, price, unitType, nameProduct, SelectedFile }) => (
//             <CardProduct
//               key={_id}
//               price={price}
//               unit={unitType}
//               name={nameProduct}
//               image={SelectedFile}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LisOfproductsCompany;
