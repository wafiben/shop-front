import { useState } from "react";
export const useErrorMessage = (msg) => {
  const [message, setMessage] = useState("");

  const setErrorMessage = (errorType) => {
    switch (errorType) {
      case "state":
        setMessage("state not selected");
        break;
      case "city":
        setMessage("city not selected");
        break;
      case "passwordConfirmed":
        setMessage("check your password passwords are not confirmed");
        break;
      case "emptyPassword":
        setMessage("Epmty password");
        break;
      case "email":
        setMessage("email is required");
        break;
      case "serverResponse":
        setMessage(msg);
        break;
      case "codeVerification":
        setMessage("code is not the same that has been sended try again");
        break;
        case "quantity":
          setMessage("the selected quantity is greater than the available stock quantity");
          break;
      default:
        setMessage("you have missed some informations");
    }
  };
  const setTimeShow = () => {
    setTimeout(() => setMessage(""), 3000);
  };
  return {
    message,
    setTimeShow,
    setErrorMessage,
	setMessage
  };
};
