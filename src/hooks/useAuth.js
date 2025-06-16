import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerClientAction } from "../redux/actions/auth";
import { registerCompanyAction } from "../redux/actions/auth";

export const useAuthClient = () => {
  const navigate = useNavigate();
  const [valuePhone, setValuePhone] = useState();
  const dispatch = useDispatch();
  const [useInfoClient, setUserInfoClient] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmationPassword: null,
  });

  const [messageConfirmation, setMessageConfirmation] = useState("");
  const { password, confirmationPassword } = useInfoClient;
  const onChange = (e) => {
    setUserInfoClient({ ...useInfoClient, [e.target.name]: e.target.value });
  };
  const setTimeShow = () => {
    setTimeout(() => setMessageConfirmation(""), 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmationPassword) {
      setMessageConfirmation("check your password passwords are not confirmed");
      setTimeShow();
    }
    if (password === confirmationPassword) {
      if (password.length < 4) {
        setMessageConfirmation("your password must be at least 4 caracter");
        setTimeShow();
      } else {
        const user = {
          firstName: useInfoClient.firstName,
          lastName: useInfoClient.firstName,
          email: useInfoClient.email,
          password: useInfoClient.password,
          phone: valuePhone,
          role: "client",
        };
        dispatch(registerClientAction(user, navigate));
      }
    }
  };

  return {
    useInfoClient,
    onChange,
    onSubmit,
    messageConfirmation,
    valuePhone,
    setValuePhone,
  };
};

export const useAuthCompany = () => {
  const [stateCountry, setStateCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedState, setSlectedState] = useState(false);
  const [citiesForState, setCitiesForCountry] = useState([]);
  const [country, setCountry] = useState("");
  const [messageConfirmation, setMessageConfirmation] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  const [regionCountry, setRegionCountry] = useState({
    country: "",
    region: "",
  });

  const [useInfoCompany, setUserInfoCompany] = useState({
    email: "",
    password: "",
    nameOfCompany: "",
    zipCode: "",
    domain: "",
    adress: "",
    confirmationPassword: "",
  });
  const setTimeShow = () => {
    setTimeout(() => setMessageConfirmation(""), 3000);
  };
  const [selectedElement, setSelectedElement] = useState("");
  const [city, setCity] = useState("");

  const selectState = (e) => {
    setStateCountry(e.target.value);
    stateCountry !== "" ? setSlectedState(true) : setSlectedState(false);
  };

  const onChange = (e) => {
    setUserInfoCompany({ ...useInfoCompany, [e.target.name]: e.target.value });
  };

  const { password, confirmationPassword } = useInfoCompany;
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmationPassword) {
      console.log("a");
      setMessageConfirmation("check your password passwords are not confirmed");
      setTimeShow();
    } else if (!valuePhone) {
      console.log("b");
      setMessageConfirmation("phone is required");
      setTimeShow();
    } else if (selectedElement === "") {
      console.log("c");
      setMessageConfirmation("domain is required");
      setTimeShow();
    }else {
      const user = {
        nameOfCompany: useInfoCompany.nameOfCompany,
        email: useInfoCompany.email,
        password: useInfoCompany.password,
        phone: valuePhone,
        domain: selectedElement,
        role: "company",
        zipCode: useInfoCompany.zipCode,
        country: country,
        state: stateCountry,
        region: city,
      };
      dispatch(registerCompanyAction(user, navigate)); 
    }
  };

  return {
    setUserInfoCompany,
    valuePhone,
    setValuePhone,
    onChange,
    useInfoCompany,
    onSubmit,
    regionCountry,
    setRegionCountry,
    selectState,
    selectedState,
    citiesForState,
    setCity,
    messageConfirmation,
    city,
    stateCountry,
    setCountry,
    country,
    setSelectedElement,
  };
};
