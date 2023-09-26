import axios from "axios";
export const authClient = () => {
  const loginClient = (url) => axios.get(url);
  const signUpClient = (url) => axios.get(url);
  return { loginClient, signUpClient };
};

const a = (url) => axios.get(url);

const x = async () => {
  try {
    const res = await axios.get("ss");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const y = async () => {
  try {
    const res = await a("ss");
  } catch (error) {
    console.log(error);
  }
};
