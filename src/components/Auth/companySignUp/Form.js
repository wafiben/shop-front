import Input from "../../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../../atoms/Button";
import { colorButton } from "../../../styles";
import { colorButtonCreate } from "../../../styles";
import TextFiled from "../../../atoms/textFiled";
import { useNavigate } from "react-router-dom";
import DomainList from "./DomainList";
import PhoneInput from "react-phone-number-input";
import { useAuthCompany } from "../../../hooks/useAuth";
import "react-phone-number-input/style.css";

function CustomFormSignUp() {
  const navigate = useNavigate();

  const {
    onChange,
    valuePhone,
    setValuePhone,
    useInfoCompany,
    setUserInfoCompany,
    setSelectedElement,
    onSubmit,
  } = useAuthCompany();

  const { confirmationPassword } = useInfoCompany;

  return (
    <div className="comtainercreatecompany">
      <Form onSubmit={(e) => onSubmit(e)} className="createcompany">
        <div>
          <TextFiled
            textFiled="Choose your Account"
            className="textuppercase"
          />
          <CustomButton
            type="submit"
            style={colorButton}
            field={
              <i class="fa fa-user-circle-o" aria-hidden="true">
                client
              </i>
            }
            handleClick={() => navigate("/create-account-client")}
          />
          <CustomButton
            type="submit"
            style={colorButton}
            field={
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
            }
            handleClick={() => navigate("/create-account")}
          />
        </div>

        <Input
          value={useInfoCompany.nameOfCompany}
          placeholder="Enter company"
          field="company"
          type="text"
          handleChange={(e) => onChange(e)}
          name="nameOfCompany"
        />
        <PhoneInput
          placeholder="Enter phone number"
          value={valuePhone}
          onChange={setValuePhone}
        />
        <Input
          value={useInfoCompany.email}
          placeholder="Enter Email"
          field="Email"
          type="text"
          handleChange={(e) => onChange(e)}
          name="email"
        />
        <Input
          value={useInfoCompany.password}
          placeholder="Enter password"
          field="password"
          type="password"
          handleChange={(e) => onChange(e)}
          name="password"
        />
        <Input
          value={confirmationPassword}
          placeholder=" Enter Confirmation Password"
          field="Confirmation Password"
          type="password"
          handleChange={(e) => onChange(e)}
          name="confirmationPassword"
        />
        <div>
          domain
          <DomainList
            handleChange={(e) => setSelectedElement(e.target.value)}
          />
        </div>
        <Input
          value={useInfoCompany.zipCode}
          placeholder=" Enter zip code"
          field="zip code"
          type="text"
          handleChange={(e) => onChange(e)}
          name="zipCode"
        />

        <CustomButton
          type="submit"
          style={colorButtonCreate}
          field={"Create Account"}
        />
      </Form>
    </div>
  );
}

export default CustomFormSignUp;
