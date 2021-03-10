import { API_URL } from "./config";

const AUTH_PATH = "/api/auth";

export function login(username, password) {
  return fetch(API_URL + AUTH_PATH + "/signin", {
    method: "POST",
    body: JSON.stringify({ email: username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (resp.ok) {
      return resp.json()
    }
    throw new Error("Error signing in!")
  }).catch(error => alert(error));
}

export function signUp(user) {
  return fetch(API_URL + AUTH_PATH + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((resp) => resp.json());
}
