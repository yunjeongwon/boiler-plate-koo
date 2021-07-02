import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export const loginUser = (reqData) => {
  const req = axios.post("/api/users/login", reqData).then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: req,
  };
};

export const registerUser = (reqData) => {
  const req = axios
    .post("/api/users/register", reqData)
    .then((res) => res.data);
  return {
    type: REGISTER_USER,
    payload: req,
  };
};

export const authUser = () => {
  const req = axios.get("/api/users/auth").then((res) => res.data);
  return {
    type: AUTH_USER,
    payload: req,
  };
};
