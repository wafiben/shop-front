import React, { useEffect } from "react";
import "../../assets/style/detailsCompany.css";
import CardProductCompany from "./CardProductCompany";
import { useDispatch, useSelector } from "react-redux";
import { getOneCompany } from "../../redux/actions/companyAction.js";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function CompanyDetailsProfile() {
  const dispatch = useDispatch();
  const { company, loading, error } = useSelector(
    (state) => state.companyReducer
  );
  const { id, nameCompany } = useParams();
  

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOneCompany(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="resolt-profil-client">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  return (
    <>
      <div className="colorbody">
        <div className="naveprofilclient">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozxy746wCC8yP00EIlpWRqJ_f9OaspKdUwg&usqp=CAU"
            alt="Avatar"
            className="avatarlogoclient"
          />
          {company && (
            <div className="display-26 text-secondary me-2 font-weight-600">
              {company.nameOfComany}
            </div>
          )}
          <div className="naveprofilclient">
            <ul className="barprofilclient">
              <li className="barprofilclient">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-shop-window"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </li>
              <h1>hellossssssssssss</h1>
              <li
                className="barprofilclient"
                onClick={() =>
                  navigate(
                    `/company_details/${nameCompany}/${id}/profile/checkout_cart`
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>

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

        <div id="main-content" className="file_manager">
          <div className="containercart">
            {!loading && error && error}
            {company.hasOwnProperty("products") &&
            company.products.length !== 0 ? (
              company?.products
                .filter((elt) => elt.show)
                .map(
                  ({
                    nameProduct,
                    price,
                    unitType,
                    quantity,
                    SelectedFile,
                    show,
                    _id,
                  }) => (
                    <CardProductCompany
                      nameProduct={nameProduct}
                      price={price}
                      show={show}
                      unitType={unitType}
                      qte={quantity}
                      SelectedFile={SelectedFile}
                      id={_id}
                    />
                  )
                )
            ) : (
              <Spinner animation="border" variant="warning" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetailsProfile;
