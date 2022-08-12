import axios from "axios";
import { LoginType, SignupType } from "__types__/context/authContext.types";
export const loginService = async ({ email, password }:LoginType) =>
  await axios.post("/api/auth/login", {
    email,
    password,
  });
export const signUpService = async ({ email, password, username }:SignupType) =>
  await axios.post("/api/auth/signup", {
    email,
    password,
    username
  });
