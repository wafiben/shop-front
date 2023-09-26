import React from "react";
import viande from "../../images/viande.jpg";
import Image from "../../atoms/Image";
import TextFiled from "../../atoms/textFiled";
import logoButcher from "../../assets/images/logo-butcher.jpg";

function Card() {
	
  return (
    <div className="card w-25 p-3 m-2">
      <div class="card-body fw-bold">
        <Image image={logoButcher} />
        <TextFiled textFiled="butcher shop" className="text-warning" />
        <TextFiled textFiled="Adress" />
        {/* <TextFiled textFiled="200grm" /> */}
      </div>
    </div>
  );
}

export default Card;
