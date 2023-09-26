import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../assets/style/file.css";
import AddProducModal from "./AddProducModal";
import { useSelector } from "react-redux";

function HeaderDasboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const numbertOfProduct = useSelector(
    (state) => state.listReducer.productCompany
  ).length;
  const activatedProduct = useSelector((state) => state.listReducer.productCompany).filter((elt) => elt.show === true)
  const desactivatedProduct = useSelector((state) => state.listReducer.productCompany).filter((elt) => elt.show === false)
  return (
    <div>
      <div className="container-headerdachch ">
        <div className="containerdashbord">
          <div className="container-headerelimant">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">

              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Add product</p>
                        <h4 className="my-1 text-warning"></h4>

                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-cubes" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Earn money</p>
                        <h4 className="my-1 text-warning"></h4>

                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-money" aria-hidden="true"></i>


                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Archive</p>
                        <h4 className="my-1 text-warning"></h4>

                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-archive" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">shipping</p>
                        <h4 className="my-1 text-warning"></h4>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-truck" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-headerdachtable">
        <div className="containerdashbord">
          <div className="container-headerelimant">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">

              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Total product </p>
                        <h4 className="my-1 text-warning">{numbertOfProduct}</h4>

                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-cubes" aria-hidden="true"></i>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-info">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">      Total Activer
                        </p>
                        <h4 className="my-1 text-info"> {activatedProduct && activatedProduct.length} </h4>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i className="fa fa-cubes" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-secondary">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Total Désactiver</p>
                        <h4 className="my-1 text-secondary"> {desactivatedProduct && desactivatedProduct.length}</h4>

                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i className="fa fa-cubes" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Total Discount</p>
                        <h4 className="my-1 text-warning">{numbertOfProduct}</h4>

                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-percent" aria-hidden="true"></i>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>
                <Button className="addproduct" onClick={handleShow}>
                  Add Product
                </Button>
                <AddProducModal handleClose={handleClose} show={show} />
              </h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDasboard;
